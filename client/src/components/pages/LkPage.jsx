import { Container, Card, CardContent, LinearProgress, Box } from '@mui/material';
import { List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';
import axiosInstance from '../../API/axiosInstance';

export default function LkPage({ user }) {
  const progress = user.data.progress || 40;
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/lang')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get('/category')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  const categoryMap = categories.map((el) => el);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <Card sx={{ width: '100%', textAlign: 'center', p: 3, boxShadow: 6 }}>
        <CardContent>
          <h2
            variant="h5"
            component="p"
            sx={{ mt: 2, fontWeight: 'bold', color: '#2c3e50' }}
          >
            Твой прогресс
          </h2>

          <List sx={{ mt: 2 }}>
            {cards.map((el) => (
              <ListItem
                key={el.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p variant="body1" color="text.secondary">
                    Ваш прогресс в языке: {el.name}
                  </p>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <div variant="body2" color="text.secondary">
                    Категории:
                    {categories.map((category) => (
                      <div key={category.id}>
                        {category.name}
                        <LinearProgress
                          variant="determinate"
                          value={progress}
                          sx={{
                            width: '100%',
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': { backgroundColor: '#2ecc71' },
                          }}
                        />
                        <div variant="body1" color="text.secondary">
                          {progress}%
                        </div>
                      </div>
                    ))}
                  </div>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
