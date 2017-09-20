<template>
  <div :class="$style.root">
    <a :class="[$style.icon_a,icon]" class="icon" href="javascript:;" role="button">
      <span :class="$style.sr_only" v-if="showtip"><slot></slot><em :class="$style.arrow"></em></span>
    </a>
    <!--<div class="tooltip fade bottom in" role="tooltip" id="tooltip468052" style="top: 59.6px; left: 1218.2px; display: block;"><div class="tooltip-arrow" style="left: 50%;"></div><div class="tooltip-inner">设置主题与布局等</div></div>-->
  </div>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: ["showtip", "icon"],
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
  .root {
    display: inline-block;
    vertical-align: top;
  }

  .icon_a {
    position: relative;
    display: inline-block;
    padding: 19px 15px;
    line-height: 22px;
    color: #fff;
    width: 44px;
    height: 60px;
    box-sizing: border-box;
    font-size: 14px;
    text-decoration: none;
  }

  .icon_a:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, .1);
  }

  .icon_a:hover > .sr_only {
    display: block;
  }

  .sr_only {
    line-height: normal;
    font-size: 12px;
    display: block;
    position: absolute;
    bottom: -40px;
    padding: 8px 12px;
    white-space: nowrap;
    border-radius: 4px;
    background-color: #484848;
    left: 22px;
    transform: translateX(-50%);
    display: none;
  }

  .arrow {
    position: absolute;
    border: 5px solid transparent;
    border-bottom: 5px solid #484848;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

</style>