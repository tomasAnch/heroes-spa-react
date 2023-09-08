import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

// Define el estado inicial de la aplicación en un objeto initialState. En este caso, el objeto tiene una propiedad llamada logged que se inicializa en false.
const initialState = {
  logged: false,
}

// Define una función init que se utiliza para inicializar el estado de la aplicación. La función lee el objeto del usuario del almacenamiento local (localStorage) del navegador y devuelve un objeto con dos propiedades:
// logged: una propiedad que indica si el usuario está autenticado o no. En este caso, se utiliza el operador !! para convertir el valor de user a un booleano. Si user existe (no es null, undefined, ni una cadena vacía), entonces !!user devuelve true. De lo contrario, devuelve false.
// user: una propiedad que contiene el objeto del usuario que se ha guardado en el almacenamiento local.
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState, init )

  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }
    const action = {
      type: types.login,
      payload: user
    }
    
    localStorage.setItem('user', JSON.stringify( user ))

    dispatch(action)
  }

  const logout = () => {

    localStorage.removeItem('user')

    const action = {
      type: types.logout,
    }

    dispatch( action )
  }

  return(
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}