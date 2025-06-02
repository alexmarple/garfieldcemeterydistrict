import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/contact.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(json.error || 'Unknown error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div id='contact' className={styles.contact}>
        <p className={styles.success}>Thanks! Your message was sent.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div id='contact' className={styles.contact}>
        <p className={styles.error}>Something went wrong. Please try again.</p>
      </div>
    );
  }

  return (
    <div id='contact' className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Your Name'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Your Email'
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            value={form.message}
            onChange={handleChange}
            rows='5'
            required
          ></textarea>
        </div>
        <button type='submit' disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
