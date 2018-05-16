<template lang="html">
    <div class="container">
        <h1>你的小帮手没有绑定学号</h1>
        <input class='xuehao' type="text" name="" value="" placeholder="学号" v-model='num'>
        <input class='sfz' type="text" name="" value="" placeholder="身份证后六位" v-model='sfz'>
        <button type="button" name="button" @click='sign'>登陆</button>
    </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            num: '',
            sfz: '',
        }
    },

    methods: {
        sign() {
            if (this.num !== '' && this.sfz !== '') {
                axios.post('./sign', {
                    num: this.num,
                    sfz: this.sfz,
                }).then(res => {
                    if (res.data.status === 200) {
                        sessionStorage.setItem('num', this.num)
                        sessionStorage.setItem('flag', res.data.type)
                        sessionStorage.setItem('yjs', true)
                        axios.post('./hasSubmit', {
                            num: this.num
                        }).then(res => {
                            if (res.data.status === 200) {
                                this.$router.push('/finish')
                            }
                            else {
                                this.$router.push({path: '/'})
                            }
                        })


                    }
                    else {
                        MessageBox.alert('提示', '密码错误或你不能投问卷');
                    }
                })
            }
        }
    },




}
</script>

<style lang="stylus" scoped>
    .container
        padding 4vh 4vw
        h1
            text-align center
            font-size 8vw
        input
            border 1px solid #aaa
            outline none
            font-size 12vw
            text-align center
        .xuehao
            width 100%
            height 20vw
            margin-bottom 2vh
        .sfz
            width 100%
            height 20vw

    button
        outline none
        background #2672FF
        color #fff
        border-radius 4vw
        margin-top 6vh
        width 100%
        height 20vw
        font-size 10vw


</style>
