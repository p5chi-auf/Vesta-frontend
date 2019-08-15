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
          :to="{ name: subItem.route }"
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
            { title: "List", route: "user" },
            { title: "Right access", route: "access" },
            { title: "Preferences", route: "preferences" }
          ]
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
          route: "floor-view"
        }))
      });
    });
  }
};
</script>
