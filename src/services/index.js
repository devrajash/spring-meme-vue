import vue from "vue";

export const listOfMemes = async () => await vue.axios.get("/list-memes");

export const myFavMemes = async () => await vue.axios.get("/get-all-fav-meme");

export const removeMemeFromMyList = async (id) =>
  await vue.axios.delete(`/delete-meme-byid/${id}`);

export const addMemeTOMyList = async (data) =>
  await vue.axios.post("/set-my-fav-meme", data);
