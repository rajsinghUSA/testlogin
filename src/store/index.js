import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { acl } from "./acl";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api_url: process.env.VUE_APP_API_URL,
    loadingStatus: "notLoading",
    currentUser: JSON.parse(window.localStorage.getItem("currentUser") || "{}"),
    statusText: "blank"
  },
  mutations: {
    // must be synchronous
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_CURRENT_USER(state, user) {
      console.log(user)
      state.currentUser = user;
      window.localStorage.setItem("currentUser", JSON.stringify(user));
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
      window.localStorage.setItem("currentUser", "{}");
    },
    SET_STATUS_TEXT(state, statusText) {
      console.log(statusText)
      state.statusText = statusText;
    }
    // SET_USER_DATA(state, userdata) {
    //   state.currentUser = userdata
    // }
  },
  actions: {
    // methods, and can be asynchronous
    async login({ commit }, login_data) {
      try {
        console.log("login data: ", login_data);
        const response = await axios.post("/api/login", login_data);
        
        console.log("login response: ", response)
        const currentUser =
          Object.keys(response.data).length > 0
            ? response.data.currentUser
            : {};

        console.log("currentUser: ", currentUser)
        commit("SET_CURRENT_USER", currentUser);

        return response;
      } catch (error) {
        // const testerror = error
        // debugger
        const statusText = error.response.data.error.message;
        commit("SET_STATUS_TEXT", statusText)
        return error.response;
      }
    },
    async logout({ commit }) {
      const response = await axios.post("/api/logout");
      console.log(response);
      commit("LOGOUT_USER");
    },
    async register({ commit }, registration_data) {
      try {
        console.log('running register action')
        const response = await axios.post("/api/register", registration_data);
        const currentUser = response.data.currentUser;
        // debugger
        commit("SET_CURRENT_USER", currentUser);
        return currentUser;
      } catch (error) {
        console.log(error);
        const statusText = error.response.data.error.message
        commit("SET_STATUS_TEXT", statusText)
        console.log(statusText)
        return { error: statusText };
      }
    }
    // fetchUserData(context) {
    //   context.commit("SET_LOADING_STATUS", "loading");
    //   axios.get("/api/userdata").then(response => {
    //     context.commit("SET_LOADING_STATUS", "notLoading");
    //     context.commit("SET_USER_DATA", response.data.userdata);
    //   });
    // }
  },
  getters: {
    // exampleSpecificData(state) {
    //   return state.currentUser.filter(user_item => user_item.sex == "male")
    // }
  },
  modules: {
    acl
  }
});
