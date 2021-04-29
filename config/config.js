exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 

    clientID: 'c7a92b4d-73b9-446c-8ef2-6ba443f2ba72',
  
    clientSecret: 'k-f9gQxFH1Qi-L~26_G5LT_Ec-NBAq~qVv', 
  
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: 'https://weGoGet-5.russelltallen.repl.co/auth/openid/return', 
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,
  
    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    cookieEncryptionKeys: [ 
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],
  
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  };
  
  exports.destroySessionUrl = 'https://weGoGet-5.russelltallen.repl.co';
  
  exports.useMongoDBSessionStore = false;
  
  exports.databaseUri = 'mongodb://https://weGoGet-5.russelltallen.repl.co/OIDCStrategy';
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  
  