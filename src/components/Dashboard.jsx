import React from "react";
import { useTranslation } from 'react-i18next';

export default function Dashboard({ user, projects }) {
    const { t } = useTranslation();
return (
    <div className="dashboard">
      <header>
        <h1>
          {t('dashboard.welcome_back_to_app')} {user.name}!
        </h1>
        <button onClick={() => alert(t('dashboard.logging_out'))}>
          {t('dashboard.log_out')}
        </button>
      </header>

      <section>
        <h2>{t('dashboard.your_projects')}</h2>
        {projects.length === 0 ? (
          <p>{t('dashboard.you_dont_have_any_projects_yet_create_yo')}</p>
        ) : (
          <ul>
            {projects.map((p) => (
              <li key={p.id}>
                <span>{p.name}</span>
                <button>{t('dashboard.view')}</button>
                <button>{t('dashboard.delete')}</button>
              </li>
            ))}
          </ul>
        )}
        <button className="primary">{t('dashboard.create_new_project')}</button>
      </section>

      <section>
        <h2>{t('dashboard.recent_activity')}</h2>
        <p>{t('dashboard.no_recent_activity_to_show')}</p>
      </section>
    </div>
  );
}
