const path = require("path");

const locales = ["en", "da-dk", "bg-bg", "sv-se", "ro-ro"];

exports.createPages = ({ actions }) => {
  locales.forEach((locale) => {
    const slugs = Array.from({ length: 1000 }, (v, i) => i);
    slugs.forEach((slug) => {
      actions.createPage({
        path: `/${locale}/${slug}`,
        component: path.resolve(`./src/templates/basic.tsx`),
      });
    });
    actions.createPage({
      path: `/${locale}/404`,
      matchPath: `/${locale}/*`,
      component: path.resolve(`./src/templates/error-page.tsx`),
      context: { locale },
    });
  });
};
