import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Key, useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import socket from '../socket';
import { AppContext } from '../State';
import socketIOClient from "socket.io-client";
import produce from "immer";
import {Map} from "../back_script/Map.js";
import { GreenTicket, Price } from '../back_script/Price';

const BASE_URL = "http://localhost:4001"

const initialMessagesState = {
	general: [],
	random: [],
	jokes: [],
	javascript: []
}

const Terrain: React.FC = () => {
    //const socket = socketIOClient(BASE_URL)
    const history = useHistory();
    const { state, dispatch } = useContext(AppContext);

    //TEST MULTY
    const [username, setUsername] = useState("");
    const [connected, setConnected] = useState(false);
    const [currentChat, setCurrentChat] = useState({isChannel:true, chatName:"general", receiverId: ""});
    const [connectedRooms, setConnectedRooms] = useState(["general"]);
    const [allUsers, setAllUsers] = useState([]);
    const [messages, setMessages] = useState(initialMessagesState);
    const [message, setMessage] = useState("");
    const socketRef = useRef();
    
    //Pour les terrains
    // const [username, setUsername] = useState(state.profil?.nom);
    // const [connected, setConnected] = useState(false);
    // const [connectedRooms, setConnectedRooms] = useState(); // game1 game2
    // const [allUsers, setAllUsers] = useState([]);

    function handleMessageChange(e: any){
      setMessage(e.target.value);
    }

    function sendMessage(){
      const payload = {
				content: message,
        to: currentChat.isChannel ? currentChat.chatName : currentChat.receiverId,
        sender: username,
				chatName: currentChat.chatName,
				isChannel: currentChat.isChannel,
			};
      // socketRef.current.emit("send message",payload);
      // const newMessage = produce(messages, Draft => {
      //   Draft.general.push([
      //     sender: username,
      //     content: message
      //   ]);
      // });
      // setMessages(newMessage);
    }

    let map = new Map("tezst",5,5,2);
    map.setGrillePrice(new GreenTicket);
    // let grille = new Array();
    // for (let index = 0; index < 2; index++) {
    //   for (var i=0; i<2; i++) {
    //     if (!grille[index]) grille[index] = new Array();
    //     for (var j=0; j<3; j++) {
    //       if (!grille[index][i]) grille[index][i] = new Array(); 
    //       grille[index][i][j] = "Z="+index+" X="+i+" Y="+j;
    //     }
    //   }
    // }
    

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
              
              console.log(map.grille);
              console.log(map.grille[1][2][2]);
              
              //console.log(map.grille[1]);
              // console.log(grille);
                } }>
                enter game 1
            </IonButton>
            <IonContent>
              
                {
                  map.grille.map(z => (
                    <IonGrid>
                      {
                      z.map((y: any) => (
                        <IonRow>
                          {
                          y.map((y: any) => (
                            
                            <IonCol>
                              {y}
                            </IonCol>
                          ))
                          }
                        </IonRow>
                      ))
                      }
                    </IonGrid>
                  ))
                }
              
            </IonContent>
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
