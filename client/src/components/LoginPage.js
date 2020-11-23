import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../util/authContext";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  wrapper: {
    marginTop: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "12em",
    marginLeft: "2rem"
  },
  submitButton: {
    marginTop: "1em",
  },
  loginHead: {
    marginLeft: "2rem"
  }
};

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [isPending, setIsPending] = useState(false);
  const passLeast = () => toast.error("Password must have at least 8 characters.", {position: "top-center",});
  const userLeast = () => toast.error("Username must contain at least 6 characters.", {position: "top-center",});
  const userMax = () => toast.error("Username must not contain more than 16 characters.", {position: "top-center",});
  const errorToast = () => toast.error("An error occurred.", {position: "top-center",});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formState;
    if (password.length < 8) {
      passLeast();
    } else if (username.length < 6) {
      userLeast();
    } else if (username.length > 16) {
      userMax();
    } else {
      setIsPending(true);
      login({ username, password })
        .then(() => history.push("/coins"))
        .catch((error) => {
          console.log(error);
          errorToast();
          setIsPending(false);
        });
    }
  };
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.loginHead}>Login</h1>
      <div>{isPending && "Loading..."}</div>{" "}
      <form disabled={isPending} style={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <Button variant="primary" type="submit" style={styles.submitButton} onClick={handleSubmit}>
          Submit
        </Button>{' '}
        <ToastContainer />
      </form>
    </div>
  );
}
export default LoginPage;
