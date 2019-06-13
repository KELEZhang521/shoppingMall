<template>
  <div class="wrapper">
    <div class="nav">
      <van-nav-bar
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="goBack"
      >
        <div class="search-wrapper" slot="title">
          <van-icon name="search"></van-icon>
          <input class="search"  placeholder="请输入你要搜索的内容">
        </div>
      </van-nav-bar>
    </div>
    <div class="side-nav-wrapper">
     <div class="side-nav-left">
       <ul>
         <li class="goods-class border" v-for="index in 20" :key="index" @click="choosedClass()">商品类别</li>
       </ul>
     </div>
     <div class="side-nav-right">
       <div class="goods-wrapper">
         <h4>时尚服装</h4>
         <ul class="goods-content-wrapper">
           <li class="goods-content">
            <div class="goods-img-wrapper"> <img class="goods-img" src="/static/images/goodsclass/1.jpg" alt=""></div>
            <div class="goods-info-wrapper"><span class="good-info">男装</span></div>
           </li>
           <li class="goods-content">
            <div class="goods-img-wrapper"> <img class="goods-img" src="/static/images/goodsclass/1.jpg" alt=""></div>
            <div class="goods-info-wrapper"><span class="good-info">男装</span></div>
           </li>
           <li class="goods-content">
            <div class="goods-img-wrapper"> <img class="goods-img" src="/static/images/goodsclass/1.jpg" alt=""></div>
            <div class="goods-info-wrapper"><span class="good-info">男装</span></div>
           </li>
           <li class="goods-content">
            <div class="goods-img-wrapper"> <img class="goods-img" src="/static/images/goodsclass/1.jpg" alt=""></div>
            <div class="goods-info-wrapper"><span class="good-info">男装</span></div>
           </li>
         </ul>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Class',
  data () {
    return {
      choosedClass: false,
      activeKey: 1
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    goBack () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}

</script>
<style lang="stylus" scoped>
//选中商品类别的
.wrapper
  .nav
    position fixed
    z-index 10
    width 100%
    height .5rem
    .search-wrapper
      margin-top .05rem
      height .33rem
      border 1px solid red
      border-radius .2rem
      text-align center
      line-height .3rem
      .search
        height .2rem
        font-size .16rem
  .side-nav-wrapper
    position relative
    .side-nav-left
      position fixed
      left 0
      top .4rem
      height 100%
      overflow scroll
      //去掉滚动条
      ms-overflow-style none //IE 10+
      overflow -moz-scrollbars-none
      &::-webkit-scrollbar
        display none
      .goods-class
        font-size .16rem
        height .5rem
        width .9rem
        text-align center
        line-height .5rem
        background-color #ccc
    .side-nav-right
      position fixed
      top .45rem
      left .1rem
      margin-left .8rem
      background-color #fff
      overflow scroll
      height 100%
      //去掉滚动条
      ms-overflow-style none //IE 10+
      overflow -moz-scrollbars-none
      &::-webkit-scrollbar
        display none
      .goods-wrapper
        overflow hidden
        //padding-right .2rem
        font-size 22px
        padding .1rem
        .goods-content-wrapper
          display flex
          padding .15rem
          flex-wrap wrap
          .goods-content
            box-sizing border-box
            width 33%
            display flex
            flex-direction column
            padding .05rem
            .goods-img-wrapper
              font-size 0
              text-align center
              width .7rem
              height .7rem
              line-height .7rem
              vertical-align middle
              margin 0 auto
              .goods-img
                width .6rem
                height .6rem
            .goods-info-wrapper
              height .12rem
              line-height .12rem
              font-size .12rem
              text-align center
</style>
