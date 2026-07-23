import NotificationItem from "./NotificationItem";

function NotificationList({ notifications, onClear }) {
  if (notifications.length === 0) {
    return <p className="text-muted">You have no notifications.</p>;
  }

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClear={onClear}
        />
      ))}
    </div>
  );
}

export default NotificationList;