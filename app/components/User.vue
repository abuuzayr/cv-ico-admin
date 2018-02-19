<script>
// Declare global scoped vars
let vm;

export default {
  name: 'User',
  created() {
    // Instantiate view model
    vm = this;
  },
  mounted() {
    this.id = this.userId;
    this.users = this.allUsers;
    this.usersLength = this.allUsers.length;
  },
  props: [
    'userId',
    'allUsers'
  ],
  data() {
    return {
      id: null,
      usersLength: 0,
      users: [],
    }
  },
  methods: {
    navigate(component, id) {
      this.$emit('event-navigate', component, id);
    },
    forward() {
      if (this.id != this.usersLength) this.id += 1;
    },
    backward() {
      if (this.id != 1) this.id -= 1;
    },
  },
  computed: {
    activeUser() {
      return this.users.find(function(element){
        return element.id == vm.id;
      });
    }
  }
};
</script>
<template src="./templates/user.html"></template>
<style src="./styles/user.scss" lang="scss" scoped></style>
