import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import SettingsPage from "./pages/SettingsPage";

const SAMPLE_USER = { name: "Yasin" };
const SAMPLE_PROJECTS = [
  { id: 1, name: "git-localize-bot" },
  { id: 2, name: "sample-react-app" },
];

const PAGES = ["Login", "Dashboard", "Settings"];

export default function App() {
  const [page, setPage] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "40px auto", padding: "0 20px" }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 32, padding: "12px 16px", background: "#f4f4f5", borderRadius: 8 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                padding: "6px 14px", borderRadius: 6, border: "none", cursor: "pointer",
                background: page === p ? "#18181b" : "#e4e4e7",
                color: page === p ? "#fff" : "#18181b",
                fontWeight: 500,
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Page content */}
      <div style={{ background: "#fff", padding: 32, borderRadius: 12, border: "1px solid #e4e4e7" }}>
        <p>This is my app</p>
        {page === "Login" && (
          <LoginForm onLogin={() => { setLoggedIn(true); setPage("Dashboard"); }} />
        )}
        {page === "Dashboard" && (
          <Dashboard user={SAMPLE_USER} projects={SAMPLE_PROJECTS} />
        )}
        {page === "Settings" && (
          <SettingsPage user={SAMPLE_USER} onSave={(data) => console.log("Saved:", data)} />
        )}
      </div>
    </div>
  );
}
