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
                :active="isUpdating"
                class="progress_liniar"
                color="blue lighten-0"
                height="3"
                indeterminate
              ></v-progress-linear>
            </v-card>
          </v-flex>
          <v-card-text>
            <v-container>
              <v-form @submit="registerUser">
                <v-layout row wrap justify-space-between>
                  <v-flex xs12 md7>
                    <v-layout row>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="form.firstName"
                          label="Name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 md12>
                      <v-text-field
                        v-model="form.lastName"
                        label="Lastname"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 md4 sm12>
                    <img
                      width="100%"
                      height="100%"
                      class="mx-auto"
                      src="/img/registration/logo.png"
                    />
                  </v-flex>
                </v-layout>
                <v-layout row wrap justify-end> </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.username"
                    label="Username"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="form.email"
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
                      <v-btn block color="info" @click="clear">
                        Clear
                      </v-btn>
                    </v-flex>
                    <v-flex xs12 lg4 xl2>
                      <v-btn block color="info" @click="registerUser">
                        SignUp
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { register } from "@/api/user";
const defaultForm = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmpassword: ""
};
export default {
  props: {},
  data: function() {
    return {
      loading: false,
      show1: false,
      show2: false,
      form: defaultForm
    };
  },
  methods: {
    clear() {
      this.form = defaultForm;
    },

    async registerUser() {
      this.loading = true;
      register(this.form);
      await defaultForm;
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
