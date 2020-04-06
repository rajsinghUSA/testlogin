import axios from "axios";

const state = {
  /**
   * 0: cannot read, cannot edit
   * 1: can read, cannot edit
   * 2: can read, can edit
   */
  // acl: {
  //   Goods: 0,
  //   Orders: 0,
  //   Reseller: 0,
  //   Supplier: 0,
  //   Customers: 0,
  //   User: 0,
  //   Platform: 0,
  //   Gift: 0,
  //   Stats: 0,
  //   Auth: 0
  // }
  roles: ["authenticated", "owner", "moderator", "admin", "superadmin"]
};


// const dict = [
//   "Goods",
//   "Orders",
//   "Reseller",
//   "Supplier",
//   "Customers",
//   "User",
//   "Platform",
//   "Gift",
//   "Stats",
//   "Auth"
// ];

const mutations = {
  // setAccess: (state, acl) => {
  //   const temp = {};
  //   // eslint-disable-next-line no-unused-vars
  //   for (const key of dict) {
  //     temp[key] = 0;
  //   }
  //   Object.assign(temp, acl);
  //   state.acl = temp;
  // }
};

const actions = {
  setAccess: ({ commit, dispatch }) => {
    console.log(dispatch)
    commit("setAccess", null);
    axios.get("/admin/permissions/").then(res => {
      commit("setAccess", res.data.acl);
    });
  }
};

const getters = {
  getAccess: state => (category, role) => {
    debugger
    const roleIndex = state.roles.indexOf(role);
    const access = state.acl[category];
    if (!access || roleIndex < 0) {
      return false;
    }
    return access > state.roles.indexOf(role);
  },
  // getKeys: () => {
  //   return dict;
  // },
  getRoles: () => {
    return state.roles;
  }
};

export const acl = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
