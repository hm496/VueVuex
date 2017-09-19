<template>
  <div :class="{loaded : !isLoading}" v-if="show">
    <div id="loader-wrapper">
      <div id="loader" ref="loader">
        <div class="loader_before" ref="loader_before"></div>
        <div class="loader_after" ref="loader_after"></div>
      </div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
      <div class="load_title">正在努力加载中<br></div>
    </div>
  </div>
</template>

<script>

  //period 毫秒周期
  function getDeg(startTime, nowTime, period) {
    let disTime = (nowTime - startTime) % period;
    return disTime / period * 360;
  }

  export default {
    name: '',
    componentName: '',
    props: ["isLoading"],
    data: function () {
      return {
        show: false,
        animationTimer: null,
      }
    },
    created() {
      this.show = this.isLoading;
    },
    mounted() {
      if (navigator.appName === "Microsoft Internet Explorer" && /MSIE 9\.0/i.test(navigator.appVersion)) {
        //IE 9.0
        clearInterval(this.animationTimer);
        this.animationTimer = this.animationStart();
      }
    },
    beforeDestroy: function () {
      console.log("animationTimeranimationTimeranimationTimeranimationTimeranimationTimeranimationTimer");
      clearInterval(this.animationTimer);
    },
    methods: {
      animationStart: function () {
        //兼容IE9
        let startTime = Date.now();
        return setInterval(() => {
          if (this.show === false) {
            clearInterval(this.animationTimer);
            return;
          }
          let nowTime = Date.now();
          const loader_deg = getDeg(startTime, nowTime, 2000);//loader
          const loader_before_deg = getDeg(startTime, nowTime, 3000);//loader_before
          const loader_after_deg = getDeg(startTime, nowTime, 1500);//loader_after
          this.$refs.loader.style["-ms-transform"] = `rotate(${loader_deg}deg)`;
          this.$refs.loader_before.style["-ms-transform"] = `rotate(${loader_before_deg}deg)`;
          this.$refs.loader_after.style["-ms-transform"] = `rotate(${loader_after_deg}deg)`;

          this.$refs.loader.style["transform"] = `rotate(${loader_deg}deg)`;
          this.$refs.loader_before.style["transform"] = `rotate(${loader_before_deg}deg)`;
          this.$refs.loader_after.style["transform"] = `rotate(${loader_after_deg}deg)`;
        }, 16.6667);
      }
    },
    computed: {},
    watch: {
      isLoading: function (val1, val2) {
        if (val1 === false) {
          setTimeout(() => {
            //清除Loading界面DOM
            this.show = false;
          }, 1000);
        } else {
          if (navigator.appName === "Microsoft Internet Explorer" && /MSIE 9\.0/i.test(navigator.appVersion)) {
            //IE 9.0
            clearInterval(this.animationTimer);
            this.animationTimer = this.animationStart();
          }
          this.show = true;
        }
      }
    },
  };
</script>

<style scope>
  #loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
  }

  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    /* COLOR 1 */
    border-top-color: #FF2851;
    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -moz-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
    z-index: 1001;
  }

  #loader > .loader_before {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    /* COLOR 2 */
    border-top-color: #FF472E;
    -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -moz-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
  }

  #loader > .loader_after {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FF9600;
    -ms-transform: rotate(50deg);
    /* COLOR 3 */
    -moz-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -o-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -ms-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(0deg); /* IE 9 */
      transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
    }
    100% {
      -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(360deg); /* IE 9 */
      transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(0deg); /* IE 9 */
      transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */
    }
    100% {
      -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */
      -ms-transform: rotate(360deg); /* IE 9 */
      transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */
    }
  }

  #loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    /*background:linear-gradient(141deg, #FF2851 0%, #FF9600 100%); !* Old browsers *!*/
    background: #ffffff; /* Old browsers */
    z-index: 1000;
    -webkit-transform: translateX(0); /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(0); /* IE 9 */
    transform: translateX(0); /* Firefox 16+, IE 10+, Opera */
  }

  #loader-wrapper .loader-section.section-left {
    left: 0;
  }

  #loader-wrapper .loader-section.section-right {
    right: 0;
  }

  /* Loaded */
  .loaded #loader-wrapper .loader-section.section-left {
    -webkit-transform: translateX(-100%); /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(-100%); /* IE 9 */
    transform: translateX(-100%); /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }

  .loaded #loader-wrapper .loader-section.section-right {
    -webkit-transform: translateX(100%); /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateX(100%); /* IE 9 */
    transform: translateX(100%); /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }

  .loaded #loader {
    opacity: 0;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .loaded #loader-wrapper .load_title {
    visibility: hidden;
  }

  .loaded #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%); /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: translateY(-100%); /* IE 9 */
    transform: translateY(-100%); /* Firefox 16+, IE 10+, Opera */
    -webkit-transition: all 0.3s 1s ease-out;
    transition: all 0.3s 1s ease-out;
  }

  #loader-wrapper .load_title {
    display: inline-block;
    color: #000;
    /*font-size: 10em;*/
    /*background-image: linear-gradient(141deg, #FF2851 0%, #FF9600 100%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    font-family: 'Open Sans';
    font-size: 19px;
    width: 100%;
    text-align: center;
    z-index: 9999999999999;
    position: absolute;
    top: 66%;
    opacity: 1;
    line-height: 30px;
  }

  #loader-wrapper .load_title span {
    font-weight: normal;
    font-style: italic;
    font-size: 13px;
    color: #FFF;
    opacity: 0.5;
  }
</style>