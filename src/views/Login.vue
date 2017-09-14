<template>
  <div class="wrapper">
    <div class="bgcolor"></div>
    <div class="box">
      <div class="top">
      </div>
      <div class="mid">
        <form class="form" v-on:submit.prevent="onSubmit" method="post" id="form">
          <input type="hidden" name="loginOp" value="login"/>
          <input type="hidden" name="crypted" value="0"/>
          <div class="login">
            <div class="log_head">
              <span>密码登录</span>
            </div>
            <ul class="log_list">
              <li>
                <input type="text" placeholder="用户名" v-model="login.username" name="username" class="username">
                <span class="icons iconuser"></span>
                <em class="nerror error_username">
                  <div class="ferrorhead">请输入用户名</div>
                </em>
              </li>
              <li>
                <input type="password" placeholder="密码" v-model="login.password" name="password" class="password">
                <span class="icons iconpass"></span>
                <em class="nerror error_password">
                  <div class="ferrorhead">请输入密码</div>
                </em>
              </li>
              <li>
                <span class="icons iconcode"></span>
                <input type="text" placeholder="验证码" v-model="login.verifycode" name="verifycode" maxlength="4"
                       class="code" id="code">
                <img :src="verifycode" alt="验证码" @mousedown="newCode" title="点击刷新">
                <em class="nerror error_code">
                  <div class="ferrorhead">请输入验证码</div>
                </em>
              </li>
              <li>
                <div>
                  <label class="checkbox">
                    <input type="checkbox" name="rememberme" v-model="login.rememberme" value="true">
                    <span></span>
                  </label>
                  <span>记住密码</span>
                </div>
                <div class="forget">
                  <span>忘记密码?</span>
                </div>
              </li>
              <li class="log_btn">
                <input type="submit" value="登录">
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div class="bottom">
      </div>
    </div>
  </div>
</template>

<script>
  import { qs } from 'utils/tools.js';

  export default {
    name: '',
    componentName: '',
    props: {},
    data: function () {
      return {
        verifycode: `/zhba/logon.do?p=verifycode&${new Date().getTime()}`,
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
        console.log(qs(this.login));

        axios.post('/logon.do', "loginOp=login&crypted=0&username=ynsgat&password=123456&verifycode=1634");
      },
      newCode: function () {
        const t = new Date().getTime()
        let newImg = `/zhba/logon.do?p=verifycode&${t}`;
        this.verifycode = newImg;
      }
    },
    computed: {},
    watch: {
      '$route': function () {
        console.log(111);
      }
    },
  };
</script>

<style scoped>
  ul {
    padding: 0;
    list-style: none;
  }

  .form {
    margin: 0;
  }

  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
  }

  .wrapper .bgcolor {
    background-color: #1140a6;
    height: 674px;
    position: absolute;
    top: 100px;
    width: 100%;
  }

  .wrapper .box {
    text-align: left;
    font-family: "Microsoft Yahei", Arial;
    display: inline-block;
    position: relative;
    width: 1198px;
  }

  .wrapper .box > .top {
    height: 100px;
    line-height: 100px;
    /*background: url("~assets/img/title.jpg") no-repeat center left;*/
  }

  .wrapper .box > .mid {
    position: relative;
    height: 674px;
    background: url("~assets/img/bg.jpg") no-repeat center left;
  }

  .wrapper .box > .mid .login {
    width: 322px;
    height: 442px;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    position: absolute;
    right: 0;
    top: -21px;
    border-radius: 0 0 4px 4px;
    padding-left: 38px;
    padding-right: 38px;
  }

  .wrapper .box > .mid .login:before {
    content: " ";
    width: 0;
    height: 0;
    display: block;
    border-bottom: 11px solid #e6e6e6;
    border-top: 11px solid transparent;
    border-right: 8px solid #e6e6e6;
    border-left: 8px solid transparent;
    position: absolute;
    top: -2px;
    left: -16px;
  }

  .wrapper .box > .mid .login > .log_head {
    height: 102px;
    line-height: 102px;
  }

  .wrapper .box > .mid .login > .log_head > span {
    font-size: 24px;
    color: #1140a6;
  }

  .wrapper .box > .mid .login > .log_list > li:first-child {
    margin-top: 0px;
  }

  .wrapper .box > .mid .login > .log_list > li {
    height: 40px;
    margin-top: 30px;
    font-size: 0;
    position: relative;
    white-space: nowrap;
  }

  .wrapper .box > .mid .login > .log_list > li > span.icons {
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 2;
    top: 11px;
    left: 14px;
    background-repeat: no-repeat;
  }

  .wrapper .box > .mid .login > .log_list > li > span.icons.iconuser {
    background: url("~assets/img/username.png") no-repeat;
  }

  .wrapper .box > .mid .login > .log_list > li > span.icons.iconpass {
    background: url("~assets/img/password.png") no-repeat;
  }

  .wrapper .box > .mid .login > .log_list > li > span.icons.iconcode {
    background: url("~assets/img/code.png") no-repeat;
  }

  .wrapper .box > .mid .login > .log_list > li > input {
    box-sizing: content-box;
    padding-left: 54px;
    font-family: "Microsoft Yahei", Arial;
    width: 264px;
    height: 38px;
    display: block;
    outline: none;
    border-radius: 4px;
    border: 1px solid #cecece;
    font-size: 14px;
    color: #333;
    background-color: #ecf5fa;
  }

  .wrapper .box > .mid .login > .log_list > li > input:input-placeholder {
    color: #bcbcbc;
  }

  .wrapper .box > .mid .login > .log_list > li > input:-moz-input-placeholder {
    color: #bcbcbc;
  }

  .wrapper .box > .mid .login > .log_list > li > input:-webkit-input-placeholder {
    color: #bcbcbc;
  }

  .wrapper .box > .mid .login > .log_list > li > input:-ms-input-placeholder {
    color: #bcbcbc;
  }

  .wrapper .box > .mid .login > .log_list > li > input.code {
    vertical-align: top;
    display: inline-block;
    width: 155px;
    margin-right: 19px;
  }

  .wrapper .box > .mid .login > .log_list > li > input.code + img {
    vertical-align: top;
    width: 88px;
    height: 38px;
    border: 1px solid #cecece;
    border-radius: 4px;
    cursor: pointer;
  }

  .wrapper .box > .mid .login > .log_list > li label.checkbox {
    display: inline-block;
    background-color: #fff;
    border: 1px solid #cecece;
    width: 14px;
    height: 14px;
    text-align: center;
    line-height: 14px;
    cursor: pointer;
  }

  .wrapper .box > .mid .login > .log_list > li label.checkbox input {
    display: none;
  }

  .wrapper .box > .mid .login > .log_list > li label.checkbox span {
    display: none;
    width: 10px;
    height: 10px;
    background-color: #1140a6;
    margin-top: 2px;
  }

  .wrapper .box > .mid .login > .log_list > li label.checkbox input:checked + span {
    display: inline-block;
  }

  .wrapper .box > .mid .login > .log_list > li label.checkbox {
    margin-right: 9px;
  }

  .wrapper .box > .mid .login > .log_list > li > div {
    padding-top: 2px;
    display: inline-block;
    cursor: context-menu;
  }

  .wrapper .box > .mid .login > .log_list > li > div > span {
    position: relative;
    top: -1px;
    font-size: 14px;
    color: #7a7a7a;
    font-family: "Microsoft Yahei", Arial;
  }

  .wrapper .box > .mid .login > .log_list > li > div > * {
    vertical-align: middle;
  }

  .wrapper .box > .mid .login > .log_list > li > div.forget {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
  }

  .wrapper .box > .mid .login > .log_list > li > div.forget:hover > span {
    text-decoration: underline;
  }

  .wrapper .box > .mid .login > .log_list > li.log_btn {
    margin-top: 13px;
  }

  .wrapper .box > .mid .login > .log_list > li.log_btn input {
    width: 100%;
    padding: 0;
    display: block;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    font-family: "Microsoft Yahei", Arial;
    height: 40px;
    background-color: #1140a6;
    border-radius: 4px;
    letter-spacing: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  em.nerror {
    position: absolute;
    background-color: #fff;
    border: 1px solid #fff;
    width: 212px;
    height: 17px;
    padding: 20px !important;
    z-index: 999;
    border-radius: 5px;
    -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(0, 0, 0, 0.5);
    text-align: left;
    top: -8px;
    left: -314px;
    font-style: normal;
    display: none;
  }

  em.nerror .ferrorhead {
    color: #666666;
    font-size: 12px;
    font-family: "Microsoft Yahei", verdana, serif;
    position: relative;
    height: 17px;
    line-height: 17px;
  }

  em.nerror .ferrorhead::before {
    content: " ";
    background: url("~assets/img/triangle.png");
    position: absolute;
    width: 13px;
    height: 16px;
    top: 0px;
    right: -34px;
  }

</style>