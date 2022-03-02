import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../State';

const Login: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [password, setPassword] = useState('')
  const history = useHistory();

  async function login(){
    const res = await loginUser(state.email, password)
    console.log(`${res ? 'Login success' : 'Login failed'}`)
    console.log(state.email);
    if (res){
      history.push(`/home/profil/${state.email}`)
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonInput placeholder="email" onIonChange={(e: any) => dispatch({ type: "setEmail", email: e.target.value })}/>
          <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
          <IonButton onClick={login}>Login</IonButton>
          <p>Don't have an account ? <Link to="/register">click here</Link></p>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;