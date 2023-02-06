<template>
  <v-app id="inspire">
    <v-app-bar dark color="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meme World</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark class="float-right" v-bind="attrs" v-on="on" icon>
            <v-icon color="blue-light">mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout()" link>
            <v-list-item-title>
              <v-icon color="blue-light">mdi-logout</v-icon>
              Logout</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      width="200"
      style="position: fixed"
      v-model="drawer"
      absolute
      temporaty
    >
      <v-list class="marging-meme-drawer">
        <v-list-item
          @click="
            drawer = false;
            $router.push(item.path);
          "
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon style="margin-right: -20px !important">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="grey lighten-2 pt-n12">
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Meme Store", icon: "mdi-home", path: "/meme-home" },
        { title: "My Favorite", icon: "mdi-heart", path: "/fav-meme" },
      ],
    };
  },
  created() {
    const token = sessionStorage.getItem("spring:access_token");
    if (!token) {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
<style>
#inspire {
  background: #e0e0e0;
}
.marging-meme-drawer {
  margin-top: 67px;
}
</style>
