const lp = {
  titleLogo: ".navbar-brand > .logo",
  uname: "#user_login",
  checkbox: "#rememberme",

  login: {
    uname: ".uname",
    pwd: "#user_pass",
    menu: "#navbar-menu .nav a",
    loginBtn: "#nav a",
    loginLogo: "#login",
    loginError: "#login_error",
    profileName: ".nav >li:nth-child(4) a",
  },
  register: {
    signup: ".signup-btn",
    email: "#user_email",
    submit: "#wp-submit",
    messageTrue: ".message",
  },
  navigation: {
    menuList: ".nav > .dropdown", // ".nav .dropdown .dropdown-toggle",
    categoryVisible: "#navbar-menu ul.nav>li:nth-child(1)>ul>li>a",
    authorVisible: ".dropdown-menu.menu-scrollbar-2 a",
    catergorySubmenu: ".dropdown-menu.menu-scrollbar-1 .animated.fadeInDown a",
    quickLinks: ".footer_term a",
    quickLinksDisplay: ".term-to-us-form-section",
    bcHome: ".navbar-brand",
    socialMedia: [".icoYoutube", ".icoInstagram", ".icoFacebook"],
    //"ol.breadcrumb li:first-child a"
    socialMediaDisplay: [
      "#logo",
      '.cq2ai img[alt="Instagram"]',
      "#blueBarDOMInspector",
    ],
    authorImage: ".authors-info-image",
  },
};

export function getEle(type: any) {
  return lp[type];
}
