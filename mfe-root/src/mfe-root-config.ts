import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@mfe/react",
  app: () =>
    System.import<LifeCycles>(
      "@mfe/react"
    ),
  activeWhen: ["/react#"],
});

start({
  urlRerouteOnly: true,
});
