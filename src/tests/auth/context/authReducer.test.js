import { types } from '../../../auth/types/types'
import { authReducer } from "../../../auth/context/authReducer"

describe('Pruebas en authReducer', () => {

  const initialState = {
    logged: false,
  }
  
  test('Debe retornar el estado por defecto', () => {
    
    const state = authReducer( initialState, {} )

    expect( state ).toEqual( initialState )

  })

  test('Debe de (login) llamar el login autenticar y establecer el user', () => {
    
    const action = {
      type: types.login,
      payload: {
        name: 'John',
        id: '123'
      }
    }

    const state = authReducer( initialState, action )

    expect( state ).toEqual({
      logged: true,
      user: action.payload
    })

  })

  test('Debe de (logout) borrar el name del usuario y logged en false', () => {
    
    const state = {
      logged: true,
      user: { id: '123', name: 'John' }
    }

    const action = {
      type: types.logout,
    }

    const newState = authReducer( state, action )

    expect( newState ).toEqual({ logged: false })

  })
  
  
  

})
