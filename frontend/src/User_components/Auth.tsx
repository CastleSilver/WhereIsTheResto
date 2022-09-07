import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Auth() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN";

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  return null;
}
export default Auth;
