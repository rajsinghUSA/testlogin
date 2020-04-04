import { store } from "../store/index";

export const ACLRules = function(acl) {
  /**
   * Access control categories
   * as defined in store
   */
  console.log(store)
  debugger
  const categories = store.getters["acl/getKeys"];

  const policies = ["view", "edit"];

  categories.forEach(category => {
    policies.forEach(policy => {
      acl.rule(policy, category, () =>
        store.getters["acl/getAccess"](category, policy)
      );
    });
  });
};
