export default function ({ store, redirect }) {
  return (!store.getters['authentication/isAuthenticated']) ? redirect('/') : null;
}
