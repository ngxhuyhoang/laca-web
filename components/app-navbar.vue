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
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { label: 'Trang chủ', path: '/' },
      { label: 'Về chúng tôi', path: '/about' },
    ],
  }),
}
</script>
