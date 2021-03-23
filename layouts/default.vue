<template>
  <v-app id="inspire">
    <AppDrawer />

    <v-main class="grey lighten-3">
      <v-app-bar app flat color="white">
        <v-app-bar-title>La Cà Review</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="Tìm kiếm"
          ></v-text-field>
        </v-responsive>
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-icon :color="drawer ? 'red' : undefined">mdi-map-marker</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>

      <Nuxt />
    </v-main>

    <v-navigation-drawer v-model="drawer" app right width="360">
      <v-container>
        <h1>Gần bạn</h1>
        <p>{{ drawer }}</p>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import AppDrawer from '~/components/app-drawer'
// import AppNavbar from '~/components/app-navbar'

export default {
  components: {
    // AppNavbar,
    AppDrawer,
  },
  data() {
    return {
      drawer: false,
      links: [
        { label: 'Trang chủ', path: '/' },
        { label: 'Về chúng tôi', path: '/about' },
      ],
      model: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

.debug {
  border: 1px solid black;
}
</style>
