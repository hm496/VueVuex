<template>
  <div :class="$style.inputDiv">
    <input type="text" :class="$style.input" v-input="emitInput"/>
    <i class="icon wb-check" :class="$style.input_icon"></i>
  </div>
</template>

<script>
  import classNames from 'classNames';

  export default {
    name: '',
    componentName: '',
    components: {},
    props: {},
    data: function () {
      return {
        haserr: true,
        hassuc: true,
      }
    },
    methods: {
      emitInput: function (value, el) {
        this.$emit('input', value);
      }
    },
    computed: {
      inputStyle: function () {
        let arr = [
          this.$style.input,
          {
            [this.$style.has_err]: this.haserr
          }
        ];

        return classNames(arr);
      },
      inputStyle2: function () {
        let arr = [
          this.$style.input,
          {
            [this.$style.has_suc]: this.hassuc
          }
        ];

        return classNames(arr);
      },
    },
    watch: {},
  };
</script>

<style lang="scss" module>
  .inputDiv {
    position: relative;
  }

  .input {
    width: 100%;
    height: 42px;
    border-radius: 3px;
    padding: 4px 40px 4px 12px;
    border: 1px solid rgb(228, 234, 236);
    outline: none;
    box-sizing: border-box;
  }

  .input:focus {
    border: 1px solid rgb(98, 168, 234);
  }

  .input.has_err {
    border: 1px solid rgb(249, 104, 104);
  }

  .input.has_suc {
    border: 1px solid #46be8a;
  }

  .input_icon {
    position: absolute !important;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    padding: 6px;
    text-align: center;
    line-height: 30px;
    color: #46be8a;
  }
</style>