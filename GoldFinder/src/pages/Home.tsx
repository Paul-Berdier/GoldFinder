import {IonRouterOutlet } from '@ionic/react';
import { Route, RouteComponentProps } from 'react-router-dom';
import './Home.css';
import Login from './Login';
import Profil from './ProfilPage';
import Shop from './Shop';
import Terrain from './Terrain';

const Home: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={Login} />
      <Route exact path={`${match.url}/shop`} component={Shop} />
      <Route path={`${match.url}/profil`} component={Profil} />
      <Route path={`${match.url}/terrain`} component={Terrain} />
    </IonRouterOutlet>
  );
};

export default Home;
