import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// import es from "@vuetify/es5/locale/es";
// import en from "@vuetify/es5/locale/en";
// Vue.component("my-component", {
//   methods: {
//     changeLocale() {
//       this.$vuetify.lang.current = "sv";
//     }
//   }
// });

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
  // lang: {
  //   locales: { en, es },
  //   current: "en"
  // }
});
