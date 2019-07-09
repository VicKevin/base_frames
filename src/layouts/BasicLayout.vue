<template>
  <a-layout>
    <a-layout-content class="content-body">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </a-layout-content>
    <a-layout-footer class="menu-nav">
    </a-layout-footer>
  </a-layout>
</template>

<script>
  export default {
    name: 'BasicLayout'
  }
</script>
