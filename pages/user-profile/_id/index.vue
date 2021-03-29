<template>
  <v-container>
    <v-sheet rounded="lg" class="a">
      <v-img src="https://picsum.photos/1920/200?random=1" class="cover" />
      <v-avatar size="150" class="avatar">
        <v-img :src="user.avatar" />
      </v-avatar>
      <h1 class="full-name">{{ user.name }}</h1>
      <div class="count mt-5">
        <v-row>
          <v-col cols="6">
            <b>Followers</b>
            <p>1000</p>
          </v-col>
          <v-col cols="6">
            <b>Following</b>
            <p>1000</p>
          </v-col>
        </v-row>
      </div>
    </v-sheet>

    <v-row class="mt-10">
      <v-col cols="4">
        <v-sheet height="500" rounded="lg"></v-sheet>
      </v-col>
      <v-col cols="8">
        <v-sheet height="500" rounded="lg"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'app-layout',
  computed: mapState({
    user: (state) => state.auth.user,
  }),
}
</script>

<style scoped>
.cover {
  width: 100%;
  height: 300px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.avatar {
  position: absolute;
  top: 225px;
  left: 43%;
}

.a {
  position: relative;
}

.full-name {
  margin-top: 100px;
  text-align: center;
}

.count {
  width: 25%;
  margin: 0 auto;
  text-align: center;
}
</style>
