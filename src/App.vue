<template>
  <div :class="$style.app_root">
    <!--<p>-->
    <!--<router-link to="/home">Go to home</router-link>-->
    <!--<router-link to="/detail">Go to detail</router-link>-->
    <!--<router-link to="/user/123">Go to user</router-link>-->
    <!--<router-link to="/user/456">Go to user</router-link>-->
    <!--</p>-->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <Loading :isLoading="isLoading"></Loading>
  </div>
</template>

<script>
  import Store from 'store/Store.js';
  import Loading from './views/Loading.vue';
  import Emitter from "./utils/EventEmitter";

  export default {
    components: {
      Loading
    },
    name: '',
    componentName: '',
    props: {},
    data: function () {
      return {
        showLoading: false,
      }
    },
    created() {
      Emitter.on("httpErr", (err) => {
        if (err.response && err.response.status === 500) {
          this.$Message.error('服务器发生错误,请检查网络!');
        }
      });
    },
    methods: {},
    computed: {
      isLoading() {
        return Store.state.isLoading
      }
    },
    watch: {
      isLoading: function () {
        if (this.isLoading === false) {
          setTimeout(() => {
            //清除Loading界面DOM
            this.showLoading = false;
          }, 1000);
        } else {
          this.showLoading = true;
        }
      }
    },
  };
</script>

<style lang="scss" module>
  .app_root {
    height: 100%;
    overflow: auto;
  }
</style>