import React, { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your subscription API endpoint
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("SUCCESS");
        setEmail("");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    }
  };

  return (
    <div className={styles.signup}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="signup-email" className={styles.label}>
          Subscribe to our newsletter
        </label>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </div>
      </form>
      {status === "SUCCESS" && (
        <p className={styles.success}>Thank you for subscribing!</p>
      )}
      {status === "ERROR" && (
        <p className={styles.error}>Oops! Something went wrong.</p>
      )}
    </div>
  );
};

export default Signup;
