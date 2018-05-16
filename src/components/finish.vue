<template lang="html">
    <div class="">
        您已完成本次问卷，感谢您的帮助与支持
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        let num = sessionStorage.getItem('num')
        let flag = parseInt(sessionStorage.getItem('flag'))
        let type = flag  === 2 ? '入党积极分子培训班' : '发展对象培训班'
        let one, two, three, four, five
        if (flag === 2) {
            one = sessionStorage.getItem('one')
            two = sessionStorage.getItem('two')
            axios.post('/submit', {
                num,
                flag,
                comments: {
                    one,
                    two,
                }
            }).then(res => {
                console.log(res.data.status);
            })

        }
        else {
            three = sessionStorage.getItem('three')
            four = sessionStorage.getItem('four')
            five = sessionStorage.getItem('five')
            axios.post('/submit', {
                num,
                flag,
                comments: {
                    three,
                    four,
                    five,
                }
            }).then(res => {
                console.log(res.data.status);
            })
        }

    }
}
</script>

<style lang="stylus" scoped>
    div
        text-align center
        font-size 5vw
        margin-top 30vh
</style>
