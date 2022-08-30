import { HistoryRouterProps, RouteMatch } from 'react-router-dom';
import userServices from '../services/user';

const authenticateUser = async (navigate : Function) => {
  const token: any = localStorage.getItem('token')
  if (token) {
    const user = await userServices.auth(token)
    if (!user) {
      navigate('/access')
    }
  }
}


export default authenticateUser