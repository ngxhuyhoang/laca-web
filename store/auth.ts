import firebase from 'firebase/app'

export const state = () => ({
  user: {
    name: 'Huy Hoàng Nguyễn',
    email: 'ngxhuyhoang@lacareview.com',
    avatar: 'https://i.pravatar.cc/85',
    cover: 'https://picsum.photos/1920/200?random=1',
  },
})

export const getters = {}

export const mutations = {}

export const actions: any = {
  async login(): Promise<any> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      const result = await firebase.auth().signInWithPopup(provider)
      console.log(result)
      this.$router.replace('/')
    } catch (e) {
      console.log(e)
    }
  },
  async logout(): Promise<any> {
    try {
      await firebase.auth().signOut()
      this.$router.replace('/auth/login')
    } catch (e) {
      console.log(e)
    }
  },
}
