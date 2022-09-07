function Login() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div>
      <h1>Login</h1>
      <h1>
        <a href={KAKAO_AUTH_URL}>KaKao Login</a>
      </h1>
    </div>
  );
}
export default Login;
