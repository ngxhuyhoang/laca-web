<template>
  <div>
    <img src="~/assets/images/hanoi-map.jpeg" class="banner" />

    <v-sheet height="300" class="login" rounded elevation="5">
      <h2>Chào mừng bạn quay trở lại</h2>
      <h4 class="mb-5">Đăng nhập để tiếp tục</h4>
      <v-btn @click="login()">
        <img src="~/assets/icons/google.png" class="google-icon" />
        <div>Đăng nhập bằng Google</div>
      </v-btn>
    </v-sheet>
  </div>
</template>

<script lang="ts">
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

<style scoped>
.banner {
  width: 100%;
  max-height: 100vh;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12.5%;
  left: 25%;
  right: 25%;
}

.google-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>
