<template>
  <v-app id="dashboard">
    <Header />
    <Sidebar />
    <v-content>
      <v-container fluid>
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
  },
  created() {
    this.$store.dispatch("auth/getCurrentUserInfo");
  }
};
</script>
<style scoped>
.container {
  min-height: 100%;
}
</style>
