<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="item.url"
      :lazy-src="require('@/assets/img-loader.gif')"
      height="200px"
    ></v-img>

    <v-card-title>
      {{
        item.name?.length >= 22 ? item.name?.slice(0, 20) + "..." : item.name
      }}
    </v-card-title>

    <!-- <v-card-subtitle
      >{{ myFavMemesIdsList.includes(item.idName || item.id) }}
    </v-card-subtitle> -->
    <!-- src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" -->
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!loadingLike" icon @click="addOrREmoveFromFav()">
        <v-icon color="red">{{
          myFavMemesIdsList.includes(item.idName || item.id)
            ? "mdi-cards-heart"
            : "mdi-heart-outline"
        }}</v-icon>
      </v-btn>
      <v-progress-linear
        style="margin-top: 30px"
        v-if="loadingLike"
        color="cyan"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
      <!-- <v-progress-circular
        v-if="loadingLike"
        indeterminate
        color="red"
      ></v-progress-circular> -->
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MemeCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    show: false,
    loadingLike: false,
  }),
  computed: {
    ...mapState({
      myFavMemesIdsList: (state) => state.Memes.myFavMemesIdsList,
    }),
  },
  methods: {
    async addOrREmoveFromFav() {
      this.loadingLike = true;
      this.show = !this.show;
      if (!this.myFavMemesIdsList.includes(this.item.idName || this.item.id)) {
        if (this.item?.idName == undefined) {
          this.item["idName"] = this.item.id;
          delete this.item.id;
        }
        await this.$store.dispatch("Memes/addMemeTOMyFavList", this.item);
      } else {
        await this.$store.dispatch(
          "Memes/removeMemeTOMyFavList",
          this.item.idName || this.item.id
        );
      }
      this.loadingLike = false;
    },
  },

  mounted() {},
};
</script>
