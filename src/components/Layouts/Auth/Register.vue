<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 offset-sm3>
        <v-card class="elevation-5" color="grey lighten-4">
          <v-flex xs12>
            <v-card class="elevation-12">
              <v-img src="/img/registration/reg.jpg" height="80px">
                <v-layout row justify-content-end>
                  <v-card-title>
                    <router-link :to="{ name: 'login' }">
                      <v-btn dark icon>
                        <v-icon class="b">chevron_left</v-icon>
                      </v-btn>
                    </router-link>

                    <v-toolbar-title
                      class="t"
                      font-weight-medium.font-italic
                      text-uppercase
                      >Create an Account</v-toolbar-title
                    >
                  </v-card-title>
                </v-layout>
              </v-img>
              <v-progress-linear
                v-if="loading"
                :indeterminate="true"
                height="3px"
                class="auth__progress-bar"
              ></v-progress-linear>
            </v-card>
          </v-flex>
          <v-card-text>
            <v-container>
              <v-form ref="form" :autocomplete="false">
                <v-layout row wrap justify-space-between>
                  <v-flex xs12 md7>
                    <v-layout row>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="form.firstName"
                          :disablef="loading"
                          label="Name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 md12>
                      <v-text-field
                        v-model="form.lastName"
                        :disablef="loading"
                        label="Lastname"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-flex>

                  <v-flex hidden-md-and-down hidden-xs-and-down xs12 md4 sm12>
                    <img
                      width="100%"
                      class="logo"
                      src="/img/registration/logo.png"
                    />
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-text-field
                    v-model="form.username"
                    :disablef="loading"
                    label="Username"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.email"
                    :disablef="loading"
                    label="Email*"
                    required
                  ></v-text-field>
                </v-layout>

                <v-layout row>
                  <v-text-field
                    v-model="form.password"
                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    required
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.confirmpassword"
                    :append-icon="show2 ? 'visibility_off' : 'visibility'"
                    :type="show2 ? 'text' : 'password'"
                    label="Confirm Password"
                    required
                    @click:append="show2 = !show2"
                  ></v-text-field>
                </v-layout>

                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap justify-end>
                    <v-flex xs12 lg4 xl2>
                      <v-btn block color="info">
                        Clear
                      </v-btn>
                    </v-flex>
                    <v-flex xs12 lg4 xl2>
                      <v-btn
                        block
                        color="info"
                        :loading="loading"
                        :disabled="loading"
                        @click="onSubmit"
                      >
                        SignUp
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
        <v-snackbar
          v-model="notification"
          top
          right
          color="pink"
          :timeout="3000"
        >
          {{ notificationMessage }}
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { register } from "@/api/user";

export default {
  data: () => ({
    form: {
      firstName: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    loading: false,
    notification: false,
    notificationMessage: "",
    show1: false,
    show2: false
  }),
  methods: {
    async onSubmit() {
      this.loading = true;
      try {
        await register(
          this.form.firstName,
          this.form.username,
          this.form.email,
          this.form.password,
          this.form.confirmpassword
        );
        this.$router.push({ name: "dashboard" });
      } catch (e) {
        this.showNotification(e);
      }
      this.setLoadingFalse();
    },
    setLoadingFalse() {
      this.loading = false;
    },
    showNotification(e) {
      this.notification = true;
      this.notificationMessage = e;
    }
  }
};
</script>
