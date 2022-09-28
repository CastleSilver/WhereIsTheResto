import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


interface PrivateRouteProps {
  children ?: ReactElement;
  authentication : boolean;
}


export default function PrivateRoute({authentication}:PrivateRouteProps):React.ReactElement|null {
  const isAuthenticated = localStorage.getItem("login-kakao")

  if(authentication) {
    // 인증이 반드시 필요한 페이지
  
    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return (isAuthenticated === null || isAuthenticated === 'true') ? <Navigate to="/"/> : <Outlet/>;

  } else {
    // 인증이 반드시 필요 없는 페이지

    // 인증을 안햇을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
    return (isAuthenticated === null || isAuthenticated === 'false') ? <Outlet/> : <Navigate to='/'/>;  
  }
}