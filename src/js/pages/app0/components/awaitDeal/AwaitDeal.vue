<template>
  <div>
    <mt-loadmore :top-method="loadTopRefresh" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div v-for="item of [1,2,3,4,5,6]">待办</div>
    </mt-loadmore>
    <my-footer></my-footer>
  </div>

</template>

<script>

export default {
  name: 'my-awaitDeal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    loadTopRefresh:function(id){
      window.setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded(id);
      },2000);
    }

  },
  created: function () {

    console.log('created');
  },
  mounted:function(){
    console.log('mounted');
  },
  destroyed:function(){
    console.log('destroyed');
  },
  components: {
    
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>