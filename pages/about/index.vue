<template>
  <v-app id="inspire">
    <AppNavbar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <AppSideBar />
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from '~/components/app-navbar'
import AppSideBar from '~/components/app-sidebar'

export default {
  components: {
    AppNavbar,
    AppSideBar,
  },
}
</script>
