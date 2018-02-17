<script>
  import { mapState } from 'vuex';

  // Declare global scoped vars
  let vm;

  // sample data
  const users = [
                { id: 1, name: 'McDonald', dob: '1', _country: 40, _id_scan: '', _id_selfie: '', _por: '' },
                { id: 2, name: 'Simon', dob: '2', _country: 21, _id_scan: '', _id_selfie: '', _por: '' },
                { id: 3, name: 'Eric', dob: '3', _country: 89, _id_scan: '', _id_selfie: '', _por: '' },
                { id: 4, name: 'Christine Lim', dob: '4', _country: 38, _id_scan: '', _id_selfie: '', _por: '' },
                { id: 5, name: 'Real Name', dob: '5', _country: 40, _id_scan: '', _id_selfie: '', _por: '' },
                { id: 6, name: 'Cristiano Messi', dob: '6', _country: 21, _id_scan: '', _id_selfie: '', _por: '' },
            ];
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
          userHeaders: [
                {
                    key: '_actions',
                    label: ' ',
                    class: 'pcw-5 text-center light-grey-link'
                },
                {
                    key: 'name',
                    label: 'Full Name',
                    sortable: true,
                    class: 'pcw-30'
                },
                {
                    key: 'dob',
                    label: 'Date of Birth',
                    sortable: true,
                    class: 'pcw-10'
                },
                {
                    key: '_country',
                    class: 'pcw-10'
                },
                {
                    key: '_id_scan_slot',
                    label: 'Scan of ID / Passport',
                    class: 'pcw-15'
                },
                {
                    key: '_id_selfie_slot',
                    label: 'Selfie with ID',
                    class: 'pcw-15'
                },
                {
                    key: '_por',
                    label: 'Proof of Residence',
                    class: 'pcw-15'
                }
            ],
            users: users,
            currentUserPage: 1,
            perUserPage: 5,
            totalUserRows: users.length,
            userFilter: null,
            sortUser: null,
            sortUserDesc: false,
            pendingHeaders: [
                {
                    key: '_status',
                    label: 'KYC Status',
                    class: 'pcw-15'
                },
                {
                    key: 'kycResponse',
                    label: 'KYC Response',
                    class: 'pcw-10'
                },
                {
                    key: 'adminActions',
                    label: 'Verification Status and Remarks (to Admin)',
                    class: 'pcw-30'
                },
                {
                    key: 'userActions',
                    label: 'Verification Remarks (to User)',
                    class: 'pcw-35'
                }
            ],
            pendingUsers: pendingUsers,
            currentPendingUserPage: 1,
            perPendingUserPage: 5,
            totalPendingUserRows: pendingUsers.length,
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
            sortBy: null,
            sortOptions: [
                { value: 'nameAsc', text: 'Sort by A-Z' },
                { value: 'dateDesc', text: 'Sort by Date (Latest)' },
                { value: 'dateAsc', text: 'Sort by Date (Earliest)' },
            ],
            filterBy: null,
            filterOptions: [
                { value: 'verified', text: 'Verified' },
                { value: 'unverified', text: 'Unverified' },
                { value: 'pending', text: 'Pending' },
            ]
        };
    },
    // async mounted() {
    //   const res = await vm.$axios.get('users?$select=kyc.first_name&$select=kyc.last_name');
    // },
    computed: {
      ...mapState([
        'authentication',
      ]),
    },
    methods: {
        onUsersFiltered (filteredItems) {
            this.totalUserRows = filteredItems.length;
            this.currentUserPage = 1;
        },
        sortUsers (sortBy) {
            if (sortBy == 'nameAsc') {
                this.sortUser = 'name';
                this.sortUserDesc = false;
            } else if (sortBy == 'dateAsc') {
                this.sortUser = 'dob';
                this.sortUserDesc = false;
            } else if (sortBy == 'dateDesc') {
                this.sortUser = 'dob';
                this.sortUserDesc = true;
            }
        },
        navigate(component, id) {
            this.$emit('event-navigate', component, id);
        },
    },
  };
</script>
<template src="./templates/user-mgmt.html"></template>
<style src="./styles/user-mgmt.scss" lang="scss" scoped></style>
<style lang="scss">
    .users th:first-child,
    .users tr td:first-child {
        padding-left: 30px;
    }

    .users th:last-child,
    .users tr td:last-child {
        padding-right: 15px;
    }

    .users th {
        font-weight: bold;
        color: #b3beca;
    }

    .tooltip {
        display: block !important;
        width: 160px;

        &.popover .popover-inner {
            background: rgba(0,0,0,0.6);
            color: white;
        }
    }
</style>
