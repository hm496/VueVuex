<template>
  <div>
    <!--<p>-->
    <!--<router-link to="/home">Go to home</router-link>-->
    <!--<router-link to="/detail">Go to detail</router-link>-->
    <!--<router-link to="/user/123">Go to user</router-link>-->
    <!--<router-link to="/user/456">Go to user</router-link>-->
    <!--</p>-->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    name: '',
    componentName: '',
    props: {},
    data: function () {
      return {}
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
</style>