<script>
  import { mapState } from 'vuex';

  // Declare global scoped vars
  let vm;

  export default {
    name: 'Dashboard-Page',
    // middleware: 'unauthenticated',
    beforeMount() {
      vm.$axios.setToken(vm.authentication.accessToken, 'Bearer');
    },
    created() {
      // Instantiate view model
      vm = this;
    },
    data() {
      return {
        component: 'dashboard',
        activeItem: 'dashboard',
        userId: null,
        users: [],
      };
    },
    computed: {
      ...mapState([
        'authentication',
      ]),
    },
    methods: {
      navigate(event, id) {
        if (id) {
          this.userId = id;
        }
        vm.component = event;
        this.setActive(event);
      },
      setActive(menuItem) {
        this.activeItem = menuItem;
      },
    },
  };
</script>
<template>
  <div class="dashboard-page">
    <Header />
    <MobileHeader v-on:event-navigate="navigate" />
    <div class="page">
      <Sidebar id="Sidebar" v-on:event-navigate="navigate" :activeItem="activeItem"/>
      <div class="side-page">
        <Dashboard v-if="component == 'dashboard'" v-on:event-navigate="navigate" />
        <UserMgmt v-if="component === 'userMgmt'" v-on:event-navigate="navigate(...arguments)" />
        <PendingUserMgmt v-if="component === 'pendingUserMgmt'" v-on:event-navigate="navigate(...arguments)" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '~assets/styles/main.scss';

  .page {
    display: flex;
    align-items: start;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  #Sidebar {
    flex: 0 0 250px;
  }

  .side-page {
    flex: 1 1 auto;
    background: #f3f7fa;
    min-height: calc(100vh);
    height: 100%;
    overflow-y: hidden;
  }

  .dashboard-page {
    background: $blue-bg;
  }

  @media (max-width: $screen-xs-max) {
  }
  @media (min-width: $screen-sm-min) {
  }
  @media (min-width: $screen-md-min) {
  }
  @media (min-width: $screen-lg-min) {
  }
</style>
