<template>
  <v-app id="inspire">
    <AppDrawer />

    <v-main class="grey lighten-3">
      <AppNavbar />

      <v-container class="mt-5">
        <v-row>
          <v-col v-for="n in 5" :key="n" cols="3">
            <v-card nuxt rounded="xl">
              <v-card-title>
                <v-row>
                  <v-col cols="2">
                    <v-avatar size="36">
                      <v-img src="https://i.pravatar.cc/85"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10">
                    <v-btn elevation="0" nuxt shaped small>
                      Estella Adkins
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
              <v-card-title>
                <v-btn elevation="0" nuxt shaped small @click="drawer = !drawer"
                  >Cafe Badilico</v-btn
                >
              </v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
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
                <v-btn icon>
                  <v-icon>mdi-bookmark-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="drawer" absolute right temporary width="1280">
      <h1>Chi tiết bài viết sẽ ở đây</h1>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppNavbar from '~/components/app-navbar'
import AppDrawer from '~/components/app-drawer'

export default {
  components: {
    AppNavbar,
    AppDrawer,
  },
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
