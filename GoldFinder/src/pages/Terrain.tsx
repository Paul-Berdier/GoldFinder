import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import socket from '../socket';
import { AppContext } from '../State';
import socketIOClient from "socket.io-client"

const BASE_URL = "http://localhost:4001"

const Terrain: React.FC = () => {
    const [sensor, setSensor] = useState<number[]>([])
    const socket = socketIOClient(BASE_URL)
    const history = useHistory();
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
      
    }, [])
  
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
            <IonButton className="" shape="round" onClick={ () => {
                } }>
                enter game 1
            </IonButton>
            {/* <IonButton className="" shape="round" onClick={ () =>  }>
                enter game 2
            </IonButton> */}
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

export default Terrain;
