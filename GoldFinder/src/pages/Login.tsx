import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Login from '../components/Login';
// import './Login.css';
import { loginUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  async function login(){
    const res = await loginUser(email, password)
    console.log(`${res ? 'Login success' : 'Login failed'}`)
    history.push("/home");
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
          <IonInput placeholder="email" onIonChange={(e: any) => setEmail(e.target.value)}/>
          <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
          <IonButton onClick={login}>Login</IonButton>
          <p>Don't have an account ? <Link to="/register">click here</Link></p>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;