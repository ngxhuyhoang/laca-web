<template>
  <v-navigation-drawer v-model="drawer" app class="pt-4" expand-on-hover>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://i.pravatar.cc/85"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item link to="/user-profile">
      <v-list-item-content>
        <v-list-item-title class="title"> Huy Hoàng Nguyễn </v-list-item-title>
        <v-list-item-subtitle>
          ngxhuyhoang@lacareview.com
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content> {{ $t('home') }} </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-list-item-icon>
        <v-list-item-content> {{ $t('bookmark') }} </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item link @click="signOut()">
        <v-list-item-icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content> {{ $t('signOut') }} </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data() {
    return {
      menu: [{ label: 'Thông tin' }],
      drawer: null,
    }
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut()
        window.location.href = '/auth/login'
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
