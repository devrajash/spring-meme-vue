import vue from "vue";

export const listOfMemes = async () => await vue.axios.get("/list-memes");

export const myFavMemes = async () => await vue.axios.get("/get-all-fav-meme");

export const removeMemeFromMyList = async (id) =>
  await vue.axios.delete(`/delete-meme-byid/${id}`);

export const addMemeTOMyList = async (data) =>
  await vue.axios.post("/set-my-fav-meme", data);

export const loginUser = async (data) =>
  await vue.axios.post("/auth/login", data);

export const registerUser = async (data) =>
  await vue.axios.post("/auth/register", data);

export const googleLoginVerify = async (data) =>
  await vue.axios.post("/auth/google", data);
