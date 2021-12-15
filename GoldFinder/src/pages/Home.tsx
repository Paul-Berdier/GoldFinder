import {IonRouterOutlet } from '@ionic/react';
import { Route, RouteComponentProps } from 'react-router-dom';
import './Home.css';
import Login from './Login';
import Profil from './Profil';
import Register from './Register';

const Home: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={Login} />
      <Route exact path={`${match.url}/register`} component={Register} />
      <Route exact path={`${match.url}/login`} component={Login} />
      {/* <Route exact path={`${match.url}/shop/:email`} component={Shop} /> */}
      <Route path={`${match.url}/profil/:email`} component={Profil} />
    </IonRouterOutlet>
  );
};

export default Home;
