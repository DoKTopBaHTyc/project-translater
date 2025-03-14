import React from 'react';
import { Link } from 'react-router-dom'; // Если используете React Router
import { Button, Typography, Box, Container } from '@mui/material'; // Используем Material-UI для стилей

export default function NotFoundPage() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
         width:'100wh',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: '2rem',
          fontWeight: 'medium',
          color: 'white',
          marginBottom: '2rem',
        }}
      >
        Страница не найдена
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          color: 'white',
          marginBottom: '3rem',
        }}
      >
        Извините, запрашиваемая страница не существует.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          padding: '1rem 2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        Вернуться на главную
      </Button>
    </Container>
  );
}
