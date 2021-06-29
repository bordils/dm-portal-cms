module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'mysql',
                host: env('DATABASE_HOST', 'localhost'),
                port: env('DATABASE_PORT', 3306),
                database: env('DATABASE_NAME', 'default'),
                username: env('DATABASE_USERNAME', 'root'),
                password: env('DATABASE_PASSWORD', ''),
                ssl: {
                    rejectUnauthorized: false
                }
            },
            options: {},
        },
    },
});
// module.exports = ({ env }) => ({
//     defaultConnection: "default",
//     connections: {
//       default: {
//         connector: "bookshelf",
//         settings: {
//           client: "postgres",
//           host: env('DATABASE_HOST'),
//           port: env('DATABASE_PORT'),
//           database: env('DATABASE_NAME'),
//           username: env('DATABASE_USERNAME'),
//           password: env('DATABASE_PASSWORD'),
//           ssl: {
//             rejectUnauthorized: false,
//           },
//         },
//         options: {},
//       },
//     },
//   });
  