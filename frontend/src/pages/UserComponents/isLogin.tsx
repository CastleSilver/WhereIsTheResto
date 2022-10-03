const isLogin= () => {
    return !!localStorage.getItem("login-kakao");
  };
  
  export default isLogin;