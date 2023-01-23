import {
  listOfMemes,
  myFavMemes,
  removeMemeFromMyList,
  addMemeTOMyList,
} from "@/services";

export default {
  namespaced: true,
  state: () => ({
    memeList: [],
    myFavMemesList: [],
    myFavMemesIdsList: [],
  }),
  actions: {
    async getMemesList(store) {
      let res = await listOfMemes();
      store.commit("setMemeList", res.data?.memes);
    },
    async getMyFavMemeList(store) {
      let res = await myFavMemes();
      await store.commit("setMyFavMemeList", res.data);
      await store.commit("likeDislikeActivatorMutation");
    },

    async addMemeTOMyFavList(store, data) {
      await addMemeTOMyList(data);
      await store.commit("setMemeTOMyFavList", data);
      await store.commit("likeDislikeActivatorMutation");
    },

    async removeMemeTOMyFavList(store, data) {
      await removeMemeFromMyList(data);
      await store.commit("setremoveMemeTOMyFavList", data);
      await store.commit("likeDislikeActivatorMutation");
    },
  },

  mutations: {
    async setMemeList(state, res) {
      state.memeList = res;
    },
    async setMyFavMemeList(state, res) {
      state.myFavMemesList = res;
    },

    async setMemeTOMyFavList(state, res) {
      state.myFavMemesList.push(res);
    },

    async setremoveMemeTOMyFavList(state, res) {
      state.myFavMemesList = await state.myFavMemesList.filter((el) => {
        return el.idName != res;
      });
    },

    async likeDislikeActivatorMutation(state) {
      state.myFavMemesIdsList = [
        ...state.myFavMemesList.map((el) => el.idName),
      ];
    },
  },
};
