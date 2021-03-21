<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item v-for="item in menu" :key="item.label" link>
        <v-list-item-content>
          <v-list-item-title> {{ item.label }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item link color="grey lighten-4" to="/auth/login">
        <v-list-item-content>
          <v-list-item-title> Đăng xuất </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      menu: [{ label: 'Thông tin' }],
    }
  },
}
</script>
