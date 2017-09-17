<template>
  <div :class="$style.navroot">
    <Navheader></Navheader>
    <NavbarContainer></NavbarContainer>
  </div>
</template>

<script>
  import Navheader from './Navheader.vue';
  import NavbarContainer from './NavbarContainer.vue';

  export default {
    name: '',
    componentName: '',
    components: {
      Navheader,
      NavbarContainer,
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