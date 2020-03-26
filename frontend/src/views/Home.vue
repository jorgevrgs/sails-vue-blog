<template>
  <div class="home">
    <v-img
      alt="Vue logo"
      src="@/assets/logo.png"
      :width="400"
      :height="200"
      :aspect-ratio="16 / 9"
      :contain="true"
    ></v-img>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
