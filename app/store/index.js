import * as cookie from 'cookie';

export const state = () => ({
  appTitle: 'Crowdvilla Token Admin',
  appVersion: '1.0.0',
});

export const mutations = {

};

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    if (req.headers.cookie) {
      const parsedCookie = cookie.parse(req.headers.cookie);

      if (parsedCookie.crowdvillax) {
        const storage = JSON.parse(parsedCookie.crowdvillax);
        const { accessToken } = storage.authentication;

        if (accessToken) {
          await dispatch('authentication/jwt', { accessToken });
          await dispatch('user/setPersistence');
        }
      }
    }
  },
};
