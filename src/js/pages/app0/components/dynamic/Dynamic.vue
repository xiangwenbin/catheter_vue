<template>
  <div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div>动态</div>
    </mt-loadmore>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'my-dynamic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>