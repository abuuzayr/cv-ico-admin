<script>
  import { mapState } from 'vuex';

  // Declare global scoped vars
  let vm;

  export default {
    name: 'Pending-User-Management',
    middleware: 'unauthenticated',
    beforeMount() {
      vm.$axios.setToken(vm.authentication.accessToken, 'Bearer');
    },
    created() {
      // Instantiate view model
      vm = this;
    },
    computed: {
      ...mapState([
        'authentication',
      ]),
    },
    methods: {
        navigate(component, id) {
            this.$emit('event-navigate', component, id);
        },
    },
  };
</script>
<template src="./templates/pending-user-mgmt.html"></template>
<style src="./styles/pending-user-mgmt.scss" lang="scss" scoped></style>