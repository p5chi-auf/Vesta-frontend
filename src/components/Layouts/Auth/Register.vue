<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 offset-sm3>
        <v-card class="elevation-5">
          <v-flex xs12>
            <v-card class="elevation-12">
              <v-toolbar color="teal darken-1" dark>
                <v-toolbar-title class="ma-auto">
                  Create an Account
                </v-toolbar-title>
              </v-toolbar>
            </v-card>
          </v-flex>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row wrap justify-start>
                  <v-flex xs12 md6>
                    <v-layout row>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="name"
                          :counter="10"
                          :rules="nameRules"
                          label="Name"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-flex xs12 md12>
                      <v-text-field
                        v-model="lastname"
                        :counter="10"
                        :rules="lastnameRules"
                        label="Lastname"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-flex>
                  <v-flex xs12 md6 sm12>
                    <img
                      width="90%"
                      class="mx-auto"
                      src="/img/registration/dispersion.png"
                    />
                  </v-flex>
                </v-layout>

                <v-layout row wrap justify-end> </v-layout>

                <v-layout row>
                  <v-text-field
                    v-model="username"
                    :counter="10"
                    :rules="usernameRules"
                    label="Username"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="email"
                    :counter="10"
                    :rules="emailRules"
                    label="Mail*"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="password"
                    :counter="30"
                    label="Password"
                    required
                  ></v-text-field>
                </v-layout>
                <v-layout row>
                  <v-text-field
                    v-model="confirmpassword"
                    :counter="30"
                    :rules="[comparePassword]"
                    label="Confirm Password"
                    required
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
                      <v-btn block type="submit" color="info">
                        SingUp
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      lastname: "",
      lastnameRules: [
        v => !!v || "Lastname is required",
        v => (v && v.length <= 10) || "Lastname must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "Mail is required",
        v => (v && v.length <= 10) || "Mail must be less than 10 characters"
      ],
      username: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 10) || "Username must be less than 10 characters"
      ],
      password: "",
      confirmpassword: ""
    };
  },
  computed: {
    comparePassword() {
      return this.password !== this.confirmpassword
        ? "Password do not match"
        : "";
    }
  },

  methods: {
    clear() {
      this.name = "";
      this.lastname = "";
      this.email = "";
      this.username = "";
      this.password = "";
      this.confirmpassword = "";
    }
  }
};
</script>
