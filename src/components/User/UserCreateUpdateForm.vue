<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn title="Add" icon v-on="on">
          <slot name="icon" />
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.firstName"
                  v-validate="{ min: 2, max: 25 }"
                  label="First Name*"
                  name="firstName"
                  :error-messages="errors.collect('firstName')"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.lastName"
                  v-validate="{ min: 2, max: 25 }"
                  label="Last Name*"
                  name="lastName"
                  :error-messages="errors.collect('lastName')"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.username"
                  v-validate="{ min: 5, max: 25 }"
                  label="User Name*"
                  name="username"
                  :error-messages="errors.collect('username')"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  v-validate="'email'"
                  label="Email Address*"
                  name="email"
                  :error-messages="errors.collect('email')"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  v-validate="'password_complexity'"
                  label="Password*"
                  name="password"
                  :error-messages="errors.collect('password')"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="onSubmit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { register, getUserInfo, editUser } from "@/api/user";
export default {
  props: {
    userId: {
      type: Number,
      required: false,
      default: () => 0
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    error: "",
    loading: false,
    dialog: false,
    items: [],
    form: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    },
    image: null
  }),
  async created() {
    console.log(this.userId);
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
          this.fetchUserList();
        }
      } catch (error) {
        this.error = error;
      }
      this.$emit("input", false);
      this.loading = false;
    },
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    }
  }
};
</script>
