import AUTH from './actionTypes';

initialState = {
  processing: false,
  data: {
    photo: null,
    firstName: null,
    lastName: null
  },
  accessToken: null,
  isLoggedIn: false
}

export default AuthReducer = (state = initialState, action) =>{
  switch(action.type){
    case AUTH.LOGIN_FB :{
      let tempState = JSON.parse(JSON.stringify(state));
      tempState.data.photo = action.payload.photo;
      tempState.data.firstName = action.payload.firstName;
      tempState.data.lastName = action.payload.lastName;
      tempState.accessToken = action.payload.accessToken;
      tempState.isLoggedIn = true;
      tempState.processing = false;

      return tempState;
    }

    case AUTH.LOGIN_GOOGLE :{
      let tempState = JSON.parse(JSON.stringify(state));
      tempState.data.photo = action.payload.photo;
      tempState.data.firstName = action.payload.firstName;
      tempState.data.lastName = action.payload.lastName;
      tempState.accessToken = action.payload.accessToken;
      tempState.isLoggedIn = true;
      tempState.processing = false;

      return tempState;
    }

    case AUTH.LOGOUT :{
      let tempState = JSON.parse(JSON.stringify(state));
      tempState.isLoggedIn = false;
      tempState.processing = false;
    }

    default: return state;
  }
}