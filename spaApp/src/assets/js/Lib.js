import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import cookie from "js-cookie";
import axios from "./fetch.js";
import { Toast } from "vant";
import "./resize.js";

Vue.prototype.$http = axios;
Vue.prototype.Toast = Toast;

Vue.use(Vant);
