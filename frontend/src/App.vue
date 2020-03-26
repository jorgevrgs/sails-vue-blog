<template>
  <v-app>
    <!--v-navigation-drawer app-->
    <NavigationDrawer />
    <!--/v-navigation-drawer-->

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!--v-footer app-->

    <!-- <Footer /> -->
    <Footer />
    <!--/v-footer-->
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/partials/NavigationDrawer";
import Footer from "./components/partials/Footer";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Footer
  },
  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
