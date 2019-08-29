<template>
  <div>
    <v-app-bar
      v-model="drawer"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="teal lighten-1"
      dark
      app
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3 toolbar">
        <span class="title ml-3 mr-5"> Vesta </span>
      </v-toolbar-title>

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu dark sesion="1000" transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn fab icon avatar v-on="on">
            <v-avatar>
              <img src="/img/avatar/user1.png" alt="Vesta" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-container>
            <v-layout row justify-content-end> </v-layout>
            <v-list>
              <v-layout row>
                <div class="mx-auto">
                  <img src="/img/avatar/user1b.png" width="130px" />
                  <v-list>
                    <v-layout row wrap justify-center>
                      <h2 font-weight-bold display-4>
                        {{ getUserInfo.firstName }}
                        {{ getUserInfo.lastName }}
                      </h2>
                    </v-layout>
                  </v-list>
                </div>
              </v-layout>
              <v-layout justify-space-betwyarneen>
                <v-spacer></v-spacer>
                <v-btn text color="info" @click="open">View Profile</v-btn>
                <v-btn text color="red" @click="logout">Log Out</v-btn>
              </v-layout>
            </v-list>
          </v-container>
        </v-card>
      </v-menu>
    </v-app-bar>
    <div>
      <UserCreateUpdateForm
        ref="userForm"
        :user-id="getUserInfo.id"
        title="User info"
      />
    </div>
  </div>
</template>
<script>
//TODO import mapMutations from vuex
import { mapMutations, mapGetters } from "vuex";
import UserCreateUpdateForm from "@/components/User/UserCreateUpdateForm";

export default {
  components: { UserCreateUpdateForm },
  data: () => ({
    menu: false,
    drawer: true
  }),
  computed: {
    ...mapGetters({
      getUserInfo: "auth/getUserInfo"
    })
  },
  methods: {
    // use mapMutations with 'auth/mutateTokens'
    ...mapMutations({
      mutateTokens: "auth/mutateTokens"
    }),
    logout() {
      this.mutateTokens({});
      this.$router.push("/auth/login");
      //TODO call mutation with empty tokens
      //TODO after it redirect it to auth page
    },
    open() {
      console.log("open");
      this.$refs.userForm.open();
      // call mutation with empty tokens
      // after it redirect it to auth page
    }
  }
};
</script>

<style scoped>
.toolbar {
  width: 300px;
}
</style>
