import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../State';
import { Objet } from '../type/Type';
import firebase from 'firebase';

const Shop: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const [objets, setObjets] = useState(Array<Objet>());
  //let objets: Array<Objet>;
  type ObjetConverterType = firebase.firestore.FirestoreDataConverter<Objet>;
  const ProfilConverter : ObjetConverterType = {
    toFirestore(objet: Objet): firebase.firestore.DocumentData {
      return { 
        description: objet.description,
        img: objet.img,
        nom: objet.nom,
        prix: objet.prix
       };
    },
    fromFirestore: function (
      snapshot: firebase.firestore.QueryDocumentSnapshot, 
      options: firebase.firestore.SnapshotOptions
      ): Objet {
        const data = snapshot.data(options);
        let profil : Objet = {
          description: data.description,
          img: data.img,
          nom: data.nom,
          prix: data.prix
        } 
        return profil;
    }
  }

  const removeElement = () => {
    // first we make a copy of the array
   const objetsCopy = [...objets];

   //we remove the element from the copy
   for (let index = 0; index < objetsCopy.length; index++) {
    objetsCopy.splice(index,1);
     
   }
   //set the new state
   setObjets(objetsCopy);
}

  async function initObjet() {
    removeElement();
    const objetSnap = await firebase.firestore().collection("Objets").withConverter(ProfilConverter).get();
    // console.log(objetSnap.docs[0].data());
    console.log(objetSnap.docs);
    //let objectsTmp: Objet[];
    objetSnap.docs.map(element => (
      //setObjets([...objets, element.data()])
      objets.push(element.data())
    ));
    //objets = await objectsTmp;
    //dispatch({ type: "setProfil", profil: objetSnap.docs[0].data() });
    console.log(objets);
  }

  useEffect(() => {
    initObjet();
    console.log(objets);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonBackButton />
          </IonButtons> */}
          <IonTitle><div className="niveaux">{state.profil?.niveaux}</div> <p className='xp'> {state.profil?.xp} xp</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonCard>
            <IonCardContent >
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem class='shop_level' lines={'none'} >
                      <IonTitle class='shop_title_level' >Niveau <br/> {state.profil?.niveaux}</IonTitle>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonRow>
                      <IonText>Nombre de coups : 27</IonText>
                      <IonText>Nombre de coups : 27</IonText>
                      <IonButton>Acheter</IonButton>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <IonList>
            {
              objets.map(elem => (
                <IonCard key={elem.nom}>
                  <IonCardContent >
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonItem class='shop_level' lines={'none'} >
                            <IonTitle class='' >Img item</IonTitle>
                          </IonItem>
                        </IonCol>
                        <IonCol>
                          <IonRow>
                            <IonText>{elem.nom}</IonText>
                            <IonText>{elem.description}</IonText>
                            <IonButton>Acheter</IonButton>
                          </IonRow>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              ))
            }

            
          </IonList>
          
        </IonContent>
      </IonContent>
      <IonFooter translate='yes'>
        <IonGrid fixed>
          <IonRow>
            <IonCol size='4' offset='' class="ion-text-center">
              <IonButton className="footerBtn" shape="round" onClick={ () => history.push(`/home/terrain`) }>
                Terrains
              </IonButton>
            </IonCol>
            <IonCol size='4' class="ion-text-center">
              <IonButton className="footerBtn" shape="round" onClick={ () => history.push(`/home/shop`) }>
                Magasin
              </IonButton>
            </IonCol>
            <IonCol size='4' class="ion-text-center">
              <IonButton className="footerBtn" shape="round" onClick={ () => history.push(`/home/profil`) }>
                Profil
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Shop;
