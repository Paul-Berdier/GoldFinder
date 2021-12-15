// v9 compat packages are API compatible with v8 code
import firebaseConf from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDn_BgbvQnT5x2LytZ18v0fL7TSc4oGSl4",
//   authDomain: "gold-finder-7a06b.firebaseapp.com",
//   projectId: "gold-finder-7a06b",
//   storageBucket: "gold-finder-7a06b.appspot.com",
//   messagingSenderId: "816273426856",
//   appId: "1:816273426856:web:92d286d596218d0460f59d",
//   measurementId: "G-9ZYEFEJ3BS"
// };

// firebaseConf.initializeApp(firebaseConfig)

export async function loginUser(email:string, password:string){
  try {
    const res = await firebaseConf.auth().signInWithEmailAndPassword(email,password)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function registerUser(email:string, password:string){
  try {
    const res = await firebaseConf.auth().createUserWithEmailAndPassword(email,password)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getProfil(){
    const profilRef = firebaseConf.firestore().collection("Profil");
    // const snapshot = await profilRef.get();
    // snapshot.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data());
    // });
    return profilRef;
}