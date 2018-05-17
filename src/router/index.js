import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import welcome from '../components/welcome'
import one from '../components/one'
import two from '../components/two'
import three from '../components/three'
import four from '../components/four'
import five from '../components/five'
import finish from '../components/finish'
import sign from '../components/sign'
import axios from 'axios'
import qs from 'querystring'
let Router = new VueRouter({
    routes: [
        {
            path: '/',
            component: welcome,
        },
        {
            path: '/one',
            component: one,
        },
        {
            path: '/two',
            component: two,
        },
        {
            path: '/three',
            component: three,
        },
        {
            path: '/four',
            component: four,
        },
        {
            path: '/five',
            component: five,
        },
        {
            path: '/finish',
            component: finish,
        },
        {
            path: '/sign',
            component: sign,
        }
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
//
Router.beforeEach((to, from, next) => {
    if (to.path !== '/sign') {
        let yjs = sessionStorage.getItem('yjs')
        if (yjs) {
            next()
        }
        else {
            axios.get('./verify').then((res) => {
                // 如果有学号，则跳转到业务页面
                // 因为学生有两种，可以加storage，跳转的时候根据标识来看去哪个
                let data = res.data.data
                let hasCode = data.info
                if (hasCode) {
                    let num = data.stuId
                    axios.post('./hasSubmit', {
                        num
                    }).then(res => {
                        if (res.data.status === 200) {
                            sessionStorage.setItem('yjs', true)
                            next('/finish')
                        }
                        else {
                            axios.post('./getTeam', {
                                num
                            }).then(data => {
                                if (data.data.status === -400) {
                                    next('/sign')
                                }
                                else {

                                    if (data.data.type === 2) {
                                        sessionStorage.setItem('flag', 2)
                                    }
                                    else {
                                        sessionStorage.setItem('flag', 3)
                                    }
                                    sessionStorage.setItem('num', num)
                                    next()

                                }
                            })
                        }
                    })
                }
                // 没绑定学号的，比如研究生
                else {
                    next('/sign')
                }
            })
        }
    }
    else {
        next()
    }

})

export default Router
