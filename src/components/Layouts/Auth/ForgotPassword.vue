<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-img src="/img/registration/reg.jpg" height="80px">
        <v-card-title>
          <v-layout>
            <v-card-title>
              <router-link :to="{ name: 'login' }"
                ><v-icon class="b">chevron_left</v-icon>
              </router-link>

              <v-toolbar-title
                class="t"
                font-weight-medium.font-italic
                text-uppercase
                >Account recovery</v-toolbar-title
              >
            </v-card-title>
          </v-layout>
        </v-card-title>
      </v-img>

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
      <v-card-actions class="ma-3">
        <v-layout row wrap justify-end>
          <v-flex xs12 md2>
            <v-btn block color="info">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
