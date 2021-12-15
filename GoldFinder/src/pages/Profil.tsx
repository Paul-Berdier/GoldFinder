import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonItemSliding, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useCollection} from "react-firebase-hooks/firestore";
import React, { useState } from 'react';
import firebaseProfil from 'firebase';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{
  email: string;
}> {}

const Profil: React.FC<Props> = ({match, history}) => {

  const email =  match.params.email;
  console.log("Profil",match.params);
  const [value, loading, error] = useCollection(
    firebaseProfil.firestore().collection("Profil").where('email', '==', email),
    {
      snapshotListenOptions:{includeMetadataChanges:true}
    }
  );

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonList id='list'>
            {value && value.docs.map(doc =>{
                return(
                  !loading && (
                    <IonItemSliding key={doc.id}>
                      <IonItem>
                        <IonText >
                            <div>
                                {doc.data().nom}
                            </div>
                        </IonText>
                      </IonItem>
                    </IonItemSliding>
                  )
                );
              })
            }
          </IonList>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Profil;
