import decode from 'jwt-decode';

export const state = () => ({
  admin: false,
  email: null,
  emailVerified: null,
  userID: null,
});

/* eslint no-param-reassign:
  ["error", {
    "props": true,
    "ignorePropertyModificationsFor": ["_state"]
  }]
*/
export const mutations = {
  SET_ADMIN(_state, admin) {
    _state.admin = admin;
  },
  SET_EMAIL(_state, email) {
    _state.email = email || null;
  },
  SET_EMAILVERIFIED(_state, verified) {
    _state.emailVerified = verified;
  },
  SET_USERID(_state, userID) {
    _state.userID = userID || null;
  },
};

export const getters = {
  isAdmin(_state) {
    return !!_state.admin;
  },
  isAuthenticated(_state) {
    return !!_state.userID;
  },
  isEmailVerified(_state) {
    return !!_state.emailVerified;
  },
};

export const actions = {
  setPersistence({ commit }, { accessToken }) {
    const {
      admin,
      email,
      emailVerified,
      userId,
    } = decode(accessToken);

    commit('SET_ADMIN', admin);
    commit('SET_EMAIL', email);
    commit('SET_EMAILVERIFIED', emailVerified);
    commit('SET_USERID', userId);
  },
  unsetPersistence({ commit }) {
    commit('SET_ADMIN', null);
    commit('SET_EMAIL', null);
    commit('SET_EMAILVERIFIED', null);
    commit('SET_USERID', null);
  },
};
