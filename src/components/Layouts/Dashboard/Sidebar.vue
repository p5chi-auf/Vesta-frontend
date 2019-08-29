<template>
  <v-navigation-drawer fixed clipped class="grey lighten-4" app>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template slot="activator">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.route"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group
        v-for="item in companyList"
        :key="item.title"
        v-model="item.active"
        prepend-icon="location_city"
        no-action
      >
        <template slot="activator">
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.floors"
          :key="subItem.title"
          :to="{ name: 'floor-view', params: { floorId: subItem.id } }"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          action: "account_circle",
          title: "User",
          items: [
            { title: "List", route: { name: "user" } },
            { title: "Right access", route: { name: "access" } },
            { title: "Preferences", route: { name: "preferences" } }
          ]
        },
        {
          action: "view_carousel",
          title: "Agencies Management",
          items: [{ title: "Agencies List", route: { name: "agencies-list" } }]
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      companyList: "company/getCompanyList"
    })
  },
  created() {
    this.$store.dispatch("company/fetchCompanies");
  }
};
</script>
