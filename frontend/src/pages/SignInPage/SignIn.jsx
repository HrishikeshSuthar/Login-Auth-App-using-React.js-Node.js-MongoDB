import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    try {
      const response = await axios
        .post("http://localhost:5000/user/add", {
          name: name,
          email: email,
          password: password,
        })
        .then(() => {
          navigate("/login");
        });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  <span className="text-primary">Sign-In Page</span>
                </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label className="form-label" for="form3Example1">
                              Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1"
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example3">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        onClick={handleAdd}
                      >
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
