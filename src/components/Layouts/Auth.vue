<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
#inspire {
  background-image: url("/img/registration/comp.jpeg");
}
</style>
