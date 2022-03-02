// v9 compat packages are API compatible with v8 code
import firebase from 'firebase';


import { Profil, Inventaire } from './type/Type';

export async function loginUser(email:string, password:string){
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log(res)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function registerUser(email:string, password:string, username:string){
  try {
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    let inventaire : Inventaire = {
      item: "",
    }
    const resInventaire = await firebase.firestore().collection('Inventaire').add(inventaire);
    console.log(resInventaire.id)
    let profil : Profil = {
      email: email,
      nom: username,
      blueTicket: 0,
      greenTicket: 0,
      purpleTicket: 0,
      goldTicket: 0,
      niveaux: 0,
      pepite: 0,
      xp: 0,
      inventaire: resInventaire.id
    }
    const resProfil = await firebase.firestore().collection('Profil').add(profil);
    console.log(resProfil.id)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getProfil(){
    const profilRef = firebase.firestore().collection("Profil");
    // const snapshot = await profilRef.get();
    // snapshot.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data());
    // });
    return profilRef;
}