<template>
  <div :class="$style.navroot">
    <NavLeft></NavLeft>
    <NavRight></NavRight>
  </div>
</template>

<script>
  import NavLeft from './NavLeft.vue';
  import NavRight from './NavRight.vue';

  export default {
    name: '',
    componentName: '',
    components: {
      NavLeft,
      NavRight,
    },
    props: {},
    data: function() {
      return {}
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  .navroot {
    height: 100%;
    width: 100%;
    background-color: #4e97d9;
  }
</style>