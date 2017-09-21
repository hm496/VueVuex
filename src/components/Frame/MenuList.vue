<template>
  <ul class="ulclear overhidden">
    <template v-for="listObj in listArr">
      <li v-if="listObj.title" :class="$style.menu_title">{{listObj.title}}</li>
      <template v-for="item in listObj.arr">
        <li :class="$style.menu_item">
          <a href="javascript:;"
             @click="turnPage(item)"
             :class="{ [$style.menu_item_a]: true,[$style.menu_item_active]: item.active }">
            <i class="fa" aria-hidden="true" :class="[$style.menu_item_icon,item.icon]"></i>
            <span :class="$style.menu_item_span">{{item.text}}</span><span class="site-menu-arrow"></span>
          </a>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
  export default {
    name: '',
    componentName: '',
    props: {
      listArr: {
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        routeName: ""
      }
    },
    created() {
      this.routeName = this.$route.name;
      if (!this.listArr[0].arr || !this.listArr[0].arr.length) {
        this.listArr[0].arr = [];
      }
      this.highlight();
    },
    methods: {
      turnPage: function (item) {
        if (item.to) {
          this.$router.push(item.to);
        }
      },
      highlight: function () {
        let count = 0;
        for (let i = 0; i < this.listArr.length; i++) {
          if (this.listArr[i].arr.length) {
            this.listArr[i].arr = this.listArr[i].arr.map((obj) => {
              if (obj && obj.name === this.routeName) {
                count++;
                obj.active = true;
              } else {
                obj.active = false;
              }
              return obj;
            });
          }
        }
        if (count === 0 && this.$route.fullPath.indexOf(this.listArr[0].prefix) > 0) {
          this.listArr[0].arr[0].active = true;
        }
      },
    },
    computed: {},
    watch: {
      $route: function () {
        this.routeName = this.$route.name;
        this.highlight();
      }
    },
  };
</script>

<style lang="scss" module>
  .menu_title {
    padding: 0 20px;
    margin-top: 18px;
    font-size: 12px;
    line-height: 36px;
    color: #76838f;
    text-transform: uppercase;
    /*-webkit-transition: all .25s, font .1s .15s, color .1s .15s;*/
    /*-o-transition: all .25s, font .1s .15s, color .1s .15s;*/
    /*transition: all .25s, font .1s .15s, color .1s .15s;*/
    transition: font .1s .15s, color .1s .15s;
  }

  .menu_item {
    line-height: 36px;
    /*-webkit-transition: all .25s, -webkit-transform .1s;*/
    /*-o-transition: all .25s, -o-transform .1s;*/
    /*transition: all .25s, -webkit-transform .1s;*/
    /*transition: transform .1s, all .25s;*/
    /*transition: transform .1s, all .25s, -webkit-transform .1s, -o-transform .1s;*/
  }

  .menu_item_a {
    font-size: 14px;
    padding: 0 20px;
    display: block;
    color: rgba(163, 175, 183, .9);
    text-decoration: none;
    line-height: 35px;
  }

  .menu_item_icon {
    vertical-align: middle;
    margin-right: 3px;
    width: 1em;
    text-align: center;
    position: relative;
    top: 1px;
  }

  .menu_item_span {
    display: inline-block;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .menu_item:hover > a {
    color: rgba(255, 255, 255, .8);
    background-color: rgba(255, 255, 255, .02);
  }

  .menu_item_active {
    color: rgba(255, 255, 255, .8);
    background-color: rgba(255, 255, 255, .02);
  }

</style>