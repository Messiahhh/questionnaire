<template lang="html">
    <div class="">
        <header>
            分党校授课教师课堂教学情况摸底调查问卷
        </header>
        <div class="main">
            <div class="first-p">
                感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧！
            </div>
            <div class="second-p">
                <p>亲爱的学员：</p>
                <p class='p2'>非常感谢参与本次调查。</p>
                <p class='p3'>调查结果仅用于促进党校教学质量的提升，所以您的回答非常重要。本次问卷采用匿名形式，不会对你产生任何影响。希望您真实地填写各项内容，谢谢合作！</p>
                <p>中共重庆邮电大学委员会党校</p>
                <p>2018年5月</p>
            </div>
            <mt-button type="primary" class='button' @click='submit'>下一页</mt-button>
        </div>
        <footer>
            <mt-progress :value="0" :bar-height="10">

            </mt-progress>
        </footer>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function () {
        return {

        }
    },
    methods: {
        submit() {
            let flag = sessionStorage.getItem('flag')
            if (parseInt(flag) === 2) {
                this.$router.push({path: '/one'})
            }
            else {
                this.$router.push({path: '/three'})
            }
        }
    },

}
</script>

<style lang="stylus">
    header
        height 22vh
        padding 6vh 4vh 3vh
        background #2672FF
        font-size 8vw
        color #fff
        &::before
            content ''
            position absolute
            width 40px
            height 40px
            left 10px
            top 10px
            background url('../assets/danghui.jpg') no-repeat
            background-size cover
    .main
        padding 4vh 3vh 2vh
        .first-p
            color rgb(102, 102, 102)
            font-size 5vw
            margin-bottom 5vh
        .second-p
            margin-bottom 8vh
        .second-p p
            line-height 1.6em
            margin 0
            font-size 4vw
            color rgb(102, 102, 102)
            font-weight 400
            &:nth-child(2)
            &:nth-child(3)
                text-indent 2em
            &:nth-child(4)
            &:nth-child(5)
                text-align right
        .button
            width 100%
            height 10vh
            font-size 7vw
            background #2672FF
            border-radius 4vw
    footer
        padding 10px 6vw
        height 6vh
        background #fff
        border 1px solid #D8D8D8
        display flex
        justify-content center
        align-items center
        div
            width 100%
</style>
