import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler, user }) {
  return (
    <Navbar
      style={{
        background: 'black',
        minHeight: '10vh',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          style={{
            color: '#ecf0f1',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            fontFamily: '"Segoe UI", Arial, sans-serif',
            position: 'relative',
            padding: '5px 15px',
            borderRadius: '4px',
          }}
        >
          ElbrusLingo
        </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-4">
          {user.status === 'logged' && (
            <>
              <Link
                to={'/'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '2px solid #2ecc71',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  ':hover': {
                    background: '#2ecc71',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Главная
              </Link>

              <Button
                onClick={() => logoutHandler()}
                style={{
                  background: 'transparent',
                  border: '2px solid #2ecc71',
                  color: 'white',
                  padding: '8px 25px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    background: '#e74c3c',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Выход
              </Button>
              <Link to={'/lkpage'}>
                <Button
                  style={{
                    background: 'transparent',
                    border: '2px solid #2ecc71',
                    color: 'white',
                    padding: '8px 25px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {user.status === 'logged' && ` Привет, ${user?.data?.name}`}
                </Button>
              </Link>
            </>
          )}
          {user.status === 'guest' && (
            <div className="d-flex gap-4 align-items-center">
              <Link
                to={'/'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '2px solid #2ecc71',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  ':hover': {
                    background: '#2ecc71',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Главная
              </Link>
              <Link
                to={'/signup'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '2px solid #2ecc71',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  ':hover': {
                    background: '#2ecc71',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Регистрация
              </Link>
              <Link
                to={'/login'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '2px solid #2ecc71',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  ':hover': {
                    background: '#2ecc71',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Войти
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
