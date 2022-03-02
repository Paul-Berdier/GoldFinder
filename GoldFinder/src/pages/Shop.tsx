import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../State';

const Shop: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  // console.log(state);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle><div className="niveaux">{state.profil?.niveaux}</div> <p className='xp'> {state.profil?.xp} xp</p></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          
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

export default Shop;
