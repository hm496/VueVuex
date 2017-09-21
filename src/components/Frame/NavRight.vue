<template>
  <div :class="$style.container">
    <div>
      <ul class="ulclear clearfix floatLeft" :class="$style.navbar_toolbar">
        <li class="floatLeft">
          <a :class="[$style.hamburger_a,$style.hamburger_hover]" href="javascript:;">
            <i :class="$style.hamburger_i"
               class="icon hamburger hamburger-arrow-left">
              <span :class="$style.hamburger_bar1"></span>
              <span :class="$style.hamburger_bar2"></span>
              <span :class="$style.hamburger_bar3"></span>
            </i>
          </a>
        </li>
        <li class="floatLeft" :class="$style.btn_wrapper">
          <ul class="ulclear clearfix overhidden">
            <li class="floatLeft">
              <NavBtn fontClass="wb-library" :exact="false" to="/source">资源管理</NavBtn>
            </li>
            <li class="floatLeft">
              <NavBtn fontClass="wb-order" :exact="false" to="/identity">识别结果</NavBtn>
            </li>
            <li class="floatLeft">
              <NavBtn fontClass="wb-desktop" :exact="false" to="/system">系统管理</NavBtn>
            </li>
          </ul>
        </li>
      </ul>
      
      <ul :class="$style.icon_ul" class="ulclear clearfix floatRight">
        <li class="floatLeft">
          <IconBtn icon="wb-bell" :showtip="true">通知</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn icon="wb-layout" :showtip="true">布局</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn icon="wb-mobile" :showtip="true">手机</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn icon="wb-download" :showtip="true">下载</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn icon="wb-user" :showtip="true">在线咨询</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn icon="wb-expand" :showtip="true">通知</IconBtn>
        </li>
        <li class="floatLeft">
          <IconBtn :icon="`${$style.fa} fa-sign-out`" @click="signout">登出</IconBtn>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import NavBtn from './NavBtn.vue';
  import IconBtn from './IconBtn.vue';
  import Store from "store/Store.js";

  export default {
    name: '',
    componentName: '',
    components: {
      NavBtn,
      IconBtn,
    },
    props: {},
    data: function () {
      return {}
    },
    created() {
    },
    methods: {
      signout: function () {
        Store.dispatch("loginOut");
      }
    },
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  a.fa {
    font: normal normal normal 16px FontAwesome;
    line-height: 22px;
  }

  .icon_ul {
    display: inline-block;
    white-space: nowrap;
  }

  .btn_wrapper {
    width: calc(100% - 50px);
  }

  .navbar_toolbar {
    width: calc(100% - 360px);
  }

  .container {
    margin-left: 220px;
    padding-right: 12px;
  }

  .hamburger_i {
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 2px;
    transform: rotate(180deg);
    position: absolute;
    top: 30px;
    left: 15px;
  }

  .hamburger_a {
    display: block;
    height: 60px;
    width: 50px;
    position: relative;
    transition: all 0.25s;
  }

  .hamburger_hover:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  .hamburger_bar1, .hamburger_bar2, .hamburger_bar3 {
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 0;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out, -o-transform .2s ease-in-out;
  }

  .hamburger_bar1 {
    transform: rotate(-40deg) translateX(8px) translateY(4px);
    top: 6px;
    width: 12px;
  }

  .hamburger_bar3 {
    transform: rotate(40deg) translateX(8px) translateY(-4px);
    top: -6px;
    width: 12px;
  }
</style>