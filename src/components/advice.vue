<template lang="html">
    <div class="container">
        <h2>对分党校教学及组织管理的意见建议（选填）:</h2>
        <textarea name="name" rows="8" cols="80" v-model='comment'></textarea>
        <mt-button type="primary" class='button' @click='submit' >下一页</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment: ''
        }
    },
    methods: {
        submit() {
            sessionStorage.setItem('advice', this.comment)
            this.$router.push({path: '/finish'})
        }
    }
}
</script>

<style lang="stylus" scoped>
    body
        background #f6f6f6
    .container
        padding 0px 20px
        h2
            margin-top 3vh
        textarea
            width 100%
            font-size 10vw
            outline none
            resize none
        .button
            width 100%
            height 10vh
            font-size 7vw
            background #2672FF
            border-radius 4vw
            margin-top 4vh
</style>
