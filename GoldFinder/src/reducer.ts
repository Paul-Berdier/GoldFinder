import { Profil } from './type/Type';
  
  export const initialState = {
      email: "",
      profil: {
        email: "",
        nom: "",
        blueTicket: "",
        greenTicket: "",
        purpleTicket: "",
        goldTicket: "",
        niveaux: "",
        pepite: "",
        xp: "",
        inventaire: ""
      },
  };
  
  const reducer = (state: any, action: { type: any; profil: any; email: any; }) => {
    switch (action.type) {
      case "setProfil": {
        return { ...state, profil: action.profil };
      }
      case "setEmail": {
        return { ...state, email: action.email };
      }
    }
    return state;
  };
  
  export default reducer;