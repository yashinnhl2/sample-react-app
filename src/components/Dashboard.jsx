import React from "react";

export default function Dashboard({ user, projects }) {
  return (
    <div className="dashboard">
      <header>
        <h1>
          Welcome back to app {user.name}!
        </h1>
        <button onClick={() => alert("Logging out...")}>
          Log out
        </button>
      </header>

      <section>
        <h2>Your projects</h2>
        {projects.length === 0 ? (
          <p>You don't have any projects yet. Create your first one!</p>
        ) : (
          <ul>
            {projects.map((p) => (
              <li key={p.id}>
                <span>{p.name}</span>
                <button>View</button>
                <button>Delete</button>
              </li>
            ))}
          </ul>
        )}
        <button className="primary">Create new project</button>
      </section>

      <section>
        <h2>Recent activity</h2>
        <p>No recent activity to show</p>
      </section>
    </div>
  );
}
