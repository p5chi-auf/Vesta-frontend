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
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { GetCompany } from "@/api/company";
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
  async created() {
    const companies = (await GetCompany()).data;
    companies.forEach(company => {
      this.items.push({
        title: company.name,
        action: "location_city",
        items: company.floors.map(floor => ({
          title: floor.name,
          route: { name: "floor-view", params: { floorId: floor.id } }
        }))
      });
    });
  }
};
</script>
