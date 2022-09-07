import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>로그인</h1>
      <button>
        <Link to="/login">Kakao Login</Link>
      </button>
    </div>
  );
}

export default Home;
