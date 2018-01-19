<script>
// Declare global scoped vars
let vm;
const users = [
                  { id: 1, name: 'McDonald', dob: '1', _country: 40, _id_scan: '', _id_selfie: '', _por: '' },
                  { id: 2, name: 'Simon', dob: '2', _country: 21, _id_scan: '', _id_selfie: '', _por: '' },
                  { id: 3, name: 'Eric', dob: '3', _country: 89, _id_scan: '', _id_selfie: '', _por: '' },
                  { id: 4, name: 'Christine Lim', dob: '4', _country: 38, _id_scan: '', _id_selfie: '', _por: '' },
                  { id: 5, name: 'Real Name', dob: '5', _country: 40, _id_scan: '', _id_selfie: '', _por: '' },
                  { id: 6, name: 'Cristiano Messi', dob: '6', _country: 21, _id_scan: '', _id_selfie: '', _por: '' },
              ];

export default {
  name: 'User',
  created() {
    // Instantiate view model
    vm = this;
  },
  mounted() {
    this.id = this.userId;
  },
  props: [
    'userId'
  ],
  data() {
    return {
      id: null,
      usersLength: users.length,
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
      return users.find(function(element){
        return element.id == vm.id;
      });
    }
  }
};
</script>
<template src="./templates/user.html"></template>
<style src="./styles/user.scss" lang="scss" scoped></style>
