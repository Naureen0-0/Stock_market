import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../auth/AuthContext";

const initialForm = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    if (queryParams.get("logout") === "1") {
      logout();
      navigate(location.pathname, { replace: true });
    }
  }, [location.pathname, location.search, logout, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser(formData);
      login(response);
      navigate("/dashboard");
    } catch (requestError) {
      setError(requestError.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="auth-shell">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="auth-card auth-card--reverse">
                <div className="auth-card__visual auth-card__visual--login">
                  <p className="auth-card__eyebrow">Welcome back</p>
                  <h2>Pick up where your trading journey left off.</h2>
                  <p className="auth-card__copy">
                    Log in to continue to the dashboard, review positions, and access
                    your trading workflow without losing momentum.
                  </p>
                  <div className="auth-card__highlights">
                    <div>
                      <strong>Live flow</strong>
                      <span>Opens the trading dashboard inside this app</span>
                    </div>
                    <div>
                      <strong>Secure login</strong>
                      <span>JWT-backed auth connected to your backend</span>
                    </div>
                  </div>
                </div>

                <div className="auth-card__form">
                  <p className="auth-form__eyebrow">Welcome back</p>
                  <h1 className="auth-form__title">Log in to your account</h1>
                  <p className="auth-form__subtitle">
                    Use your registered email and password to continue to the
                    dashboard.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="auth-form__group">
                      <label className="auth-form__label" htmlFor="login-email">
                        Email address
                      </label>
                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        className="auth-form__input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="auth-form__group">
                      <label className="auth-form__label" htmlFor="login-password">
                        Password
                      </label>
                      <input
                        id="login-password"
                        type="password"
                        name="password"
                        className="auth-form__input"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    {error ? <div className="alert alert-danger py-2">{error}</div> : null}

                    <button
                      type="submit"
                      className="auth-form__button"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Log in"}
                    </button>
                  </form>

                  <p className="auth-form__switch">
                    New here? <Link to="/signup">Create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
