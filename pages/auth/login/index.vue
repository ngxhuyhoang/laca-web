<template>
  <div>
    <h1>Login</h1>
    <v-btn @click="login()">Login</v-btn>
    <v-btn @click="logout()">Logout</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider()

      try {
        const result = await firebase.auth().signInWithPopup(provider)

        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },

    async logout() {
      try {
        const result = await firebase.auth().signOut()
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>