<template>
  <v-app id="inspire">
    <v-container>
      <v-row :key="n" v-for="n in 1">
        <template v-if="!loader">
          <v-col
            v-for="(item, j) in memeList"
            :key="`${n}${j}`"
            cols="6"
            md="2"
          >
            <MemeCard :item="item" />
          </v-col>
        </template>

        <template v-if="loader">
          <v-col v-for="j in 18" :key="`${n}${j}`" cols="6" md="2">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MemeCard from "@/components/MemeCard.vue";

export default {
  props: {
    loader: {
      type: Boolean,
      default: true,
    },
    memeList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    MemeCard,
  },
};
</script>
