<template>
  <div>
    <!--<p>-->
    <!--<router-link to="/home">Go to home</router-link>-->
    <!--<router-link to="/detail">Go to detail</router-link>-->
    <!--<router-link to="/user/123">Go to user</router-link>-->
    <!--<router-link to="/user/456">Go to user</router-link>-->
    <!--</p>-->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view v-if="loaded"></router-view>
    <h2 v-else>loading等待页面</h2>
  </div>
</template>

<script>
  import Store from 'store/Store.js';

  export default {
    name: '',
    componentName: '',
    props: {},
    data: function() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {
      loaded() {
        return Store.state.loaded
      }
    },
    watch: {},
  };
</script>

<style lang="scss" module>
</style>