import {
  Container,
  Card,
  CardContent,
  LinearProgress,
  Box,
  TextField,
} from '@mui/material';
import { List, ListItem, Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import axiosInstance from '../../API/axiosInstance';

export default function LkPage({ user }) {
  const [progress, setProgress] = useState([]);
  console.log('🚀 ~ LkPage ~ progress:', progress);
  const [lang, setLangs] = useState([]);
  console.log('🚀 ~ LkPage ~ lang:', lang);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState('');

  useEffect(() => {
    axiosInstance
      .post('/category/like/count', { userId: user.data.id })
      .then((response) => {
        setProgress(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [user.data.id]);

  useEffect(() => {
    axiosInstance
      .get('/lang')
      .then((response) => {
        setLangs(response.data);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const categ = await axiosInstance
      .post('/category/name', { name: data.category })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
    const curLang = lang.find((el) => data.lang === el.name);

    axiosInstance
      .post('/word/add', {
        name: data.word,
        userId: user.data.id,
        categoryId: categ.data.id,
        languageId: curLang.id,
      })
      .then(({ data }) => {
        setAdd(data.message || 'Успешно добавлено!');
      })
      .catch((error) => {
        console.error('Ошибка при добавлении:', error);
      });
  };

  const handlclear = () => {
    localStorage.clear()
    setProgress([])
  }

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
        <Button
          onClick={handleOpen}
          style={{ backgroundColor: 'black', border: 'none', color: 'white' }}
        >
          Добавить новую карточку
        </Button>
        <Button
          onClick={handlclear}
          style={{ backgroundColor: 'black', border: 'none', color: 'white', marginLeft:'20px' }}
        >
          Сбросить прогресс
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'white',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <form onSubmit={addHandler}>
              <TextField
                fullWidth
                label="Язык"
                variant="outlined"
                name="lang"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Категория"
                variant="outlined"
                name="category"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Слово"
                variant="outlined"
                name="word"
                sx={{ mb: 2 }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Добавить
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                  Отмена
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>

        <CardContent>
          <h2
            variant="h5"
            component="p"
            sx={{ mt: 2, fontWeight: 'bold', color: '#2c3e50' }}
          >
            Твой прогресс
          </h2>

          <List sx={{ mt: 2 }}>
            {lang.map((el) => (
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
                    {categories.map((category) => {
                      const categoryProgress = progress.find(
                        (prog) => prog.id === category.id,
                      );
                      const progressValue = categoryProgress
                        ? parseInt(categoryProgress.count)
                        : 0;

                      return (
                        <div key={category.id}>
                          {category.name}
                          <LinearProgress
                            variant="determinate"
                            value={progressValue}
                            sx={{
                              width: '100%',
                              height: 10,
                              borderRadius: 5,
                              backgroundColor: '#e0e0e0',
                              '& .MuiLinearProgress-bar': { backgroundColor: '#2ecc71' },
                            }}
                          />
                          <div variant="body1" color="text.secondary">
                            Прогресс: {progressValue}%
                          </div>
                        </div>
                      );
                    })}
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
