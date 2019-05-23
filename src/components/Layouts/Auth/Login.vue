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
            :counter="10"
            :rules="nameRules"
            label="Login"
            type="text"
            required
          ></v-text-field>
          <v-text-field
            id="password"
            prepend-icon="lock"
            name="password"
            :rules="passwordRules"
            label="Enter your password"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions class="ma-2">
        <v-spacer>
          <router-link :to="{ name: 'forgotpassword' }"
            >Forgot Password?</router-link
          >
        </v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => /.+@.+/.test(v) || "Password must be valid"
    ]
  })
};
</script>
