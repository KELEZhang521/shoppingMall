<template>
  <div>
    <router-view></router-view>
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-nav" @click="goHome">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" @click="goClass">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" @click="goCart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      active: 0
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    goHome () {
      this.$router.push({
        path: '/home'
      })
    },
    goClass () {
      this.$router.push({
        path: '/class'
      })
    },
    goCart () {
      if (this.$store.state.username) {
        this.$router.push({
          path: '/cart'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
}

</script>
<style scoped>
</style>
