import 'mint-ui/lib/style.css';
import '../../../css/global.css';
import '../../../css/module.css';
import '../../components';
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import global from './global';
import MintUI from 'mint-ui';
//暂时引入全部mintui组件，后续可根据使用情况，引入部分
Vue.use(MintUI)
Vue.use(VueAxios, axios);

// router 这个名字不能变
let vm = new Vue({
  router,
  el: '#app',
  data: function () {
    return {
      inited: false
    }
  },
  template: `
  <div>
      <router-view v-if="inited"></router-view>
      <div class="m-loading" v-else ><mt-spinner type="snake" :size="60"></mt-spinner></div>
  </div>`,
  methods:{

    
  },
  beforeEnter: (to, from, next) => {
    console.log("main route");
    next();
  },
  created: function () {
    //todo 獲取全局數據例如登錄信息]
    console.log("route:", this.$route);
    window.setTimeout(() => {
      this.inited = true
      global.data.msg = "hello world";
    }, 5000);
  },
  components: {
    App
  }
});
router.beforeEach((to, from, next) => {
  console.log("main vm", vm);
  next()
});

