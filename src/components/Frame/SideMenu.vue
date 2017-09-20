<template>
  <div :class="$style.menuroot">
    <div v-if="this.$route.fullPath.indexOf('source') > -1">
      <MenuList :listArr="listArr[0]"></MenuList>
      <!--设备,摄像头,人员库,分类库-->
    </div>

    <div v-if="this.$route.fullPath.indexOf('identity') > -1">
      <MenuList :listArr="listArr[1]"></MenuList>
      <!--识别成功,未识别成功-->
    </div>

    <div v-if="this.$route.fullPath.indexOf('system') > -1">
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
    data: function() {
      return {
        listArr: [
          [{
            title: "资源管理",
            arr: [
              {
                name: "device",
                icon: "fa-laptop",
                text: "设备",
                to: "/source/device"
              },
              {
                name: "camera",
                icon: "fa-video-camera",
                text: "摄像头",
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
    created: function() {
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" module>
  .menuroot {
    height: 100%;
    background-color: #263238;
  }
</style>