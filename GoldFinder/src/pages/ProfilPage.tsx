import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useContext, useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Profil } from '../type/Type';
import { AppContext } from '../State';

const ProfilPage: React.FC = () => {

  const { state, dispatch } = useContext(AppContext);
  type ProfilConverterType = firebase.firestore.FirestoreDataConverter<Profil>;
  const ProfilConverter : ProfilConverterType = {
    toFirestore(profil: Profil): firebase.firestore.DocumentData {
      return { email: profil.email, nom: profil.nom, blueTicket: profil.blueTicket,
        greenTicket: profil.greenTicket,
        purpleTicket: profil.purpleTicket,
        goldTicket: profil.goldTicket,
        niveaux: profil.niveaux,
        pepite: profil.pepite,
        xp: profil.xp,
        inventaire: profil.inventaire, };
    },
    fromFirestore: function (
      snapshot: firebase.firestore.QueryDocumentSnapshot, 
      options: firebase.firestore.SnapshotOptions
      ): Profil {
        const data = snapshot.data(options);
        let profil : Profil = {
          email: data.email,
          nom: data.nom,
          blueTicket: data.blueTicket,
          greenTicket: data.greenTicket,
          purpleTicket: data.purpleTicket,
          goldTicket: data.goldTicket,
          niveaux: data.niveaux,
          pepite: data.pepite,
          xp: data.xp,
          inventaire: data.inventaire
        } 
        return profil;
    }
  }
  const history = useHistory();
  async function initprofil  () {
    const profilSnap = await firebase.firestore().collection("Profil").where('email', '==', state.email).withConverter(ProfilConverter).get();
    dispatch({ type: "setProfil", profil: profilSnap.docs[0].data() });
  }

  useEffect(() => {
    initprofil();
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
          <IonGrid fixed>
            <IonRow>
              <IonCol size='12'>
                <IonItem >
                  <IonTitle>
                    {state.profil?.nom}
                  </IonTitle>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size='12'>
                <IonItem >
                  <p>Le mineur</p>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
      <IonFooter translate='yes'>
        <IonGrid fixed>
          <IonRow>
            <IonCol size='4' offset='' class="ion-text-center">
              <IonButton className="footerBtn" shape="round" onClick={ () => history.push(`home/terrain`) }>
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

export default ProfilPage;


