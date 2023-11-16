// @ts-ignore
import logo from "./extensions/geon.jpg";

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon: logo,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": " Gav Admin Pannnel",

      "app.components.LeftMenu.navbrand.workplace": "admin-pannel",

      "Auth.form.welcome.title": "Gav Admin Pannnel",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
