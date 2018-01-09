import Vue from 'vue';
import Recaptcha from 'vue-recaptcha';

import Dashboard from '../components/Dashboard.vue';
import Header from '../components/Header.vue';
import Login from '../components/Login.vue';
import Sidebar from '../components/Sidebar.vue';
import MobileHeader from "../components/MobileHeader.vue";
import StatusIcon from "../components/StatusIcon.vue";

Vue.component('Dashboard', Dashboard);
Vue.component('Header', Header);
Vue.component('Login', Login);
Vue.component('Recaptcha', Recaptcha);
Vue.component("Sidebar", Sidebar);
Vue.component("MobileHeader", MobileHeader);
Vue.component("StatusIcon", StatusIcon);
