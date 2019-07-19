<template>
  <v-layout row justify-center>
    <v-dialog :value="value" persistent max-width="700px">
      <v-card>
        <v-toolbar color="teal">
          <v-card-title>
            <span class="headline">Add User</span>
          </v-card-title>
        </v-toolbar>

        <v-progress-linear
          v-if="loading"
          :indeterminate="true"
          height="3px"
          class="auth__progress-bar"
        ></v-progress-linear>

        <v-container fill-height fluid grid-list-xl>
          <v-layout justify-center wrap>
            <v-flex xs12 md8>
              <v-container
                color="green"
                title="Edit Profile"
                text="Complete your profile"
              >
                <v-form>
                  <v-container py-0>
                    <v-layout wrap>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="form.firstName"
                          v-validate="{ min: 2, max: 25 }"
                          box
                          label="First Name"
                          name="firstName"
                          :error-messages="errors.collect('firstName')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md6>
                        <v-text-field
                          v-model="form.lastName"
                          v-validate="{ min: 2, max: 25 }"
                          box
                          label="Last Name"
                          name="lastName"
                          :error-messages="errors.collect('lastName')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="form.username"
                          v-validate="{ min: 5, max: 25 }"
                          box
                          label="User Name"
                          name="username"
                          :error-messages="errors.collect('username')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="form.email"
                          v-validate="'email'"
                          box
                          label="Email Address"
                          name="email"
                          :error-messages="errors.collect('email')"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 md12>
                        <v-text-field
                          v-model="form.password"
                          v-validate="'password_complexity'"
                          type="password"
                          box
                          label="Password"
                          name="password"
                          :error-messages="errors.collect('password')"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-container>
            </v-flex>

            <v-flex md3>
              <v-container class="v-card-profile">
                <v-avatar slot="offset" class="mx-auto d-block" size="130">
                  <img
                    src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                    alt=""
                  />
                </v-avatar>
                <v-card-text class="text-xs-center">
                  <v-btn
                    small
                    round
                    color="blue-grey"
                    class="black--text"
                    @click.native="openFileDialog"
                  >
                    <v-icon center> cloud_upload</v-icon>
                  </v-btn>
                  <input
                    id="file-upload"
                    type="file"
                    style="display:none"
                    @change="onFileChange"
                  />
                </v-card-text>
              </v-container>
            </v-flex>
            <v-container grid-list-md text-xs-center>
              <v-layout wrap justify-end>
                <v-flex xs12 md2>
                  <v-btn flat block color="error" @click="$emit('input', false)"
                    >Close</v-btn
                  >
                </v-flex>
                <v-flex xs12 md2>
                  <v-btn
                    color="blue darken-1"
                    :loading="loading"
                    :disabled="loading"
                    block
                    flat
                    @click="onSubmit"
                    >Save</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { register, getUserInfo, editUser } from "@/api/user";
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    userId: {
      required: false,
      type: Number,
      default: () => 0
    }
  },
  data: () => ({
    error: "",
    loading: false,
    items: [],
    form: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    }
  }),
  async created() {
    if (this.userId) {
      this.form = (await getUserInfo(this.userId)).data;
    }
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      try {
        if (this.userId) {
          //TODO modify user
          await editUser(this.userId, this.form);
        } else {
          await register({
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            username: this.form.username,
            email: this.form.email,
            password: this.form.password
          });
        }
      } catch (error) {
        this.error = error;
      }
      this.$emit("input", false);
      this.loading = false;
    },
    openFileDialog() {
      document.getElementById("file-upload").click();
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          this.formData.append("file", files[i], files[i].name);
        }
      }
    }
  }
};
</script>
