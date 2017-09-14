<template>
  <div class="container-400">
    <div class="container-400-txt">
      <span>由于您长时间没有操作，系统认为您已经离开</span><br>
      <div class="container-400-txt-container-inner">
        <router-link to="/login">重新登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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

<style scoped>
  .container-400 {
    background: url("~assets/img/offline.jpg") no-repeat scroll center 20px;
    margin: auto;
    height: 100%;
    overflow: auto;
    text-align: center;
    font-size: 20px;
    color: #888;
  }

  .container-400-txt {
    margin-top: 329px;
    display: inline-block;
  }

  .container-400-txt-container-inner {
    display: inline-block;
    font-size: 20px;
    color: #aaa;
    margin-top: 30px;
  }

  .container-400-txt-container-inner a {
    cursor: pointer;
    background: #7AB2C7;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    text-decoration: none;
  }

  .container-400-txt-container-inner a:hover {
    background: #69A1B6;
  }
</style>