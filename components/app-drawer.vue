<template>
  <v-navigation-drawer v-model="drawer" app class="pt-4" expand-on-hover>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="user.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item link exact to="/user-profile/1">
      <v-list-item-content>
        <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ user.email }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item nuxt exact link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content> {{ $t('home') }} </v-list-item-content>
      </v-list-item>
      <v-list-item nuxt exact link to="/saved">
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
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      menu: [{ label: 'Thông tin' }],
      drawer: null,
    }
  },
  computed: mapState({
    user: (state) => state.auth.user,
  }),
  methods: {
    ...mapActions({
      signOut: 'auth/logout',
    }),
  },
}
</script>
