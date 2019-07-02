<template>
  <v-app id="dashboard">
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
<style scoped>
#dashboard {
  background-image: url("/img/background/b1.png");
}
</style>
