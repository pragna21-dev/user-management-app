import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/users", { replace: true });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email });
      toast.success("Login Successful");
      console.log(email, password);
      navigate("/users", { replace: true });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="p-4">
              <h3 className="text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div> */}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <Button variant="primary" type="submit" className="w-100 my-4">
                  Submit
                </Button>
                {/* <ToastContainer autoClose={6000} /> */}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
