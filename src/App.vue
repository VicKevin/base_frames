<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  export default {
    data () {
      return {
        locale: zhCN
      }
    }
  }
</script>

<style lang="less">
  @import url('./assets/css/base.css');
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    background-color:#fff;
  }
</style>
