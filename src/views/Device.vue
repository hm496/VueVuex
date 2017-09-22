<template>
  <div :class="sss.root">
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
  //  import table
  import Store from 'store/Store.js';
  //Table 表格
  import iTable from 'iviewSrc/table';
  import iModal from 'iviewSrc/modal';
  //Dropdown 下拉菜单
  import iDropdown from 'iviewSrc/dropdown';
  //Button 按钮
  import iButton from 'iviewSrc/button';
  //Icon 图标
  import iIcon from 'iviewSrc/icon';
  //Select 选择器
  import {
    Select as iSelect,
    Option as iOption,
    OptionGroup as iOptionGroup,
  } from 'iviewSrc/select';
  //Input 输入框
  import iInput from 'iviewSrc/input';

  const iButtonGroup = iButton.Group;
  const iDropdownItem = iDropdown.Item;
  const iDropdownMenu = iDropdown.Menu;

  export default {
    name: '',
    componentName: '',
    props: {},
    components: {
      iInput,
      iSelect,
      iOption,
      iOptionGroup,
      iTable,
      iModal,
      iDropdown,
      iButton,
      iIcon,
      iDropdownMenu,
      iDropdownItem,
    },
    data: function () {
      return {
        dropList: [
          {
            label: "姓名",
            value: "name",
          },
          {
            label: "电话",
            value: "phone",
          },
          {
            label: "部门",
            value: "dept",
          },
        ],
        dropQuery: {
          key: "",
          value: "",
        },
        colSetting: [
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
        tableData: [
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
    mounted: function () {

    },
    methods: {
      dropSelect(value) {
        console.log(value);
      }
    },
    computed: {
      tabelHeight: function () {
        return Store.state.frameConHeight - 200;
      }
    },
    watch: {},
  };
</script>
<style scoped>
  .aaaaa .ivu-table td {
    background-color: red;
  }
</style>

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