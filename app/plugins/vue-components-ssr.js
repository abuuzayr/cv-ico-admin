import Vue from 'vue';
import Recaptcha from 'vue-recaptcha';

import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';
import Header from '../components/Header.vue';
import LoadingScreen from "../components/LoadingScreen.vue";
import MobileHeader from '../components/MobileHeader.vue';
import PendingUserMgmt from '../components/PendingUserMgmt.vue';
import Sidebar from '../components/Sidebar.vue';
import StatusIcon from '../components/StatusIcon.vue';
import User from '../components/User.vue';
import UserTable from '../components/UserTable.vue';
import UserMgmt from '../components/UserMgmt.vue';

Vue.component('Dashboard', Dashboard);
Vue.component("Header", Header);
Vue.component('LoadingScreen', LoadingScreen);
Vue.component('Login', Login);
Vue.component('MobileHeader', MobileHeader);
Vue.component('PendingUserMgmt', PendingUserMgmt);
Vue.component('Recaptcha', Recaptcha);
Vue.component('Sidebar', Sidebar);
Vue.component('StatusIcon', StatusIcon);
Vue.component('User', User);
Vue.component('UserTable', UserTable);
Vue.component('UserMgmt', UserMgmt);
