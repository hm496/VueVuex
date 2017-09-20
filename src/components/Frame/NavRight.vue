<template>
  <div :class="$style.container">
    <div>
      <ul class="navbar-toolbar ulclear clearfix">
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
    </div>
  </div>
</template>

<script>
  import NavBtn from './NavBtn.vue';

  export default {
    name: '',
    componentName: '',
    components: {
      NavBtn
    },
    props: {},
    data: function() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  .btn_wrapper {
    width: calc(100% - 50px);
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