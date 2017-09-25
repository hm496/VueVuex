<template>
  <div :class="$style.usermanage">
    <Searchtop></Searchtop>
    <UserContainer></UserContainer>
    <Userconpage></Userconpage>
  </div>
</template>

<script>
import Searchtop from '../components/UserManage/Searchtop.vue';
import UserContainer from '../components/UserManage/UserContainer.vue';
import Userconpage from '../components/UserManage/Userconpage.vue';
export default {
  name: 'UserManage',
  componentName: 'UserManage',
  components: {
    Searchtop,
    UserContainer,
    Userconpage,
  },
  props: {},
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
.usermanage {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
}
</style>