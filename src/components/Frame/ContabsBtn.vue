<template>
  <router-link :exact="exact" tag="li" :to="to" :active-class="sss.router_active" class="inline-block"
    :class="sss.li">
    <a :class="{[sss.a]:true,[sss.closeable]:closable}">
      <slot></slot>
      <i v-if="closable" class="icon wb-close-mini" :class="sss.i"></i>
    </a>
  </router-link>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: {
      to: {
        type: String,
      },
      closable: {
        type: Boolean,
        default: false,
      },
      exact: {
        type: Boolean,
        default: true,
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

<style lang="scss" module="sss">
  .li {
    height: 40px;
    text-align: center;
    line-height: 40px;
    width: 105px;
    color: #76838f;
  }

  .a {
    padding-left: 12px;
    padding-right: 13px;
    display: inline-block;
    height: 100%;
    width: 100%;
    font-size: 14px;
    color: #76838f;
    position: relative;
  }

  .a:hover, .a:active {
    color: #76838f;
  }

  .i {
    height: 14px;
    line-height: 14px;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  .i:hover {
    background-color: red;
    color: #fff;
    border-radius: 50%;
  }

  .router_active {
    border-right: 1px solid rgb(228, 234, 236);
    border-left: 1px solid rgb(228, 234, 236);
    background-color: rgb(241, 244, 245);
  }

  .closeable {
    padding-right: 28px;
  }
</style>