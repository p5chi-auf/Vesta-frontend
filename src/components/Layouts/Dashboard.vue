<template>
  <v-app id="inspire">
    <Header />
    <Sidebar />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
export default {
  components: {
    Header,
    Sidebar
  }
};
</script>
