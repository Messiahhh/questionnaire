<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
console.log(axios);
export default {
    name: 'app',
    data () {
        return {
            value: '123'
        }
    },
}
</script>

<style lang="stylus">
body
    margin 0
*,
*::before,
*::after
    box-sizing border-box
</style>
