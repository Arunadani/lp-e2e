const lp = {
  titleLogo: ".logo",
  uname: "#user_login",
  checkbox: "#rememberme",

  login: {
    uname: ".uname",
    pwd: "#user_pass",
    menu: "#navbar-menu .nav a",
    loginBtn: "#nav a",
    loginLogo: "#login"
  },
  register: {
    signup: ".signup-btn",
    email: "#user_email",
    submit: "#wp-submit"
   
  }
};

export function getEle(type: any) {
  return lp[type];
}
