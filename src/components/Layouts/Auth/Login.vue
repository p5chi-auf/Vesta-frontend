<template>
  <v-flex xs12 sm5 md3>
    <v-card class="elevation-12">
      <v-img src="/img/registration/reg.jpg" height="80px">
        <v-layout>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-layout row wrap justify-content-center>
              <v-card-title>
                <v-layout justify-content-center>
                  <div>
                    <v-toolbar-title class="t" font-weight-light.font-italic
                      >Sign In</v-toolbar-title
                    >
                  </div>
                </v-layout>
              </v-card-title>
            </v-layout>
          </v-card-title>
        </v-layout>
      </v-img>

      <v-progress-linear
        v-if="loading"
        :indeterminate="true"
        height="3px"
        class="auth__progress-bar"
      ></v-progress-linear>
      <v-flex xs10 offset-xs1>
        <v-form ref="form" :autocomplete="false">
          <v-card-text>
            <v-text-field
              v-model="form.username"
              :disabled="loading"
              prepend-icon="person"
              name="username"
              label="Username"
              type="text"
              required
            ></v-text-field>
            <v-text-field
              id="password"
              v-model="form.password"
              :disabled="loading"
              prepend-icon="lock"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-checkbox
              v-model="form.remember"
              :disabled="loading"
              label="Remember me"
              color="info"
              hide-details
            ></v-checkbox>
          </v-card-text>
          <v-layout row justufy-center>
            <v-flex xs10 offset-xs1>
              <v-btn
                block
                color="info"
                :loading="loading"
                :disabled="loading"
                @click="onSubmit"
                >Sign in
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
        <v-card-actions class="ma-3">
          <v-layout row wrap justify-space-between>
            <v-flex xs12 md6>
              <router-link :to="{ name: 'register' }">
                Create Account
              </router-link>
            </v-flex>
            <v-flex xs12 md4>
              <router-link :to="{ name: 'forgotpassword' }"
                >Forgot Password?
              </router-link>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-flex>
    </v-card>
    <v-snackbar v-model="notification" top right color="pink" :timeout="3000">
      Username or password not found
    </v-snackbar>
  </v-flex>
</template>
<script>
import { login } from "@/api/user";

export default {
  data: () => ({
    form: {
      username: "",
      password: "",
      remember: false
    },
    loading: false,
    source: "String",
    notification: false,
    drawer: null
  }),
  methods: {
    async onSubmit() {
      this.loading = true;
      try {
        // const { accessToken, refreshToken } =
        await login(this.form.username, this.form.password);

        this.$router.push({ name: "dashboard" });
      } catch (e) {
        this.showNotification(e);
      }
      this.setLoadingFalse();
    },
    setLoadingFalse() {
      this.loading = false;
    },
    showNotification() {
      this.notification = true;
    }
  }
};
</script>
