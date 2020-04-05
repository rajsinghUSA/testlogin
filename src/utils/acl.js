// import store from "../store/index";

export const ACLRules = function(acl) {
  /**
   * Access control categories
   * as defined in store
   */
  acl.rule("normal", "pages", user => user.role == "normal");
};
