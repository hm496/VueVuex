<template>
  <div>
    <div :class="sss.header" class="verticalAlign">
      <div class="inline-block verticalAlignMiddle">
        <iSelect :class="sss.dropSelect" v-model="dropQuery.key" placeholder="选择条件">
          <iOption v-for="item in dropList" :value="item.value" :key="item.value">{{ item.label }}</iOption>
        </iSelect>
        <iInput v-model="dropQuery.value" placeholder="请输入查询信息..." style="width: 140px"></iInput>
        <iButton>查询</iButton>
      </div>
      <div class="heightFull floatRight fontSize12 verticalAlign">
        <iButton class="verticalAlignMiddle fontSize12">
          <i class="fa fa-pencil-square-o fontSize14" aria-hidden="true"></i>
          添加
        </iButton>
        <iButton class="verticalAlignMiddle fontSize12">
          <iIcon type="edit" class="fontSize14"></iIcon>
          修改
        </iButton>
        <iButton class="verticalAlignMiddle fontSize12">
          <i class="fa fa-trash fontSize16" aria-hidden="true"></i>
          删除
        </iButton>
      </div>
    </div>
    <div>
      <iTable :height="tabelHeight" highlight-row :columns="colSetting" :data="tableData"></iTable>
    </div>
    <div :class="sss.footer">3</div>
  </div>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    components: {},
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
  .root {
    padding: 0 10px;
  }

  .dropSelect {
    width: 100px;
  }

  .header {
    height: 60px;
    line-height: 60px;
  }

  .body {

  }

  .footer {
    height: 80px;
  }
</style>