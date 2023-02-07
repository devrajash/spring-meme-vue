<template>
  <v-app id="inspire">
    <v-app-bar dark color="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Meme World</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark class="float-right" v-bind="attrs" v-on="on" icon>
            <img
              id="rounded-mini"
              :src="userDetails.image || 'img/img_avatar.png'"
              alt=""
              srcset=""
            />

            <!-- <v-icon color="blue-light">mdi-account-circle</v-icon> -->
          </v-btn>
        </template>

        <v-card link height="200" width="150" class="mx-auto">
          <img
            id="rounded-card"
            :src="userDetails.image || 'img/img_avatar.png'"
            alt=""
            srcset=""
          />
          <v-card-text id="account-style">{{
            userDetails.name.length > 12
              ? userDetails.name.slice(0, 12) + ".."
              : userDetails.name
          }}</v-card-text>

          <v-card-actions style="margin-top: -12px; margin-left: 12px">
            <v-btn color="deep-purple lighten-2" text @click="logout()">
              <v-icon color="blue-light">mdi-logout</v-icon>
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- <v-list>
          <v-list-item @click="logout()" link>
            <v-list-item-title>
              <v-icon color="blue-light">mdi-logout</v-icon>
              Logout</v-list-item-title
            >
          </v-list-item>
        </v-list> -->
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
      expand: false,
      userDetails: {
        name: "",
      },
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
  mounted() {
    const userDetails = JSON.parse(
      sessionStorage.getItem("spring:user_details")
    );
    this.userDetails = userDetails;
    this.userDetails[
      "name"
    ] = `${userDetails.firstname} ${userDetails.lastname}`;
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
#rounded-card {
  height: 89px;
  width: 89px;
  border-radius: 50%;
  padding: 5px;
  margin-top: 10px;
}

#rounded-mini {
  height: 37px;
  width: 37px;
  border-radius: 50%;
  /* padding: 4px; */
  border: 4px solid #fff;
}
#account-style {
  font-size: 18px;
  font-weight: 800;
  margin-top: -10px;
  color: dodgerblue;
  padding: 11px;
}
</style>
