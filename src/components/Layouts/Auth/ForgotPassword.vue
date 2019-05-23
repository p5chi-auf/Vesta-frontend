<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar color="teal darken-1" dark>
        <router-link :to="{ name: 'login' }"
          ><v-icon>keyboard_arrow_left</v-icon>
        </router-link>
        <v-toolbar-title>Account recovery</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="lock"
            name="password"
            label="Email address"
            type="password"
          ></v-text-field>
          <template>
            <v-list-tile-title xs class="font-weight-medium"
              >The password reset instructions will be sent to your registered
              email address.</v-list-tile-title
            >
          </template>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-layout row wrap>
          <v-flex xs12 md1>
            <v-btn block color="info">Submit</v-btn>
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
