<script>
  import { mapState } from 'vuex';

  // Declare global scoped vars
  let vm;

  const referralCodes = [
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
                { code: 'CVChristine', name: 'Christine Lim', address: '0x123168164664375581Sf9cb19¢lacc8$653oc23c', referralCount: 10, referralVol: 50123, compensation: 5012},
            ];

  export default {
    name: 'User-Table',
    created() {
      // Instantiate view model
      vm = this;
    },
    async mounted() {

        const res = await vm.$axios.get('users');
        vm.users = vm.userType == 'pending' 
        ? res.data.data.filter(user => !user.isManualVerified) 
        : res.data.data.filter(user => user.isManualVerified);
        vm.totalUserRows = vm.users.length;
    },
    props: [
        'userType'
    ],
    data() {
      return {

            //   FOR USERS

            userHeaders: [
                // {
                //     key: '_actions',
                //     label: ' ',
                //     class: 'pcw-5 text-center light-grey-link'
                // },
                {
                    key: '_select',
                    label: ' ',
                    class: 'select-border'
                },
                {
                    key: 'email',
                    label: 'Email Address',
                    class: 'pcw-10'
                },
                {
                    key: 'full_name',
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
                    key: '_country_birth',
                    class: 'pcw-10'
                },
                {
                    key: '_nationality',
                    class: 'pcw-10'
                },
                {
                    key: '_country_residence',
                    class: 'pcw-15'
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
                },
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
            users: [],
            currentUserPage: 1,
            perUserPage: 5,
            totalUserRows: 0,
            userFilter: null,
            sortUser: null,
            sortUserDesc: false,
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
            ],
            
            // FOR REFERRAL
            
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

            // FOR SELECTION

            selectedRowIDs: [],
            selectedIndexes: [],

            // FOR MESSAGING

            adminMessage: ''
        };
    },
    computed: {
      ...mapState([
        'authentication',
      ]),
    },
    methods: {
        onUsersFiltered (filteredItems) {
            vm.totalUserRows = filteredItems.length;
            vm.currentUserPage = 1;
        },
        onRowClicked (item, index, event) {
            if (vm.selectedIndexes.indexOf(index) > -1) {
                vm.selectedRowIDs.splice(vm.selectedRowIDs.findIndex((element) => element == item._id),1);
                vm.selectedIndexes.splice(vm.selectedIndexes.indexOf(index),1);
            } else {
                vm.addToSelectedArrays(item, index);
            }
        },
        sortUsers (sortBy) {
            if (sortBy == 'nameAsc') {
                vm.sortUser = 'name';
                vm.sortUserDesc = false;
            } else if (sortBy == 'dateAsc') {
                vm.sortUser = 'dob';
                vm.sortUserDesc = false;
            } else if (sortBy == 'dateDesc') {
                vm.sortUser = 'dob';
                vm.sortUserDesc = true;
            }
        },
        approveLine (userID) {
            vm.$axios.patch(`users/${userID}`, {
                'isManualVerified': true,
                'managed_by': vm.authentication.email
            });
            vm.users.splice(vm.users.find((element) => element._id == userID), 1);
        },
        rejectLine (userID) {
            vm.$axios.patch(`users/${userID}`, {
                'isManualVerified': false,
                'managed_by': vm.authentication.email
            });
            vm.users.splice(vm.users.find((element) => element._id == userID), 1);
        },
        approveMultiple () {
            for (let each of vm.selectedRowIDs) {
                vm.approveLine(each);
            }
        },
        rejectMultiple () {
            for (let each of vm.selectedRowIDs) {
                vm.rejectLine(each);
            }
        },
        selectAll () {
            for (let user of vm.users) {
                vm.addToSelectedArrays(user, vm.users.findIndex((e) => e == user));
            }
        },
        unselectAll () {
            vm.selectedRowIDs = [];
            vm.selectedIndexes = [];
        },
        addToSelectedArrays (item, index) {
            if (vm.selectedIndexes.indexOf(index) == -1) {
                vm.selectedRowIDs.push(item._id);
                vm.selectedIndexes.push(index);
            }
        },
        navigate (component, id) {
            vm.$emit('event-navigate', component, id);
        },
        async getImage (blob) {
            const result = await vm.$axios.get(`documents/${blob}`);
            return result.data.uri;
        },
        submitMsg(userId, msgArr) {
            if (typeof msgArr === 'undefined') {
                msgArr = [];
            }
            msgArr.unshift({
                'msg': vm.adminMessage,
                'sent_by': vm.authentication.email
            })
            vm.$axios.patch(`users/${userId}`, {
                'adminMessages': msgArr
            });
            vm.adminMessage = '';
        }
    },
  };
</script>
<template src="./templates/user-table.html"></template>
<style src="./styles/user-table.scss" lang="scss" scoped></style>
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