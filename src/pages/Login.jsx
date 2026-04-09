import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(userName);
      console.log(userName, password);
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
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
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
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
