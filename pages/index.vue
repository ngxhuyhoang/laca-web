<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="pt-4" expand-on-hover>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://i.pravatar.cc/85"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">
            Huy Hoàng Nguyễn
          </v-list-item-title>
          <v-list-item-subtitle>
            ngxhuyhoang@lacareview.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Home </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Đăng xuất </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      </v-app-bar>
    </v-main>
  </v-app>
</template>

<script>
export default {
  //
}
</script>
