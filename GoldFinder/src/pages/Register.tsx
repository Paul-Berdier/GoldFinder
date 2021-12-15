import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Register.css';
import { registerUser } from '../firebaseConfig';

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register(){
    const res = await registerUser(email, password);
    console.log(res);
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent>
          <IonInput placeholder="Email" onIonChange={(e: any) => setEmail(e.target.value)}/>
          <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
          <IonButton onClick={register}>Register</IonButton>
          <p>Already have an account ? <Link to="/home/login">click here</Link></p>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Register;