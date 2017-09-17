<template>
  <div :class="$style.container">
    <div>
      <ul class="navbar-toolbar ulclear">
        <li class="floatLeft">
          <a href="javascript:;">
            <i class="icon hamburger hamburger-arrow-left">
              <span :class="$style.hamburger_bar"></span>
            </i>
          </a>
        </li>
        <li class="floatLeft">

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  .container {
    margin-left: 220px;
    padding-right: 12px;
  }

  .hamburger, .hamburger_bar {
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 4px 0;
  }

  .hamburger::after {

  }

  .hamburger::before {

  }
</style>