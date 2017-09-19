<template>
  <router-link :to="to" exact :active-class="$style.btn_a_active" :class="$style.btn_a">
    <i :class="fontClass"></i>
    <span><slot></slot></span>
  </router-link>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: {
      to: {
        type: String,
        default: ""
      },
      fontClass: {
        type: String,
        default: ""
      }
    },
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
  .btn_a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    box-sizing: border-box;
    padding: 19px 16px;
    height: 60px;
    /*width: 95px;*/
    font-size: 14px;
    line-height: 22px;
    font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    transition: all 0.25s;
  }

  .btn_a:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  .btn_a_active {
    background-color: rgba(0, 0, 0, .1);
  }

</style>