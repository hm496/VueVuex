<template>
  <div class="heightFull" :class="[$style.page_login, $style.page_dark]">
    <div class="heightFull" :class="$style.page_content">
      <div class="heightFull">
        <div class=" page-brand-info verticalAlign animation-slide-left hidden-xs">
          <div class="page-brand verticalAlignMiddle">
            <div class="brand">
              <img class="brand-img" src="~assets/img/logo-white.svg" height="50" alt="Admui">
            </div>
            <h2 :class="$style.h2" class="hidden-sm">FaceKing 人脸动态识别系统</h2>
            <ul class="list-icons hidden-sm">
              <li :class="$style.left_li">
                <i class="wb-check" aria-hidden="true"></i> FaceKing 是一个基于最新 Web
                技术的人脸动态识别系统。
              </li>
              <li :class="$style.left_li"><i class="wb-check" aria-hidden="true"></i>
                您可以 FaceKing 为基础，快速完成各种功能。
              </li>
              <li :class="$style.left_li"><i class="wb-check" aria-hidden="true"></i>
                FaceKing 紧贴业务特性，涵盖了大量的常用组件和基础功能，最大程度上帮助企业节省时间成本和费用开支。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="$style.login_main">
        <div class="verticalAlign">
          <div class="verticalAlignMiddle">
            <h3 class="" :class="$style.login_h3">登录 FaceKing</h3>
            <p :class="$style.login_p" class="">FaceKing 人脸动态识别系统</p>
            <form action="" :class="$style.login_form">

              <iForm ref="formValidate" :model="login" :rules="ruleValidate">
                <iFormItem prop="uname">
                  <iInput size="large" v-model="login.uname" placeholder="请输入用户名"
                    :class="$style.formItem_base"></iInput>
                </iFormItem>

                <iFormItem prop="pwd">
                  <iInput size="large" v-model="login.pwd" type="password" placeholder="请输入密码"
                    :class="$style.formItem_base"></iInput>
                </iFormItem>
                <iFormItem class="textCenter" :class="$style.tabel_cell">
                  <iButton type="primary" @click="handleSubmit('formValidate')" :class="$style.formItem_base">立即登录
                  </iButton>
                </iFormItem>
              </iForm>

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
  import iInput from 'iviewSrc/input';
  import iForm from 'iviewSrc/form';
  import iButton from 'iviewSrc/button';
  import { LOGIN_SUCCESS, LOGIN_NOTFOUND, LOGIN_FAILPWD, LOGIN_OUTDATE } from '../utils/responseCode.js';

  let iFormItem = iForm.Item;

  export default {
    name: '',
    componentName: '',
    components: {
      iInput,
      iForm,
      iFormItem,
      iButton,
    },
    props: {},
    data: function () {
      return {
        ruleValidate: {
          uname: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ],
          pwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ],
        },
        login: {
          loginOp: 'login',
          crypted: '0',
          uname: '',
          pwd: '',
          verifycode: '',
          rememberme: false,
        },
//      verifycode: `logon.do?p=verifycode&${new Date().getTime()}`,
      }
    },
    created() {
      console.log('Login_Created');
    },
    methods: {
      handleSubmit: function (name) {
        const vm = this;

        let fnObj = {
          [LOGIN_SUCCESS]: function () {
            vm.$Message.success({
              content: '登录成功!',
              duration: 2
            });
          },
          [LOGIN_NOTFOUND]: function () {
            vm.$Message.error({
              content: '用戶登录名不存在!',
              duration: 5
            });
          },
          [LOGIN_FAILPWD]: function () {
            vm.$Message.error({
              content: '账号密码错误!',
              duration: 5
            });
          },
          [LOGIN_OUTDATE]: function () {
            vm.$Message.error({
              content: '您的账户已被停用,请联系管理员',
              duration: 5
            });
          },
        };

        this.$refs[name].validate((valid) => {
          if (valid) {
//            Store.dispatch("login", this.login);
            Store.dispatch("login", this.login).then((res) => {
              if (res.header && res.header.code) {
                const code = res.header.code;
                if (fnObj[code]) {
                  fnObj[code]();
                }
              }
            });
          } else {
            this.$Message.error('请认真填写账号密码!');
          }
        });
      },
      handleReset: function () {
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
  .tabel_cell {
    display: table-cell;
    width: 1%;
  }

  .h2 {
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #d2d2d2;
  }

  .left_li {
    color: white;
    line-height: 22px;
    font-size: 14px;
  }

  .page_dark:after {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(38, 50, 56, .6);
  }

  .formItem_base {
    width: 100%;
    height: 42px;
  }

  .formItem_base > input {
    height: 100%;
  }

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
    display: block;
    width: 350px;
    min-height: 1px;
    margin-top: 45px;
    margin-bottom: 20px;
  }

  @media (max-width: 767px) {
    .login_form {
      width: auto;
    }
  }

  .page_login {
    width: 100%;
    background: url("../assets/img/login.jpg") no-repeat;
    background-position: center top;
    background-size: cover;
    overflow: hidden;
  }

  .page_content {
    position: relative;
    z-index: 2;
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