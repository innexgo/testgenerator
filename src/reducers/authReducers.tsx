//main reducer for authentication: specifies how state changes in response to actions (authenticate and unauthenticate)

//imports
import { IAuthenticate, IUnauthenticate } from "../actions/authActions";
import { AUTHENTICATE, UNAUTHENTICATE } from "../constants";
import { CurrentState } from "../types";

export default function currentReducer(
  state: CurrentState = {
    uuid: null,
    isAuthenticated: null,
  }, //state parameter stores unique user id and authentication status
  action: IAuthenticate | IUnauthenticate, //which action is being reduced
): CurrentState {
  switch (action.type) {
    case AUTHENTICATE: //log in
      return {
        ...state,
        uuid: "placeholder-uuid",
        isAuthenticated: true,
      };
    case UNAUTHENTICATE: //log out
      return {
        uuid: null,
        isAuthenticated: false 
      }
    }
    return state;
  }
