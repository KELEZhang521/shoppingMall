<template>
  <div class="wrapper">
    <div class="login-content">
      <div class="title">
      <h3>欢迎登陆shopingMall</h3>
      </div>
      <div class="login" v-if="loginFlag">
        <div class="login-item">
          <span>用户名</span><input type="text" v-model="username" placeholder="请插入用户名"/>
        </div>
        <div class="login-item">
          <span>密码</span><input type="password" placeholder="请插入密码"/>
        </div>
        <div class="login-button" @click="loginEvent">登陆</div>
        <div class="login-info">
          <span @click="loginFlag=!loginFlag">立即注册</span>|<span>忘记密码</span>
        </div>
      </div>
      <div class="login" v-if="! loginFlag">
        <div class="login-item">
          <span>邮箱</span><input type="text" placeholder="请插入邮箱"/>
        </div>
        <div class="login-item">
          <span>密码</span><input type="password" placeholder="请插入密码"/>
        </div>
        <div class="login-button">注册</div>
        <div class="login-info">
          <span @click="loginFlag=!loginFlag">返回登陆</span>|<span>忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      loginFlag: true,
      username: '',
      password: null,
      email: ''
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    loginEvent () {
      this.$store.dispatch('getUser', this.username)
      this.$router.push(
        {
          path: '/'
        }
      )
    }
  }
}

</script>
<style lang="stylus" scoped>
.wrapper
  position fixed
  width 100%
  height 100%
  z-index -10
  background-image url('/static/images/login/bg.jpeg')
  background-position 0px 0px
  background-size 100% 100%
  background-repeat: no-repeat
  .login-content
    display flex
    height 100%
    flex-direction column
    justify-content flex-start
    align-items center
    margin-top 30%
    .title
      font-size 0.36rem
      color pink
      margin-bottom 0.6rem
    .login
      .login-item
        border 1px solid #cccccc
        border-radius 0.2rem
        padding 0.05rem 0.15rem
        margin .1rem auto
        font-size .14rem
        span
          display inline-block
          text-align center
          width .6rem
        input
          display inline-block
          border none
          width 2rem
          background-color: transparent
      .login-button
        background-color rgba(255,255,255,0.1)
        border 1px solid #cccccc
        border-radius .15rem
        font-size .26rem
        padding .05rem
        text-align center
      .login-info
        margin-top .2rem
        font-size .16rem
        text-align center
        color red
        span
          padding 0 .1rem

</style>
