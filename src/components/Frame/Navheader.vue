<template>
  <div :class="$style.navbar_header">
    <div
      :class="$style.navbar_brand"
      class="clearfix site-gridmenu-toggle" data-toggle="gridmenu">
      <img :class="$style.navbar_brand_logo"
           src="~assets/img/logo-white.svg"
           title="user">
      <!--<img :class="$style.navbar_brand_logo" src="~assets/img/logo-white-min.svg"-->
      <!--title="user">-->
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
    created() {
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  .navbar_header {
    width: 220px;
    float: left;
  }

  .navbar_brand {
    box-sizing: border-box;
    height: 60px;
    padding: 19px 20px;
    float: left;
    line-height: 22px;
    cursor: pointer;
  }

  .navbar_brand_logo {
    margin-top: -5px;
    height: 32px;
  }

</style>