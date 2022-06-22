import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// validasi dengan regex
/*  nama hanya dapat menampung huruf besar dan kecil, minimal 4 karakter maksimal 100 karakter
    username dapat menampung semua karakter, minimal 3 karakter maksimal 10 karakter 
    nomor telepon dapat menampung +62, 0, dan 62 
    password minimum 8 karakter, terdiri dari satu huruf dan satu angka
*/
const NAME_REGEX = /^[a-zA-Z\s'-]{4,100}$/;
const USERNAME_REGEX = /^[a-z0-9_-]{3,10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Register = () => {
  const userReff = useRef();

  // useState name
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  // useState username
  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // useState email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // useState password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // useEffect saat component load
  useEffect(() => {
    userReff.current.focus();
  }, []);

  // useEffect saat name, username, email, password berubah
  useEffect(() => {
    const RESULT = NAME_REGEX.test(name);
    console.log(RESULT);
    console.log(name);
    setValidName(RESULT);
  }, [name]);

  useEffect(() => {
    const RESULT = USERNAME_REGEX.test(user);
    console.log(RESULT);
    console.log(user);
    setValidUser(RESULT);
  }, [user]);

  useEffect(() => {
    const RESULT = EMAIL_REGEX.test(email);
    console.log(RESULT);
    console.log(email);
    setValidEmail(RESULT);
  }, [email]);

  useEffect(() => {
    const RESULT = PASSWORD_REGEX.test(password);
    console.log(RESULT);
    console.log(password);
    setValidPassword(RESULT);
  }, [password]);

  // handle untuk submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = NAME_REGEX.test(name);
    const v2 = USERNAME_REGEX.test(user);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PASSWORD_REGEX.test(password);
    console.log(v1, v2, v3, v4);

    if (!v1 || !v2 || !v3 || !v4) {
      alert("Form tidak valid");
    }
  };

  return (
    <div>
      <h4 className="text-center mb-4">Register To Create Your Account</h4>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label htmlFor="name" className="form-label">
            Fullname
          </label>
          <input
            type="text"
            id="name"
            ref={userReff}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="nameError"
            placeholder="Enter Fullname"
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            className="form-control"
          />
          <p
            id="nameError"
            className={
              nameFocus && name && !validName ? "instruction" : "offscreen"
            }
          >
            nama hanya dapat menampung huruf besar dan kecil, minimal 4 karakter
            maksimal 100 karakter
          </p>
        </div>
        <div class="col-md-6">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            ref={userReff}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validUser ? "false" : "true"}
            aria-describedby="usernameError"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            className="form-control"
          />
          <p
            id="usernameError"
            className={
              userFocus && user && !validUser ? "instruction" : "offscreen"
            }
          >
            username dapat menampung semua karakter kecuali huruf besar, minimal
            3 karakter maksimal 10 karakter
          </p>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            ref={userReff}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailError"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="form-control"
          />
          <p
            id="emailError"
            className={
              emailFocus && email && !validEmail ? "instruction" : "offscreen"
            }
          >
            Email tidak valid. Cek kembali Email yang anda masukan
          </p>
        </div>

        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="passwordError"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className="form-control"
          />
          <p
            id="passwordError"
            className={
              passwordFocus && password && !validPassword
                ? "instruction"
                : "offscreen"
            }
          >
            password minimum 8 karakter, terdiri dari satu huruf dan satu angka
          </p>
        </div>

        <div class="col-12 my-4 text-center">
          <button type="submit" class="btn-submit">
            Register
          </button>
        </div>

        <p className="text-center">
          Already have an account ?&nbsp;
          <Link to="/login" style={{ color: "#8142D0" }}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
