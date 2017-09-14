<template>
  <div>
    <div :class="$style.navbar">
      <Navbar></Navbar>
    </div>
    <div :class="$style.menubar">
      <Menubar></Menubar>
    </div>
    <div :class="$style.contabs">
      <Contabs></Contabs>
    </div>
    <div :class="$style.container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue';
  import Menubar from './Menubar.vue';
  import Contabs from './Contabs.vue';

  export default {
    name: 'Frame',
    componentName: 'Frame',
    components: {
      Navbar,
      Menubar,
      Contabs
    },
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
  .navbar {
    height: 60px;
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
    margin-left: 220px;
    margin-top: 40px;
    height: calc(100% - 100px);
  }
</style>