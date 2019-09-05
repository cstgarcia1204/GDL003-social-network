//codigo por default para autenticacion con farebaseui 
let uiConfig = {
 
  signInSuccessUrl: 'muro.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',//'index.html',
  // Privacy policy url.
  privacyPolicyUrl: function(){
    window.location.assign('<your-privacy-policy-url>');
  }
};

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
