import React, { useState } from "react";

export default function SettingsPage({ user, onSave }) {
  const [name, setName] = useState(user.name);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave({ name });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="settings-page">
      <h1>Account settings</h1>

      <section>
        <h2>Profile</h2>
        <label>Display name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </section>

      <section>
        <h2>Danger zone</h2>
        <p>Deleting your account is permanent and cannot be undone.</p>
        <button className="danger">Delete account</button>
      </section>

      {saved && (
        <div className="toast">
          Settings saved successfully
        </div>
      )}

      <button onClick={handleSave}>Save changes</button>
      <button onClick={() => window.history.back()}>
        Cancel
      </button>
    </div>
  );
}
