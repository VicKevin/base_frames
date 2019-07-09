<template>
  <div class="user-login">
    <div class="login">
      <div class="title">山香题库系统分校端</div>
      <a-form
        :form="form"
        @submit.prevent="handleSubmit"
      >
        <!--用户名-->
        <a-form-item>
          <a-input
            size="large"
            type="text"
            placeholder="请输入用户名"
            v-decorator="['username',{rules: [{ required: true, message: '请输入用户名' }], validateTrigger: 'blur'}]">
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <!--密码-->
        <a-form-item>
          <a-input
            size="large"
            type="password"
            autocomplete="false"
            placeholder="请输入密码"
            v-decorator="['password',{rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}]">
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <!--验证码-->
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="12">
            <a-form-item>
              <a-input
                size="large"
                type="text"
                autocomplete="false"
                placeholder="请输入验证码"
                v-decorator="['code', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
              </a-input>
            </a-form-item>
          </a-col>
          <a-col class="gutter-row" :span="12">
  <!--          <img style="vertical-align: middle;" @click="changeCode" :src="codeUrl" alt="">-->
          </a-col>
        </a-row>
        <a-form-item>
          <a-button
            html-type="submit"
            size="large"
            type="primary"
            block
            :loading="isLogin">登陆</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
  //
  import { ACCESS_TOKEN } from '@/store/mutation-types'
  export default {
    name: 'login',
    data () {
      return {
        form: this.$form.createForm(this),
        isLogin: false
      }
    },
    methods: {
      handleSubmit () {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.isLogin = true
            this.$ls.set(ACCESS_TOKEN, 'SJIlfkjdsiajkJI34u3')
            this.$router.push({name: 'home'})
            this.isLogin = false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .user-login {
    background-color: #a3caea;
    height: 100%;
  }
  .login {
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    padding: 16px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    padding: 16px 0;
    text-align: center;
  }
</style>
