import { Container, Card, CardContent, Typography, LinearProgress } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import axiosInstance from '../../API/axiosInstance';

export default function LkPage({ user }) {
  const progress = user.data.progress || 50;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Card sx={{ width: '100%', textAlign: 'center', p: 3, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mt: 2 }}>
            Привет, {user.data.name}!
          </Typography>

          <List sx={{ mt: 2 }}>
            {cards.map((el) => (
              <ListItem key={el.id}>
                <ListItemText
                  primary={`Ваш прогресс в категории: ${el.title}: ${progress}%`}
                />
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ width: '100%', height: 10, borderRadius: 5 }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
