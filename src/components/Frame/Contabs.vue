<template>
  <div :class="sss.contabsroot">
    <ul class="heightFull nowrap" :class="sss.ftsize0">
      <ContabsBtn to="/home">首页</ContabsBtn>
      <ContabsBtn to="/source/device" closable>分析设备</ContabsBtn>
      <ContabsBtn to="/system/usermanage" closable>用户管理</ContabsBtn>
    </ul>
  </div>
</template>

<script>
  import ContabsBtn from "./ContabsBtn.vue";

  export default {
    name: '',
    componentName: '',
    components: {
      ContabsBtn
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

<style lang="scss" module="sss">
  .contabsroot {
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e4eaec;
  }

  .ftsize0 {
    font-size: 0;
  }

</style>