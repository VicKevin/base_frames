<template>
  <div class="container">
    <div class="content">
      <slot>
        <router-view></router-view>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageLayout',
    components: {
    },
    data () {
      return {}
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
