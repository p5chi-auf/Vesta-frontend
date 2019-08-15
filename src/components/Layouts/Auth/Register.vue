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
                          v-validate="{ min: 2, max: 25 }"
                          :disablef="loading"
                          :counter="25"
                          :error-messages="errors.collect('firstName')"
                          data-vv-name="firstName"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 md12>
                      <v-text-field
                        v-model="form.lastName"
                        v-validate="{ min: 2, max: 25 }"
                        :disablef="loading"
                        :counter="25"
                        :error-messages="errors.collect('lastName')"
                        data-vv-name="lastName"
                        label="Last name"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex hidden-md-and-down xs12 md4 sm12>
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
                    v-validate="{ min: 5, max: 25 }"
                    :disablef="loading"
                    :counter="25"
                    :error-messages="errors.collect('username')"
                    data-vv-name="username"
                    label="Username"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.email"
                    v-validate="'email'"
                    :disablef="loading"
                    :error-messages="errors.collect('email')"
                    data-vv-name="email"
                    label="Email*"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.password"
                    v-validate="'password_complexity'"
                    :append-icon="
                      itShowPassword ? 'visibility_off' : 'visibility'
                    "
                    :type="itShowPassword ? 'text' : 'password'"
                    :disablef="loading"
                    :counter="32"
                    :error-messages="errors.collect('password')"
                    data-vv-name="password"
                    label="Password"
                    @click:append="itShowPassword = !itShowPassword"
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.confirmpassword"
                    :append-icon="
                      itShowConfirmPassword ? 'visibility_off' : 'visibility'
                    "
                    :type="itShowConfirmPassword ? 'text' : 'password'"
                    :disablef="loading"
                    :counter="32"
                    :error-messages="errors.collect('confirmpassword')"
                    data-vv-name="confirmpassword"
                    label="Confirm Password"
                    required
                    :rules="[comparePassword]"
                    @click:append="
                      itShowConfirmPassword = !itShowConfirmPassword
                    "
                  ></v-text-field>
                </v-layout>
                <v-container grid-list-md text-xs-center>
                  <v-layout row wrap justify-end>
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
    itShowPassword: false,
    itShowConfirmPassword: false
  }),
  computed: {
    comparePassword() {
      return this.form.password !== this.form.confirmpassword
        ? "Password do not match"
        : "";
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      try {
        await this.$store.dispatch("auth/register", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        });
        this.$router.push({ name: "dashboard" });
      } catch (e) {
        this.showNotification(e);
      }
      this.loading = false;
    },
    showNotification(e) {
      this.notification = true;
      this.notificationMessage = e;
    }
  }
};
</script>
