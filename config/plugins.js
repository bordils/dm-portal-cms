module.exports = ({ env }) => ({
    email: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'dev@neu.io',
        defaultReplyTo: 'dev@neu.io',
      },
    },
});