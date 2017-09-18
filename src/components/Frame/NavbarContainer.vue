<template>
  <div :class="$style.container">
    <div>
      <ul class="navbar-toolbar ulclear">
        <li class="floatLeft">
          <a :class="[$style.hamburger_a,$style.hamburger_hover]" href="javascript:;">
            <i :class="$style.hamburger"
               class="icon hamburger hamburger-arrow-left">
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
  import NavBtn from './NavBtn.vue';

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
  .container {
    margin-left: 220px;
    padding-right: 12px;
  }

  .hamburger_bar {
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 4px 0;
    border-radius: 4px;
  }

  .hamburger {
    font-size: 20px;
    margin-top: 4px;
    display: inline-block;
    transform: rotate(180deg);
  }

  .hamburger::after, .hamburger::before {
    content: " ";
    display: block;
    width: 12px;
    height: 2px;
    margin: 0;
    background: #fff;
    border-radius: 1px;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out, -o-transform .2s ease-in-out;
  }

  .hamburger::after {
    transform: translate3d(.45em, -.1em, 0) rotate(-45deg);
  }

  .hamburger::before {
    transform: translate3d(.45em, .1em, 0) rotate(45deg);
  }

  .hamburger_a {
    display: block;
    padding: 19px 15px;
    height: 60px;
    box-sizing: border-box;
  }

  .hamburger_hover:hover {
    background-color: rgba(0, 0, 0, .1);
  }
</style>