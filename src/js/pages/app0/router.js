import Vue from "vue";
import VueRouter from "vue-router";
import AwaitDeal from "./components/awaitDeal/AwaitDeal";
import Dynamic from "./components/dynamic/Dynamic";
import History from "./components/history/History";
import PatientList from "./components/patientList/PatientList";
import PageNotFound from "./components/pageNotFound/PageNotFound";
Vue.use(VueRouter);
const routes = [
  { path: '/', redirect: '/awaitDeal' },
  { path: '/awaitDeal', component: AwaitDeal },
  { path: '/dynamic', component: Dynamic },
  { path: '/history', component: History },
  { path: '/patientList', component: PatientList },
  { path: '*', component: PageNotFound }
]
const router = new VueRouter({
  routes
})
export default router;