<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar color="teal darken-1" dark>
        <v-toolbar-title class="ma-auto">
          Welcome
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="person"
            name="login"
            label="Login"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            id="password"
            prepend-icon="lock"
            name="password"
            label="Enter your password"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="ma-4">
        <router-link :to="{ name: 'forgotpassword' }"
          >Forgot Password?</router-link
        >
        <v-layout row wrap justify-end>
          <v-flex xs12 md2>
            <v-btn block color="info">Login</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: {},
  data: () => ({
    source: "String",
    drawer: null
  })
};
</script>
