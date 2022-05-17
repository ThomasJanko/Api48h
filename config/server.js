module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: '6eLpWZ4vtZ3Bt841wTM/dg==,HQnN6fNSP4a5QECVDtXG/w==,pYLRp70m0mVSmaqYZ9xMHQ==,4ngfpt+T+5zyL5+g4ZyE/A=='
  },
});
