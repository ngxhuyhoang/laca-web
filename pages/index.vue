<template>
  <div>
    <v-container class="mt-5">
      <v-row>
        <v-col v-for="post in postList.data" :key="post.id" cols="3">
          <v-card nuxt rounded="lg">
            <v-card-title>
              <v-row>
                <v-col cols="2">
                  <v-avatar size="36">
                    <v-img src="https://i.pravatar.cc/85"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="10">
                  <v-btn
                    elevation="0"
                    nuxt
                    shaped
                    small
                    link
                    light
                    text
                    to="/user-profile/2"
                  >
                    Estella Adkins
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
            <v-img height="250" :src="post.images[0]"></v-img>
            <v-card-title class="single-line">
              <NuxtLink to="/detail/1">{{ post.name }}</NuxtLink>
            </v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="post.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-chat-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="snackbar = true">
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      fab
      color="warning"
      fixed
      bottom
      right
      class="mb-10 mr-5"
      @click="sheet = !sheet"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          Đóng
        </v-btn>
        <div class="py-3">Tính năng đăng bài sắp ra mắt</div>
      </v-sheet>
    </v-bottom-sheet>

    <v-snackbar v-model="snackbar"> Đã lưu bài viết </v-snackbar>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'home',
  data() {
    return {
      drawer: false,
      sheet: false,
      links: [
        { label: 'Trang chủ', path: '/' },
        { label: 'Về chúng tôi', path: '/about' },
      ],
      model: 0,
      snackbar: false,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    }
  },
  computed: mapState({
    postList: (state) => state.home.postList,
  }),
  mounted() {
    this.getPostList()
  },
  methods: {
    ...mapActions({
      getPostList: 'home/getPostList',
    }),
  },
}
</script>

<style scoped>
.single-line {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
}
</style>
