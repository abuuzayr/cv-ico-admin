<script>
// Declare global scoped vars
let vm;

export default {
  name: 'Sidebar',
  created() {
    // Instantiate view model
    vm = this;
  },
  props: [
    'activeItem'
  ],
  data() {
    return {
    }
  },
  methods: {
    navigate(component) {
      this.$emit('event-navigate', component);
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
  },
};
</script>
<template src="./templates/sidebar.html"></template>
<style src="./styles/sidebar.scss" lang="scss" scoped></style>
