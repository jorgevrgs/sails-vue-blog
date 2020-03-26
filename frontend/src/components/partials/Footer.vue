<template>
  <v-footer dark padless app>
    <v-card class="flex" flat tile>
      <template>
        <v-card-title class="red">
          <strong class="subheading">
            Get connected with us on social networks!
          </strong>

          <v-spacer></v-spacer>

          <v-list-item-icon>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon dark>{{ icon }}</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-card-title>
      </template>

      <template>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <v-icon dark>mdi-copyright</v-icon>
          <strong>Vuetify</strong>
        </v-card-text>
      </template>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
  })
};
</script>
