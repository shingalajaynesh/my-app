import axios from "axios";
const APIURL = "http://localhost:3000/";

const makeApi = async (url, method, data = null) => {
  const token = localStorage.getItem("accessToken");
  return await axios({
    url: APIURL + url,
    method: method,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });
};
export const getAllUsers = async () => {
  try {
    const { data } = await makeApi("users", "GET");
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const registerUser = async (userData) => {
  const result = await makeApi("registration", "POST", userData);
  // const result = await reg.json()
  return result;
};

export const loginUser = async (userData) => {
  try {
    const { data } = await makeApi("login", "POST", userData);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProfile = async () => {
  try {
    const { data } = await makeApi("profile", "GET");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserPost = async () => {
  try {
    const { data } = await makeApi("posts", "GET");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const uploadpost = async () => {
  try {
    const { data } = await makeApi("uploadpost", "POST");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postLikeUnlike = async (postId) => {
  try {
    const { data } = await makeApi("post_like", "POST", { post_id: postId });
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const addComment = async (postId, comment) => {
  try {
    const { data } = await makeApi("add_comment", "POST", {
      post_id: postId,
      comment,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getComments = async (postId) => {
  try {
    const { data } = await makeApi(`comments/${postId}`, "GET");

    return data;
  } catch (e) {
    console.log(e);
  }
};
