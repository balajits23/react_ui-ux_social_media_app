import React, { useContext } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            ipsum!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
