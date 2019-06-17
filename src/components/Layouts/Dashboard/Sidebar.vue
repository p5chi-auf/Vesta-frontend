<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    clipped
    class="grey lighten-4"
    app
  >
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template slot="activator">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-list-tile-title>{{ item.title }} </v-list-tile-title>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="items"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          action: "account_circle",
          title: "User",
          items: [
            { title: "List" },
            { title: "Right access" },
            { title: "Preferences" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog CHI",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog ORL",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog CLU",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog BRA",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog IAS",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog BUC",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog PAR",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog FRA",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog BOS",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog HAN",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        },
        {
          action: "location_city",
          title: "Pentalog MEX",

          items: [
            { title: "Floor 1" },
            { title: "Floor 2" },
            { title: "Floor 3" }
          ]
        }
      ]
    };
  }
};
</script>
