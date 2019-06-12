<template>
  <div class="wrapper" @scroll="event1">
    <div class="nav-bar" :class="[colorTag ? transformColor1: transformColor2]">
      <van-nav-bar class="bar-content" left-text="返回" left-arrow>
        <span slot="right">登陆</span>
        <div slot="title" class="search-input">搜索商品</div>
      </van-nav-bar>
    </div>
    <div ref="content">
      <div class="swipper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="/static/images/swipper/1.jpg" alt="" width="100%">
          </van-swipe-item>
          <van-swipe-item><img src="/static/images/swipper/2.jpg" alt="" width="100%"></van-swipe-item>
          <van-swipe-item><img src="/static/images/swipper/3.jpg" alt="" width="100%"></van-swipe-item>
        </van-swipe>
      </div>
      <div class="shopping-class">
        <van-swipe :autoplay="3000" indicator-color="white" :height="220">
          <van-swipe-item>
            <div class="shoppingContent">
              <div v-for="(item,index) in Iconlist" :key="index" class="Content">
                <div class="img-wrapper"><img :src="item" alt="" width="100%"></div>
                <span>超市</span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="shoppingContent">
              <div v-for="(item,index) in Iconlist" :key="index" class="Content">
                <div class="img-wrapper"><img :src="item" alt="" width="100%"></div>
                <span>超市</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="show-goods-wrapper">
      <div class="show-goods-content">
        <div class="goods-img">
          <img src="/static/images/goods/1.png" width="100%" alt="">
        </div>
        <div class="goods-introduction">
          <img class="icon" src="/static/images/icon/ziying.png" alt="">
          <span class="goods-msg">荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 冰岛白 移动联通电信4G全面屏</span>
        </div>
        <div class="goods-info">
          <span class="goods-price">￥2344</span>
          <span class="goods-xin">新品</span>
          <span class="goods-xiangsi">看相似</span>
        </div>
      </div>
      <div class="show-goods-content">
        <div class="goods-img">
          <img src="/static/images/goods/1.png" width="100%" alt="">
        </div>
        <div class="goods-introduction">
          <img class="icon" src="/static/images/icon/ziying.png" alt="">
          <span class="goods-msg">荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 冰岛白 移动联通电信4G全面屏</span>
        </div>
        <div class="goods-info">
          <span class="goods-price">￥2344</span>
          <span class="goods-xin">新品</span>
          <span class="goods-xiangsi">看相似</span>
        </div>
      </div>
       <div class="show-goods-content">
        <div class="goods-img">
          <img src="/static/images/goods/1.png" width="100%" alt="">
        </div>
        <div class="goods-introduction">
          <img class="icon" src="/static/images/icon/ziying.png" alt="">
          <span class="goods-msg">荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 冰岛白 移动联通电信4G全面屏</span>
        </div>
        <div class="goods-info">
          <span class="goods-price">￥2344</span>
          <span class="goods-xin">新品</span>
          <span class="goods-xiangsi">看相似</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      colorTag: false,
      transformColor1: 'transformColor1',
      transformColor2: 'transformColor2',
      Iconlist: [
        '/static/images/shopIcon/1.png',
        '/static/images/shopIcon/2.png',
        '/static/images/shopIcon/3.png',
        '/static/images/shopIcon/4.png',
        '/static/images/shopIcon/5.png',
        '/static/images/shopIcon/5.png',
        '/static/images/shopIcon/5.png',
        '/static/images/shopIcon/5.png',
        '/static/images/shopIcon/5.png',
        '/static/images/shopIcon/5.png'
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
    axios.get('/getlist').then(res => {
      console.log(res)
    })
  },

  methods: {
    event1 () {
      console.log(1)
    },
    handleScroll () {
      if (window.pageYOffset >= 70) {
        this.colorTag = true
      } else {
        this.colorTag = false
      }
    }
  }
}

</script>
<style lang="stylus"  scoped>
.transformColor1
  background-color #F10215
.transformColor2
  background-color rgba(255,255,255,0)
.wrapper
  height 10rem
  background-color red
  .nav-bar
    position fixed
    width 100%
    height .46rem
    line-height .46rem
    vertical-align middle
    font-size 18px
    z-index 10
    .bar-content
      background-color rgba(255,255,255,.1)
    .search-input
      height .46rem
      box-sizing border-box
      border 1px solid #cccccc
      border-radius .2rem
      background-color #fff
    .login
      padding-left .2rem
      color #fff
  .content
    height 5rem
    background-color #fff
    .swipper
      height .5rem
  .shopping-class
    height 2.20rem
    border-top-right-radius .3rem
    border-top-left-radius  .3rem
    background-color #999
    .shoppingContent
      display flex
      flex-wrap wrap
      .Content
        box-sizing border-box
        width 20%
        padding .12rem
        font-size .16rem
        text-align center
        .img-wrapper
          padding-bottom .1rem
  .show-goods-wrapper
    padding-right .05rem
    background-color #eee
    display flex
    flex-wrap wrap
    .show-goods-content
      padding-top .2rem
      padding-bottom .15rem
      margin-left 2%
      margin-top .1rem
      background-color #fff
      width 48%
      display flex
      flex-direction column
      font-size .12rem
    .goods-introduction
      padding .2rem .12rem .05rem
      .goods-msg
      //多行文本溢出
        overflow hidden
        -webkit-line-clamp 3
        -webkit-box-orient vertical
        display -webkit-box
      //单行文本溢出
        // overflow hidden
        // text-overflow ellipsis
        // white-space nowrap
      .icon
        height .14rem
        width .22rem
    .goods-info
      padding-bottom .05rem
      .goods-price
        color red
        padding-right .2rem
        padding-left .1rem
      .goods-xin
        border 1px solid red
      .goods-xiangsi
        display inline-block
        border 1px solid #ccc
        text-align center
        line-height .2rem
        height .2rem
        margin-left .3rem
        padding .02rem

</style>
