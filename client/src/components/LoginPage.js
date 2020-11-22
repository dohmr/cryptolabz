import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../util/authContext";

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
  },
  submitButton: {
    marginTop: "1em",
  },
};

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [isPending, setIsPending] = useState(false);
  const passLeast = () => toast("Password must have at least 8 characters.", {position: "top-center",});
  const userLeast = () => toast("Username must contain at least 6 characters.", {position: "top-center",});
  const userMax = () => toast("Username must not contain more than 16 characters.", {position: "top-center",});
  const errorToast = () => toast("An error occurred.", {position: "top-center",});

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
      <h1>Login</h1>
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
        <button type="submit" style={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}
export default LoginPage;
