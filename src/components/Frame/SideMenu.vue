<template>
  <div :class="$style.menuroot">
    <div v-if="this.menuType === 1">
      <MenuList :listArr="listArr[0]"></MenuList>
      <!--设备,摄像头,人员库,分类库-->
    </div>

    <div v-if="this.menuType === 2">
      <MenuList :listArr="listArr[1]"></MenuList>
      <!--识别成功,未识别成功-->
    </div>

    <div v-if="this.menuType === 3">
      <MenuList :listArr="listArr[2]"></MenuList>
      <!--用户管理,日志信息,账户信息-->
    </div>
  </div>
</template>

<script>
  import MenuList from "./MenuList.vue";

  export default {
    name: '',
    componentName: '',
    components: {
      MenuList
    },
    props: {},
    data: function () {
      return {
        lastMenuType: 1,
        listArr: [
          [{
            title: "资源管理",
            prefix: "/source",
            arr: [
              {
                name: "device",
                icon: "fa-laptop",
                text: "分析设备",
                to: "/source/device"
              },
              {
                name: "camera",
                icon: "fa-video-camera",
                text: "采集设备",
                to: "/source/camera"
              },
              {
                name: "personlib",
                icon: "fa-users",
                text: "人员库",
                to: "/source/personlib"
              },
              {
                name: "classlib",
                icon: "fa-tachometer",
                text: "分类库",
                to: "/source/classlib"
              },
            ]
          }],
          [{
            title: "识别结果",
            prefix: "/identity",
            arr: [
              {
                name: "identitysuc",
                icon: "fa-thumbs-up",
                text: "识别成功",
                to: "/identity/identitysuc"
              },
              {
                name: "identityfail",
                icon: "fa-thumbs-down",
                text: "未识别成功",
                to: "/identity/identityfail"
              }
            ]
          }],
          [{
            title: "系统信息",
            prefix: "/system",
            arr: [
              {
                name: "usermanage",
                icon: "fa-street-view",
                text: "用户管理",
                to: "/system/usermanage"
              },
              {
                name: "dailyinfo",
                icon: "fa-file-text-o",
                text: "日志信息",
                to: "/system/dailyinfo"
              }
            ]
          },
            {
              title: "我的账户",
              prefix: "/system",
              arr: [
                {
                  name: "accountinfo",
                  icon: "fa-key",
                  text: "账户信息",
                  to: "/system/accountinfo"
                }
              ]
            }],
        ]
      }
    },
    created: function () {
    },
    methods: {},
    computed: {
      menuType: function () {
        if (this.$route.fullPath.indexOf('source') > -1) {
          this.lastMenuType = 1;
          return 1;
        }
        if (this.$route.fullPath.indexOf('identity') > -1) {
          this.lastMenuType = 2;
          return 2;
        }
        if (this.$route.fullPath.indexOf('system') > -1) {
          this.lastMenuType = 3;
          return 3;
        }
        return this.lastMenuType;
      }
    },
    watch: {},
  };
</script>

<style lang="scss" module>
  .menuroot {
    height: 100%;
    background-color: #263238;
  }
</style>