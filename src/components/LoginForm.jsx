import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function LoginForm({ onLogin }) {
    const { t } = useTranslation();
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(t('login_form.please_fill_in_all_fields'));
      return;
    }
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <h1>{t('login_form.welcome_back')}</h1>
      <p>{t('login_form.sign_in_to_your_account_to_continue')}</p>

      {error && <div className="error-banner">{error}</div>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">{t('login_form.email_address')}</label>
        <input
          id="email"
          type="email"
          placeholder={t('login_form.enter_your_email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">{t('login_form.password')}</label>
        <input
          id="password"
          type="password"
          placeholder={t('login_form.enter_your_password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{t('login_form.log_in')}</button>
      </form>

      <p>
        {t('login_form.dont_have_an_account')}{" "}
        <a href="/signup">{t('login_form.create_one')}</a>
      </p>
    </div>
  );
}
