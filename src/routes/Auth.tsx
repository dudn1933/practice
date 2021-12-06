import { authService } from "firebase";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
        let data;
        if (newAccount) {
          // create account
          data = await createUserWithEmailAndPassword(authService, email, password);
        } else {
          // log in
          data = await signInWithEmailAndPassword(authService, email, password);
        }
        console.log(data)
    } catch (Ferror:any) {
        setError(Ferror.message);
        alert(error)
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
        />
      </form>
      <div>
        <button>Countinue with Goggle</button>
        <button>Countinue with GitHub</button>
      </div>
    </>
  );
};
export default Auth;
