<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="teal lighten-1"
    dark
    app
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5"
        >Vesta&nbsp;<span class="font-weight-light">Users</span></span
      >
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
    <v-btn icon large>
      <v-avatar size="42px">
        <img src="/img/avatar/vesta.png" alt="Vesta" />
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>
