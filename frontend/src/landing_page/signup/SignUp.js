import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { signupUser } from "../../api/auth";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

function SignUp() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await signupUser(formData);
      setSuccess(response.message || "Account created successfully. Please log in.");
      setFormData(initialForm);
      setTimeout(() => navigate("/login"), 1200);
    } catch (requestError) {
      setError(requestError.message || "Signup failed. Please try again.");
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
              <div className="auth-card">
                <div className="auth-card__visual auth-card__visual--signup">
                  <p className="auth-card__eyebrow">Start investing</p>
                  <h2>Build your portfolio with a cleaner onboarding flow.</h2>
                  <p className="auth-card__copy">
                    Create your account to access trading, portfolio analytics, and the
                    full Stock_Market ecosystem from one place.
                  </p>
                  <div className="auth-card__highlights">
                    <div>
                      <strong>0 Rs</strong>
                      <span>Account opening setup in this demo</span>
                    </div>
                    <div>
                      <strong>3 steps</strong>
                      <span>Signup, login, and access your dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="auth-card__form">
                  <p className="auth-form__eyebrow">Create account</p>
                  <h1 className="auth-form__title">Open your Stock_Market account</h1>
                  <p className="auth-form__subtitle">
                    Get started with a sharper signup experience and continue to your
                    dashboard after login.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="auth-form__group">
                      <label className="auth-form__label" htmlFor="signup-name">
                        Full name
                      </label>
                      <input
                        id="signup-name"
                        type="text"
                        name="name"
                        className="auth-form__input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="auth-form__group">
                      <label className="auth-form__label" htmlFor="signup-email">
                        Email address
                      </label>
                      <input
                        id="signup-email"
                        type="email"
                        name="email"
                        className="auth-form__input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="auth-form__group">
                      <label className="auth-form__label" htmlFor="signup-password">
                        Password
                      </label>
                      <input
                        id="signup-password"
                        type="password"
                        name="password"
                        className="auth-form__input"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    {error ? <div className="alert alert-danger py-2">{error}</div> : null}
                    {success ? <div className="alert alert-success py-2">{success}</div> : null}

                    <button
                      type="submit"
                      className="auth-form__button"
                      disabled={loading}
                    >
                      {loading ? "Creating account..." : "Create account"}
                    </button>
                  </form>

                  <p className="auth-form__switch">
                    Already have an account? <Link to="/login">Log in</Link>
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

export default SignUp;
