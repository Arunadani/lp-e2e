const lp = {
  titleLogo: ".navbar-brand > .logo",
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
  },
  navigation: {
    menuList: ".nav > .dropdown", // ".nav .dropdown .dropdown-toggle",
    categoryVisible: "dropdown-menu .menu-scrollbar-1 .animated .fadeInDown",
    authorVisible: "dropdown-menu .menu-scrollbar-2 .animated .fadeInDown",
    quickLinks: ".footer_term a",
    aboutusDisplay: ".term-to-us-form-section h3",
    home: ".breadcrumb a",
    bcHome: ".navbar-brand" //"ol.breadcrumb li:first-child a"
  }
};

export function getEle(type: any) {
  return lp[type];
}
