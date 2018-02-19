<script>
  import { mapState } from 'vuex';

  // Declare global scoped vars
  let vm;

  const pendingUsers = [
                { 
                    status: 'pending', 
                    response: [
                        { date: new Date(), status: 'Pending' },
                        { date: new Date(), status: 'Pending' },
                        { date: new Date(), status: 'Approved' },
                    ]
                },
                { 
                    status: 'pending', 
                    response: []
                },
                { 
                    status: 'pending', 
                    response: []
                },
                { 
                    status: 'approved', 
                    response: []
                },
                { 
                    status: 'pending', 
                    response: []
                },
                { 
                    status: 'pending', 
                    response: []
                },
            ];
  const referralCodes = [
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
            ];

  export default {
    name: 'User-Management',
    middleware: 'unauthenticated',
    beforeMount() {
      vm.$axios.setToken(vm.authentication.accessToken, 'Bearer');
    },
    created() {
      // Instantiate view model
      vm = this;
    },
    data() {
      return {
            referralHeaders: [
                {
                    key: 'code',
                    label: 'Referral Code',
                    class: 'pcw-10'
                },
                {
                    key: 'name',
                    label: 'Associated Influencer',
                    class: 'pcw-15'
                },
                {
                    key: 'address',
                    label: 'ETH Address',
                    class: 'pcw-30'
                },
                {
                    key: 'referralCount',
                    label: 'No. of Referrals',
                    class: 'pcw-15'
                },
                {
                    key: 'vol',
                    label: 'ETH Amount of Referrals',
                    class: 'pcw-20'
                },
                {
                    key: 'comp',
                    label: 'Compensation',
                    class: 'pcw-10'
                }
            ],
            referralCodes: referralCodes,
            currentReferralCodePage: 1,
            perReferralCodePage: 5,
            totalReferralCodeRows: referralCodes.length,
        };
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
<template src="./templates/user-mgmt.html"></template>
<style src="./styles/user-mgmt.scss" lang="scss" scoped></style>