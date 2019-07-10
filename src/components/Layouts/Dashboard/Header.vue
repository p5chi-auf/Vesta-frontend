<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="teal lighten-1"
    dark
    app
    fixed
  >
    <v-toolbar-title class="ml-0 pl-3 toolbar">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <span class="title ml-3 mr-5">config Vesta </span>
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
                  <v-layout row wrap justify-space-between>
                    <v-list-tile-title
                      ><h2 font-weight-bold display-4>
                        Trifan Vadim
                      </h2></v-list-tile-title
                    >
                  </v-layout>
                </v-list>
              </div>
            </v-layout>
            <v-layout justify-space-between>
              <v-btn flat color="blue">View Profile</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="red" @click="logout">Log Out</v-btn>
            </v-layout>
          </v-list>
        </v-container>
      </v-card>
    </v-menu>
    <!--    </v-menu>-->
  </v-toolbar>
</template>
<script>
//TODO import mapMutations from vuex
import { mapMutations } from "vuex";
export default {
  data: () => ({
    menu: false,
    drawer: true
  }),
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
    }
  }
};
</script>

<style scoped>
.toolbar {
  width: 300px;
}
</style>
