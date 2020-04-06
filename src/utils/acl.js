// import store from "../store/index";

import store from "../store";

export const ACLRules = function(acl) {
  /**
   * Access control categories
   * as defined in store
   */

  // const storage = store;
  // console.log(storage)
  // debugger

  // rules for roles
  // acl.rule("normal", user => user.role == "normal");


  // const roles = store.getters['acl/getRoles'];
  // const roles = store.state.acl.roles;
  // roles.forEach(role => {
  //   acl.rule(role, user => user.role == role);
  // });
  acl.rule("authenticated", () => store.getters.isAuthenticated)
  // acl.rule('admin', user => user && user.type === 'admin')

  // const categories = store.getters['acl/getKeys']
  // const policies = ['view', 'edit']

  // categories.forEach(category => {
  //   policies.forEach(policy => {
  //     acl.rule(policy, category, () => store.getters['acl/getAccess'](category, policy))
  //   })
  // })

};
