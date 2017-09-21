<template>
  <div class="heightFull" :class="$style.page_login">
    <div class="heightFull" :class="$style.page_content">
      <div></div>
      <div :class="$style.login_main">
        <div class="verticalAlign" :class="">
          <div class="verticalAlignMiddle">
            <h3 class="hidden-xs" :class="$style.login_h3">登录 Admui</h3>
            <p :class="$style.login_p" class="hidden-xs">Admui 在线演示系统</p>
            <form action="" :class="$style.login_form">

              <!--<div :class="$style.form_group">-->
              <!--<FormInput v-model="login.username"/>-->
              <!--</div>-->
              <!--<div :class="$style.form_group">-->
              <!--<FormInput v-model="login.password"/>-->
              <!--</div>-->
              <!--<div :class="$style.form_group">-->
              <!--<FormInput v-model="login.verifycode"/>-->
              <!--</div>-->
              <div>
                <_Input v-model="login.username">
                  <span slot="prepend">http://</span>
                  <span slot="append">.com</span>
                </_Input>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { qs } from 'utils/tools.js';
  import axiosIns from 'utils/axiosIns.js';
  import Store from 'store/Store.js';
  import FormInput from '../components/Login/FormInput.vue';
  import _Input from '_iview/input';

  export default {
    name: '',
    componentName: '',
    components: {
      FormInput,
      _Input,
    },
    props: {},
    data: function () {
      return {
        a: "",
        verifycode: `logon.do?p=verifycode&${new Date().getTime()}`,
        login: {
          loginOp: 'login',
          crypted: '0',
          username: '',
          password: '',
          verifycode: '',
          rememberme: false,
        }
      }
    },
    created() {
      console.log('created');
    },
    methods: {
      onSubmit: function () {
        if (this.login.username === "" || this.login.password === "") {
          return;
        }
        Store.dispatch("login", this.login);
      },
      newCode: function () {
//        const t = new Date().getTime()
//        let newImg = `/zhba/logon.do?p=verifycode&${t}`;
//        this.verifycode = newImg;
      }
    },
    computed: {},
    watch: {
      '$route': function () {
      },
      a: function () {
        console.log(this.a);
      }
    },
  };
</script>

<style lang="scss" module>
  .form_group {
    margin-bottom: 12px;
  }

  .login_p {
    margin: 0;
    margin-bottom: 11px;
    line-height: 1.6;
    color: rgb(118, 131, 143);
  }

  .login_h3 {
    font-size: 18px;
    font-weight: normal;
    font-family: "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    margin: 22px 0 11px 0;
  }

  .login_form {
    width: 350px;
    min-height: 1px;
    margin-top: 45px;
    margin-bottom: 20px;
  }

  .page_login {
    width: 100%;
    background: url("../assets/img/login.jpg") no-repeat;
    background-position: center top;
    background-size: cover;
  }

  .page_content {
    box-sizing: border-box;
    padding: 20px;
    padding-right: 500px;
  }

  @media screen and (min-width: 992px) {
    .page_content {
      padding-right: 500px;
    }
  }

  .login_main {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    min-height: 600px;
    padding: 150px 60px 180px;
    padding: 0 60px;
    background: #fff;
  }

</style>