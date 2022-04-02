module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e0c20e60bb05c999d72d04fba695a926'),
  },
});
