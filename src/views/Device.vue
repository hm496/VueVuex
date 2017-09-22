<template>
  <div>
    <div>1</div>
    <div>
      <iTable :height="tabelHeight" highlight-row :columns="columns3" :data="data1"></iTable>
    </div>
    <div>3</div>

    <!--<iModal-->
    <!--v-model=""-->
    <!--title="普通的Modal对话框标题">-->
    <!--<p>对话框内容</p>-->
    <!--<p>对话框内容</p>-->
    <!--<p>对话框内容</p>-->
    <!--</iModal>-->
  </div>
</template>

<script>
  import Store from 'store/Store.js';
  //Table 表格
  import iTable from 'iviewSrc/table';
  import iModal from 'iviewSrc/modal';

  export default {
    name: '',
    componentName: '',
    props: {},
    components: {
      iTable,
      iModal,
    },
    data: function () {
      return {
        columns3: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    created() {
    },
    methods: {},
    computed: {
      tabelHeight: function () {
        return Store.state.frameConHeight - 200;
      }
    },
    watch: {},
  };
</script>

<style lang="scss" module="sss">

</style>