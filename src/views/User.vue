<template>
  <div>这里是User{{ $route.params.id }}</div>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: {},
    data: function () {
      return {}
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>
<style lang="scss" module>

</style>