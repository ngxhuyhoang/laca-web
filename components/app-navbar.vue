<template>
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
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer v-model="drawer" app absolute temporary right>
      <v-container>
        <h1>Haha</h1>
      </v-container>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { label: 'Trang chủ', path: '/' },
      { label: 'Về chúng tôi', path: '/about' },
    ],
  }),
}
</script>
