import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const [form, setForm] = useState({ email: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      // Also send to Netlify’s built-in form collector
      const formData = new FormData(e.target);
      await fetch('/', { method: 'POST', body: formData });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        setForm({ email: '' });
      } else {
        throw new Error(json.error || 'Unknown error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p className={styles.success}>Thank you for subscribing!</p>;
  }
  if (status === 'error') {
    return (
      <p className={styles.error}>Something went wrong. Please try again.</p>
    );
  }
  return (
    <div className={styles.signup}>
      <form
        name='signup'
        method='POST'
        action='/.netlify/functions/subscribe'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='signup' />
        <p hidden>
          <label>
            Don’t fill this out if you’re human: <input name='bot-field' />
          </label>
        </p>
        <label htmlFor='signup-email' className={styles.label}>
          Subscribe to our newsletter
        </label>
        <div className={styles.inputGroup}>
          <input
            type='email'
            id='signup-email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Your email'
            required
            className={styles.input}
          />
          <button
            type='submit'
            className={styles.button}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Subscribe'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
