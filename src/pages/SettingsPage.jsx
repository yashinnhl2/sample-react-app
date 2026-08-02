import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function SettingsPage({ user, onSave }) {
    const { t } = useTranslation();
const [name, setName] = useState(user.name);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave({ name });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="settings-page">
      <h1>{t('settings_page.account_settings')}</h1>

      <section>
        <h2>{t('settings_page.profile')}</h2>
        <label>{t('settings_page.display_name')}</label>
        <input
          type="text"
          value={name}
          placeholder={t('settings_page.enter_your_name')}
          onChange={(e) => setName(e.target.value)}
        />
      </section>

      <section>
        <h2>{t('settings_page.danger_zone')}</h2>
        <p>{t('settings_page.deleting_your_account_is_permanent_and_c')}</p>
        <button className="danger">{t('settings_page.delete_account')}</button>
      </section>

      {saved && (
        <div className="toast">
          {t('settings_page.settings_saved_successfully')}
        </div>
      )}

      <button onClick={handleSave}>{t('settings_page.save_changes')}</button>
      <button onClick={() => window.history.back()}>
        {t('settings_page.cancel')}
      </button>
    </div>
  );
}
