module.exports = ({ env }) => ({
    //host: env("HOST", "0.0.0.0"),
    url: env("STRAPI_URL"),
    port: env.int("PORT", 8080),
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET", "ccee8e34019fdb86fb8552c899ed9075"),
      },
    },
  });
  

//   module.exports = ({ env }) => ({
//     url: env(“STRAPI_URL”),
//     port: env.int(“PORT”, 1337),
//     admin: {
//         auth: {
//             secret: env(“ADMIN_JWT_SECRET”, “cf4351f3b80262a4f196748fc49b9b91”),
//         },
//         url: env(“ADMIN_URL”),
//     },
// });