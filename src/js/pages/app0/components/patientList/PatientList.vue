<template>
  <div>
    <div>病人列表</div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import global from '../../global';
export default {
  name: 'my-patientList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    console.log(global);
    this.axios.get("/catheter-service/slippage/unitCode/leveldetail",{
    //   params: {
    // unitCode: 001,
    // assessLevel
    //   }
    //    param.unitCode=plvm.unitCode;
    //             param.assessLevel=plvm.accessType;
      // headers: {'Authorization':'Bearer ff4dc28c-4c30-4675-9fe3-635d98487b33'}
    }).then((response) => {
      console.log(response);
    }).catch(err =>{
      console.log(err);
    })

    console.log('created');
  },
  beforeRouteEnter (to, from, next) {
    console.log("beforeRouteEnter");
    next(vm => {
      // 通过 `vm` 访问组件实例
    });
    // next(false) 来取消导航。
  },
  mounted:function(){
    console.log('mounted');
  },
  destroyed:function(){
    console.log('destroyed');
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>