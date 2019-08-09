//codigo por default para autenticacion con farebaseui 
let uiConfig = {
  /*callbacks: {
    signInSuccessWitshAuthResult: function(authResult, redirectUrl) {
      console.log(authResult);

      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // 
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',*/
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
//termina codigo por default de autenticacion farebaseui
//se vincula database con la app para mensajeria en tiempo real 
// jala el id del contenedor donde se va a imprir el texto 
/*
let mensajadedatabase = document.getElementById("postbase") 
//se llama a database
let data = firebase.database() 
//se llama a el id del mensaje que va a jalar de database 
let mensaje = data.ref('mensaje') 
// toma el  valor del id de database desde donde se imprime el mensaje una sola vez
mensaje.once('value').then(function(snap){ 
//imprime mensaje
mensajadedatabase.innerText = snap.val() 
});
*/