<template>
  <v-flex xs12 sm5 md3>
    <v-card class="elevation-12">
      <v-toolbar color="teal darken-1" dark>
        <v-toolbar-title class="ma-auto">
          Welcome
        </v-toolbar-title>
      </v-toolbar>
      <v-flex xs10 offset-xs1>
        <v-card-text>
          <v-form>
            <v-text-field
              outline
              name="login"
              label="Login"
              type="text"
              required
              ><v-icon>home</v-icon></v-text-field
            >
            <v-text-field
              id="password"
              outline
              name="password"
              label="Enter your password"
              type="password"
            ></v-text-field>
            <v-checkbox
              v-model="ex4"
              label="Remember Me !"
              color="info"
              value="Remember Me !"
              hide-details
            ></v-checkbox>
          </v-form>
        </v-card-text>
        <v-layout row justufy-center>
          <v-flex xs10 offset-xs1>
            <v-btn block color="info">Login</v-btn>
          </v-flex>
        </v-layout>
        <v-card-actions class="ma-3">
          <v-layout row wrap justify-space-between>
            <v-flex xs12 md6>
              <router-link :to="{ name: 'register' }">
                Create Account
              </router-link>
            </v-flex>
            <v-flex xs12 md4>
              <router-link :to="{ name: 'forgotpassword' }"
                >Forgot Password?</router-link
              >
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-flex>
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
