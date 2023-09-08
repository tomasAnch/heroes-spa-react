import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { AppRouter } from '../../router/AppRouter'

describe('Pruebas en <AppRouter />', () => {
  
  test('Debe mostrar el login si no está autenticado', () => {

    const contextValue = {
      logged: false,
    }

    render(
      <MemoryRouter initialEntries={['/marvel']} >
        <AuthContext.Provider value={ contextValue } >
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
      
    expect( screen.getAllByText('Login').length ).toBe( 1 )
    
  })

  test('Debe mostrar el componente de Marvel si está autenticado', () => {
    
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'John Carlos',
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual( 1 )

  })
  
  

})

  
  
