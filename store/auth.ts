import firebase from 'firebase/app'

export const state = () => ({
  user: {
    name: 'Huy Hoàng Nguyễn',
    email: 'ngxhuyhoang@lacareview.com',
    avatar: 'https://i.pravatar.cc/85',
  },
})

export const getters = {}

export const mutations = {}

export const actions = {
  login() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase.auth().signInWithPopup(provider)
      this.$router.replace('/')
    } catch (e) {
      console.log(e)
    }
  },
  logout() {
    try {
      await firebase.auth().signOut()
      this.$router.replace('/auth/login')
    } catch (e) {
      console.log(e)
    }
  },
}
