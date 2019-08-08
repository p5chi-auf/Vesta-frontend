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
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <v-list-tile-title>{{ item.title }} </v-list-tile-title>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title">
          <router-link :to="{ name: subItem.route }">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </router-link>
        </v-list-tile>
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
