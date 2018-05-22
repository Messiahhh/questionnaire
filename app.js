const path = require('path')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const logger = require('koa-logger')
const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')
const send = require('koa-send')
const axios = require('axios')
const qs = require('querystring')
const mysql = require('mysql')
let conn = Promise.promisifyAll(mysql.createConnection(require('./mysql')))
conn.connect()


let apiurl = "https://wx.idsbllp.cn/MagicLoop/index.php?s=/addon/Api/Api/oauth&redirect="

let debug = {
    mode: false,
    openid: 'ouRCyjjn66OCs-aXwBVJ50bBG1sA',
}



app.use(logger())

app.use(serve(path.join(__dirname, 'dist')))
app.use(koaBody({multipart: true}))

router

    .get('/', async (ctx, next) => {
        let openid = ctx.cookies.get('openid')
        if (!openid) {
            if (debug.mode) {
                openid = debug.openid
            }
            else {
                openid = qs.parse(ctx.request.querystring).openid
                if (!openid) {
                    ctx.redirect(`${apiurl}${encodeURI('https://wx.idsbllp.cn/nodejs/questionnaire')}`)
                }
            }
            ctx.cookies.set('openid', openid, {
                httpOnly: false
            })
            await send(ctx, './index.html')
        }
        else {
            await send(ctx, './index.html')
        }
    })
    .get('/verify', async (ctx, next) => {
        let wxurl = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/bindVerify'
        let token = 'gh_68f0a1ffc303'
        let timestamp = '1526375631'
        let string = 'hello'
        let secret = '98f83a510686d27be5da70073b3a6c779c7bfea8'
        let openid
        if (debug.mode) {
            openid = debug.openid
        }
        else {
            openid = ctx.cookies.get('openid')
        }
        let res = await axios.post(wxurl,
            `token=${token}&timestamp=${timestamp}&string=${string}&secret=${secret}&openid=${openid}`
        )
        ctx.body = {
            status: 200,
            data: res.data
        }
    })

    .post('/getTeam', async (ctx, next) => {
        let num = ctx.request.body.num
        let data = await conn.queryAsync(`SELECT type FROM student where stuNum = '${num}'`)
        if (data.length === 0) {
            ctx.body = {
                status: -400,
            }
        }
        else {
            let type = data[0].type === '入党积极分子培训班' ? 2 : 3
            ctx.body = {
                status: 200,
                type,
            }
        }

    })

    .post('/sign', async (ctx, next) => {
        let num = ctx.request.body.num
        let sfz = ctx.request.body.sfz
        let data = await conn.queryAsync(`SELECT * FROM student WHERE lower(stuNum) = lower('${num}') and lower(idNum) = lower('${sfz}')`)
        if (data.length === 0) {
            ctx.body = {
                status: -400
            }
        }
        else {
            let type = data[0].type === '入党积极分子培训班' ? 2 : 3
            ctx.body = {
                status: 200,
                type: type,
            }
        }
        })

    .post('/submit', async (ctx, next) => {
        let {num, flag, comments, advice} = ctx.request.body
        if (flag === 2) {
            let one = JSON.parse(comments.one)
            let two = JSON.parse(comments.two)
            if (one.levelOne && two.levelOne) {
                let data1 = await conn.queryAsync(`SELECT * FROM classcomment WHERE stuNum = '${num}' AND classId = 1`)
                if (!data1[0]) {
                    await conn.queryAsync(`INSERT INTO classcomment values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [null, num, 1, one.levelOne, one.levelTwo, one.levelThree, one.levelFour, one.levelFive, one.levelSix, one.suggestion])
                }
                let data2 = await conn.queryAsync(`SELECT * FROM classcomment WHERE stuNum = '${num}' AND classId = 2`)
                if (!data2[0]) {
                    await conn.queryAsync(`INSERT INTO classcomment values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [null, num, 2, two.levelOne, two.levelTwo, two.levelThree, two.levelFour, two.levelFive, two.levelSix, two.suggestion])
                }
                await conn.queryAsync(`UPDATE student SET advice = '${advice}' WHERE stuNum = '${num}'`)
            }
        }
        else {
            let three = JSON.parse(comments.three)
            let four = JSON.parse(comments.four)
            let five = JSON.parse(comments.five)
            if (three.levelOne && four.levelOne && five.levelOne) {
                let data3 = await conn.queryAsync(`SELECT * FROM classcomment WHERE lower(stuNum) = lower('${num}') AND classId = 3`)
                if (!data3[0]) {
                    await conn.queryAsync(`INSERT INTO classcomment values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [null, num, 3, three.levelOne, three.levelTwo, three.levelThree, three.levelFour, three.levelFive, three.levelSix, three.suggestion])
                }
                let data4 = await conn.queryAsync(`SELECT * FROM classcomment WHERE lower(stuNum) = lower('${num}') AND classId = 4`)
                if (!data4[0]) {
                    await conn.queryAsync(`INSERT INTO classcomment values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [null, num, 4, four.levelOne, four.levelTwo, four.levelThree, four.levelFour, four.levelFive, four.levelSix, four.suggestion])
                }
                let data5 = await conn.queryAsync(`SELECT * FROM classcomment WHERE lower(stuNum) = lower('${num}') AND classId = 5`)
                if (!data5[0]) {
                    await conn.queryAsync(`INSERT INTO classcomment values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [null, num, 5, five.levelOne, five.levelTwo, five.levelThree, five.levelFour, five.levelFive, five.levelSix, five.suggestion])
                }
                await conn.queryAsync(`UPDATE student SET advice = '${advice}' WHERE stuNum = '${num}'`)
            }
        }
        ctx.body = {
            status: 200
        }
    })

    .post('/hasSubmit', async (ctx, next) => {
        let num = ctx.request.body.num
        let data = await conn.queryAsync(`SELECT * FROM classcomment WHERE lower(stuNum) = lower('${num}')`)
        if (data.length > 0) {
            ctx.body = {
                status: 200,
                message: '已经提交过了'
            }
        }
        else {
            ctx.body = {
                status: -400,
                message: '还没提交过'
            }
        }
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8081)
