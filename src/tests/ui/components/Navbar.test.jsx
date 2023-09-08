import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from '../../../auth'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { Navbar } from '../../../ui/components/Navbar'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('Pruebas en <Navbar />', () => {

  const contextValue = {
    logged: true,
    user: {
      name: 'John Carlos'
    },
    logout: jest.fn()
  }

  beforeEach( () => jest.clearAllMocks() )
  
  test('Debe mostrar el nombre del usuario', () => {
    
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('John Carlos')).toBeTruthy()

  })

  test('Debe llamar el logout y navigate cuando se hace click en el botón', () => {
    
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    
    const logoutBtn = screen.getByRole('button', { name: 'Logout' })
    fireEvent.click( logoutBtn )

    expect( contextValue.logout ).toHaveBeenCalled()
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true})

  })
  
  

})
