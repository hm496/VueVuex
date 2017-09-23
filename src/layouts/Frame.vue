<template>
  <div :class="$style.frame_root">
    <div :class="$style.navbar">
      <Navbar></Navbar>
    </div>
    <div :class="$style.menubar">
      <SideMenu></SideMenu>
    </div>
    <div :class="$style.contabs">
      <Contabs></Contabs>
    </div>
    <div :class="$style.container" ref="container">
      <iSpin size="large" fix v-if="!delay"></iSpin>
      <div :class="$style.containerdiv">
        <router-view v-if="delay"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  //Spin 加载中
  import iSpin from 'iviewSrc/spin';
  import Navbar from '../components/Frame/Navbar.vue';
  import SideMenu from '../components/Frame/SideMenu.vue';
  import Contabs from '../components/Frame/Contabs.vue';
  import Store from 'store/Store.js';
  import { types as RootTypes } from '../store/rootVuex.js';


  //计算frameConClientHeight
  function getConHeight(ele, padTop, padBottom) {
    return ele.clientHeight - parseInt(padTop) - parseInt(padBottom);
  }

  export default {
    name: 'Frame',
    componentName: 'Frame',
    components: {
      Navbar,
      SideMenu,
      Contabs,
      iSpin,
    },
    props: {},
    data: function () {
      return {
        delay: false,
      }
    },
    mounted() {
      setTimeout(() => {
        this.resizeEvent();
        setTimeout(() => {
          this.delay = true;
        }, 200);
      }, 1000);
      window.addEventListener("resize", this.resizeEvent);
    },
    methods: {
      resizeEvent: function () {
        let conHeight = getConHeight(this.$refs.container, this.$style.padTop, this.$style.padBottom);
        if (conHeight === conHeight) {
          if (Store.state.frameConHeight !== conHeight) {
            Store.commit(RootTypes.SET_CON_HEIGHT, conHeight);
          }
        }
      }
    },
    computed: {},
    watch: {},
    beforeDestroy: function () {
      window.removeEventListener("resize", this.resizeEvent);
    }
  };
</script>

<style lang="scss" module>
  $padLeft: 7px;
  $padRight: 7px;
  $padTop: 7px;
  $padBottom: 7px;

  :export {
    padLeft: $padLeft;
    padRight: $padRight;
    padTop: $padTop;
    padBottom: $padBottom;
  }

  .frame_root {
    height: 100%;
    overflow: hidden;
  }

  .navbar {
    position: relative;
    z-index: 1;
    height: 60px;
    /*overflow: hidden;*/
  }

  .menubar {
    position: fixed;
    top: 60px;
    left: 0;
    width: 220px;
    height: calc(100% - 60px);
  }

  .contabs {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    height: 40px;
    margin-left: 220px;
  }

  .container {
    position: relative;
    padding-right: $padRight;
    padding-left: $padLeft;
    padding-top: $padTop;
    padding-bottom: $padBottom;
    background-color: #f1f4f5;
    overflow: auto;
    margin-left: 220px;
    margin-top: 40px;
    height: calc(100% - 100px);
  }

  .containerdiv {
    position: relative;
    min-width: 800px;
    min-height: 100%;
    width: 100%;
    background-color: #fff;
  }
</style>