import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from './API/axiosInstance';
import { Routes } from 'react-router';
import { Route } from 'react-router';

import Layout from './HOCs/Layout';
import ProtectedRouter from './HOCs/ProtectedRouter';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';
import CategoryPage from './components/pages/CategoryPage';

import LkPage from './components/pages/LkPage';
import WordsPage from './components/pages/WordsPage';

function App() {
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    if (user.status === 'logging') {
      axiosInstance
        .get('/tokens/refresh')
        .then(({ data }) => {
          setUser({ status: 'logged', data: data.user });
          setAccessToken(data.accessToken);
        })
        .catch(() => {
          setUser({ status: 'guest', data: null });
          setAccessToken('');
        });
    }
  }, [user.status]);

  const logoutHandler = () => {
    axiosInstance
      .get('/auth/logout')
      .then(() => setUser({ status: 'guest', data: null }));
    setAccessToken('');
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert('Please fill all fields');
    }
    axiosInstance.post('/auth/signup', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Missing required fields');
    }
    const res = await axiosInstance.post('/auth/login', formData);
    if (res.status === 200) {
      setUser({ status: 'logged', data: res.data.user });
      setAccessToken(res.data.accessToken);
    }
  };

  if (user.status === 'logging') {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/language/:id/categories" element={<CategoryPage />} />
        <Route
          path="/language/:languageId/categories/:categoryId/words"
          element={<WordsPage/>}
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo="/">
              <SignUpPage signUpHandler={signUpHandler} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo="/">
              <LoginPage loginHandler={loginHandler} />
            </ProtectedRouter>
          }
        />
        <Route path="/language/:id" element={<CategoryPage />} />
        <Route path="/lkpage" element={<LkPage user={user} />} />
      </Route>
    </Routes>
  );
}

export default App;
