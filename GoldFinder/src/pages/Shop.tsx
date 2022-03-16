import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../State';

const Shop: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
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

          <IonCard>
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
                      <IonText>Grenade ligne</IonText>
                      <IonText>Explose une ligne de 3 case</IonText>
                      <IonButton>Acheter</IonButton>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
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
