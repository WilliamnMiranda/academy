import React from 'react';
import GlobalStyle from './style';
import Routes from './routes'
import Login from './pages/access'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from './store/slices/userSlice'
import { RootState } from './types/RootState';
import userServices from './services/user';
function App() {
  const auth: any = useSelector<RootState>((state) => state.user);
  const dispatch = useDispatch();
  const [loading,setLoading] = React.useState<Boolean>(false)
  const authenticateUser = React.useCallback(async () => {
    setLoading(true)
    const token: any = localStorage.getItem('token')
    if (token) {
      const user = await userServices.auth(token)
      setLoading(false)
      if (user) {
        dispatch(authenticate({user,token}))
      }
    }
    setLoading(false)
  },[dispatch])

  React.useEffect(() => {
    authenticateUser()
  }, [authenticateUser])
  return (
    <>
      <GlobalStyle />
      {auth.token !== '' && auth.authenticate ? <Routes /> : <Login />}
    </>
  );
}

export default App;
