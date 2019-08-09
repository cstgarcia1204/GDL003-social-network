document.getElementById("correo").style.display= "none";
document.getElementById("mapa").style.display= "none";
    
    
    const mostrarPerfil= () => {
    document.getElementById("wallHead").style.display ='none';
    document.getElementById("botones").style.display = 'block';
    document.querySelector(".inSession").style.display = 'block';
    document.getElementById("botonesFinales").style.display = "none";
    document.getElementById("pensando").style.display= "none";
    document.getElementById("correo").style.display= "block";
    document.getElementById("mapa").style.display= "none";
    console.log("perfil");
    };

   document.getElementById("profile").addEventListener("click", mostrarPerfil);
  
 

const muro=()=>{
    document.getElementById("wallHead").style.display ='block';
    document.getElementById("botones").style.display = 'block';
    document.querySelector(".inSession").style.display = 'block';
    document.getElementById("botonesFinales").style.display = "block";
    document.getElementById("pensando").style.display = "block";
    document.getElementById("correo").style.display= "none";
    document.getElementById("mapa").style.display= "none";
}
document.getElementById("wall").addEventListener("click", muro);




    //En pagina logIn crea la foto, mail y el id
 
firebase.auth().onAuthStateChanged(function(user){
  if (user){
      // already signed in
      const dataPerfil= {
          name: user.displayName,
          email: user.email,
          img: user.photoURL,
          id: user.uid

      }
     
      console.log('El usuario activo es: '+dataPerfil.name+ dataPerfil.email+dataPerfil.img+dataPerfil.id);
      document.querySelector('.photo').innerHTML=`<img class="photoProfile" src="${dataPerfil.img}" alt="photo">`;
      document.querySelector('.name').innerHTML=`<h1>${dataPerfil.name}</h1>`;
      document.querySelector('.email').innerHTML=`<h1>${dataPerfil.email}</h1>`;
      const setUidUsuario=firebase.firestore().collection('usuarios').doc (dataPerfil.id);
      setUidUsuario.set({
          wallUsuario: "",
          media:"",
          name:user.displayName,
          email: user.email

      });
  }
  });
    

   

//AQUI INICIA DATABASE- FIRESTORE
let firestore= firebase.firestore();


//Siempre se va alternar entre colecciones y documentos const docReference= firestore.collection('samples').doc('laMeraData');
const docReference= firestore.doc('usuarioLogeado/suSeccion'); 

const outputH1= document.querySelector('#outputH1');
const inputText=document.querySelector('#latest');
const buttonSave=document.querySelector('#saveButton');
const buttonLoad=document.querySelector('#loadButton');
const outputComentarios=document.querySelector('#coments');
//const user=firebase.auth().currentUser;
//const uid=user.uid;

var newPostKey= firebase.database().ref().child('post').push().key;

buttonSave.addEventListener('click',function(){
    const textToSave=inputText.value;
    console.log('Im going to save '+textToSave+' to Firestore');

    
    
    const docReference1=firestore.doc('/post/' + newPostKey);  

    //var updates={};
    //updates['/post/' + newPostKey]= dataPerfil;  
        
    docReference1.set({    
        texto: textToSave,
        autorid: firebase.auth().currentUser.uid   

    })    .then(function(){
        console.log('Post Guardado!!');
        inputText.value="";
    }).catch(function(error){
        console.log('Existe un error', error);
    })
});

/*function obtenerDatosEnTiempoReal(){
    var newPostKey1= firebase.database().ref().child('post').push().key;
    const docReference2=firestore.doc('/post/' + newPostKey1); 

    docReference2.onSnapshot(function(doc){
      if(doc && doc.exists){
          const myData= doc.data();
          console.log('Verificando la data que estoy recibiendo: ',doc);
          outputH1.innerHTML='Mi post es: '+ myData.post;
      };

    })
}*/
    
function postEnTiempoReal(){
    firestore.collection('post').onSnapshot(snapshot =>{ 
       let changes= snapshot.docChanges();
        //console.log(changes);
        //console.log(change.doc.data());
        changes.forEach(change=>{    
        console.log(change.doc.data());
        outputH1.innerHTML=change.doc.data().texto;
        })
    })
 };
postEnTiempoReal();


//funcion todos los comentarios

function postComentarios(){
    firestore.collection('post').onSnapshot(snapshot =>{ 
       let changes= snapshot.docChanges();
        //console.log(changes);
        //console.log(change.doc.data());
        changes.forEach(change=>{    
        console.log(change.doc.data().texto);
        outputComentarios.innerHTML+=`<br><p class= "caja">${change.doc.data().texto}</p><br>`;
        })
    })
 };
postComentarios();


//--------------------------------------------------------------------------
//funcion para eliminar mensajes


let eliminar = document.getElementById("eliminar");
eliminar.addEventListener('click',function(){
    const textToSave=inputText.value;
    console.log('Im going to delete '+ textToSave);
    firestore.doc('/post/' + newPostKey).delete()
     .then(function(){
        console.log('Post borrado!!');
        document.getElementById("outputH1").style.display ='none';
    }).catch(function(error){
        console.log('Existe un error', error);
    })
 });

 


//para boton logOut devuelva a index.html
document.getElementById('loguedOut').addEventListener('click',function(){
  firebase.auth().signOut();
  location.href='http://localhost:5000/src/';
});