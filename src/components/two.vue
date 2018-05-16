<template lang="html">
    <div class="">
        <div class="container">
            <div class="title">
                授课内容：党的组织、纪律和作风
            </div>
            <div class="descript" >
                课程质量评价
            </div>
            <div class="first">
                <p>授课态度（讲述认真，教态端庄，举止得体，授课设计精心，富于启发性）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-one='1' @click='clickStarOne' :style="{background: 1 <= levelOne ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-one='2' @click='clickStarOne' :style="{background: 2 <= levelOne ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-one='3' @click='clickStarOne' :style="{background: 3 <= levelOne ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-one='4' @click='clickStarOne' :style="{background: 4 <= levelOne ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="first">
                <p>理论观点（观点正确、条理分明、要点突出、逻辑性强，夯实理论基础，学有所获）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-two='1' @click='clickStarTwo' :style="{background: 1 <= levelTwo ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-two='2' @click='clickStarTwo' :style="{background: 2 <= levelTwo ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-two='3' @click='clickStarTwo' :style="{background: 3 <= levelTwo ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-two='4' @click='clickStarTwo' :style="{background: 4 <= levelTwo ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="first">
                <p>联系实际（理论联系实际、能结合最新形势与要求、针对性强）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-three='1' @click='clickStarThree' :style="{background: 1 <= levelThree ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-three='2' @click='clickStarThree' :style="{background: 2 <= levelThree ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-three='3' @click='clickStarThree' :style="{background: 3 <= levelThree ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-three='4' @click='clickStarThree' :style="{background: 4 <= levelThree ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="first">
                <p>语言表达（语言生动、表达流畅，对授课内容熟悉）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-four='1' @click='clickStarFour' :style="{background: 1 <= levelFour ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-four='2' @click='clickStarFour' :style="{background: 2 <= levelFour ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-four='3' @click='clickStarFour' :style="{background: 3 <= levelFour ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-four='4' @click='clickStarFour' :style="{background: 4 <= levelFour ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="first">
                <p>方法艺术（教学方法灵活，注重教学方法创新，有较强的课堂组织能力）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-five='1' @click='clickStarFive' :style="{background: 1 <= levelFive ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-five='2' @click='clickStarFive' :style="{background: 2 <= levelFive ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-five='3' @click='clickStarFive' :style="{background: 3 <= levelFive ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-five='4' @click='clickStarFive' :style="{background: 4 <= levelFive ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="first">
                <p>课件制作（课件制作精美，紧扣主题，图文并茂，生动形象）</p>
                <p class='tips'>从左到右依次代表（差、一般、较好、好）</p>
                <div class="stars">
                    <div class="star star1" data-level-six='1' @click='clickStarSix' :style="{background: 1 <= levelSix ? lightStar : greyStar}">

                    </div>
                    <div class="star star2" data-level-six='2' @click='clickStarSix' :style="{background: 2 <= levelSix ? lightStar : greyStar}">

                    </div>
                    <div class="star star3" data-level-six='3' @click='clickStarSix' :style="{background: 3 <= levelSix ? lightStar : greyStar}">

                    </div>
                    <div class="star star4" data-level-six='4' @click='clickStarSix' :style="{background: 4 <= levelSix ? lightStar : greyStar}">

                    </div>
                </div>
            </div>
            <div class="advice">
                <p>意见建议（选填）</p>
                <input type="text" name="" value="" class='input' v-model='suggestion'>
            </div>
            <mt-button type="primary" class='button' @click='submit'>下一页</mt-button>

        </div>
        <footer>
            <mt-progress :value="100" :bar-height="10">

            </mt-progress>
        </footer>
    </div>

</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
    data: function() {
        return {
            greyStar: '#cdd4db',
            lightStar: '#ffbe3a',
            levelOne: 0,
            levelTwo: 0,
            levelThree: 0,
            levelFour: 0,
            levelFive: 0,
            levelSix: 0,
            suggestion: ''
        }
    },
    methods: {
        submit() {
            if (this.levelOne === 0 || this.levelTwo === 0 || this.levelThree === 0  || this.levelFour === 0 || this.levelFive === 0  || this.levelSix === 0   ) {
                MessageBox.alert('提示', '请为所有选项打分');
            }
            else {
                let data = {
                    levelOne: this.levelOne,
                    levelTwo: this.levelTwo,
                    levelThree: this.levelThree,
                    levelFour: this.levelFour,
                    levelFive: this.levelFive,
                    levelSix: this.levelSix,
                    suggestion: this.suggestion,
                }
                sessionStorage.setItem('two', JSON.stringify(data))
                this.$router.push({path: '/finish'})
            }
        },

        clickStarOne(e) {
            let level = e.target.dataset['levelOne']
            console.log(level);
            this.levelOne = level
        },

        clickStarTwo(e) {
            let level = e.target.dataset['levelTwo']
            this.levelTwo = level
        },

        clickStarThree(e) {
            let level = e.target.dataset['levelThree']
            this.levelThree = level
        },

        clickStarFour(e) {
            let level = e.target.dataset['levelFour']
            this.levelFour = level
        },

        clickStarFive(e) {
            let level = e.target.dataset['levelFive']
            this.levelFive = level
        },

        clickStarSix(e) {
            let level = e.target.dataset['levelSix']
            this.levelSix = level
        },
    }
}
</script>

<style lang="stylus">

    .container
        padding 4vh 4vw
        font-size 4.5vw
        background #f6f6f6
        .title
            font-size 5vw
            margin-bottom 8vh
        .descript
            font-size 6vw
            margin-bottom 3vh
            &::after
                content "*"
                color red
        .first
            margin-bottom 2vh
            &:last-child
                margin-bottom 6vh
            p
                margin 20px 0
                font-size 4vw
            .tips
                color #AAAAAA
                font-size .6em
            .stars
                height 12vh
                background #fff
                padding 12px 3vw
                display flex
                justify-content space-around
                align-items center
                .star
                    width 7vh
                    height 7vh
                    background #c1cbd5
                    transition all .3s
                    clip-path polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)
                    -webkit-clip-path polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)

    .input
        width 100%
        height 10vh
        padding 25px 5vw
        font-size 8vw
        margin-bottom 12vh
        border none
        outline none
        &:focus
            border 1px solid #419bf7

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
        border-top 1px solid #D8D8D8
        display flex
        justify-content center
        align-items center
        div
            width 100%

</style>
