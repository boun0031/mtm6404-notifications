import { useState } from "react";
import notificationsData from "./notifications";
import NotificationList from "./components/NotificationList";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  function handleClear(id) {
    setNotifications(notifications.filter((n) => n.id !== id));
  }

  function handleClearAll() {
    setNotifications([]);
  }

  return (
    <div className="container py-4" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="mb-0">Notifications</h1>
          <p className="text-muted mb-0">
            You have {notifications.length} notification
            {notifications.length !== 1 ? "s" : ""}
          </p>
        </div>

        {notifications.length > 0 && (
          <button className="btn btn-danger" onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>

      <NotificationList notifications={notifications} onClear={handleClear} />
    </div>
  );
}

export default App;