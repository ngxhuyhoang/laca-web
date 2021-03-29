<template>
  <v-row>
    <v-col cols="7">
      <img src="~/assets/images/hanoi-map.jpeg" class="banner" />
    </v-col>

    <v-col cols="5">
      <div class="login">
        <h2>Chào mừng bạn quay trở lại</h2>
        <h4 class="mb-5">Đăng nhập để tiếp tục</h4>
        <v-btn @click="login()">
          <img src="~/assets/icons/google.png" class="google-icon" />
          <div>Đăng nhập bằng Google</div>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
  },
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  box-shadow: 5px 0 50px #ccc;
}

.google-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
