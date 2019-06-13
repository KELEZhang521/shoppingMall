<template>
  <div class="wrapper">
    <div class="nav-bar">
      <van-nav-bar
      left-text="返回"
      right-text="按钮"
      title="购物车"
      left-arrow
      @click-left="goHome"
      >
      </van-nav-bar>
    </div>
    <div class="cat-goods">
      <ul>
        <li class="goods-wrapper" v-for="(item , index) in goods" v-bind:key="index">
          <div class="goods">
            <div class="goods-check">
              <div class="check-goods">
                <van-checkbox  v-model="item.checked" @change="getChecked(item)"></van-checkbox>
              </div>
            </div>
            <div class="goods-detail">
              <div class="goods-img">
                 <img :src="item.goodimg" alt="" width="100%" height="100%">
              </div>
              <div class="goods-info">
                <div class="goods-intro">
                  <p>荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版麒麟Kirin980全网通版自拍 麒麟Kirin980全网通</p>
                </div>
                <div class="goods-price-cat">
                    <span class="goods-price">{{item.price}}</span>
                    <van-stepper class="goods-cat" v-model="value1"/>
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
    <div class="order-wrapper">
      <van-submit-bar
        :price="allprice"
        button-text="提交订单"
      >
        <van-checkbox v-model="checked"  @click="getAllGoods(checked)">全选</van-checkbox>
        <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>
</van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      checked: false,
      value1: 1,
      value2: 2,
      goods: [{
        id: 1,
        goodimg: '/static/images/goodsclass/1.jpg',
        price: 230.00,
        checked: false,
        number: 1
      }, {
        id: 2,
        goodimg: '/static/images/goodsclass/1.jpg',
        price: 240.00,
        checked: false,
        number: 1
      },
      {
        id: 3,
        goodimg: '/static/images/goodsclass/1.jpg',
        price: 270.00,
        checked: false,
        number: 1
      }
      ],
      allPriceList: []
    }
  },

  components: {},

  computed: {
    allprice () {
      let sum = 0
      this.allPriceList.forEach(item => {
        sum += item.price * 100
      })
      return sum
    }
  },

  mounted () {},

  methods: {
    getChecked (value) {
      // console.log(item.price)

      if (value.checked) {
        this.allPriceList.push({
          id: value.id,
          price: value.price
        })
        // 所有商品全选，则全选按钮选中
        let tag = this.goods.every(item => {
          return item.checked === true
        })
        if (tag) {
          this.checked = true
        }
      } else {
        // 取消勾选该商品时，改商品价格从数组出去除
        this.allPriceList.forEach((item, index) => {
          if (item.id === value.id) {
            // console.log(1)
            this.allPriceList.splice(index, 1)
          }
        })
        this.checked = false
      }
    },
    getAllGoods (value) {
      value = !value
      // 选中所有商品
      this.$nextTick(() => {
        console.log(value)
      })
      if (value) {
        this.goods.forEach(item => {
          item.checked = true
          this.allPriceList = []
          this.allPriceList.push({
            id: item.id,
            price: item.price
          })
        })
      } else { // 放弃选中
        this.goods.forEach(item => {
          item.checked = false
          this.allPriceList = []
        })
      }
    },
    // 返回home页面
    goHome () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}

</script>
<style lang="stylus" scoped>
.wrapper
  overflow hidden
  position relative
  .cat-goods
    .goods-wrapper
      padding .05rem
      .goods
        display flex
        .goods-check
          width .5rem
          height .9rem
          display flex
          justify-content center
          align-items center
          .check-goods
            height .3rem
        .goods-detail
          display flex
          width 100%
          height .9rem
          box-shadow:0.01rem 0.01rem 0.01rem rgba(0,0,0,0.1);
          .goods-img
            width .9rem
            height .9rem
            line-height .8rem
            text-align center
            padding .05rem
            box-sizing border-box
            font-size 0
            img
              vertical-align middle
          .goods-info
            font-size .12rem
            width 100%
            .goods-intro
              padding .1rem
            .goods-price-cat
              display flex
              position relative
              .goods-price
                color red
                height .3rem
                display block
                line-height .3rem
                font-size .16rem
                padding-left .15rem
              .goods-cat
                position absolute
                bottom 0
                right .15rem
  .order-wrapper
    .van-submit-bar
      bottom .48rem
</style>
