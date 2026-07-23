import Card from "./Card";

function NotificationItem({ notification, onClear }) {
  const { id, name, message } = notification;

  return (
    <Card className="notification-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title mb-1">{name}</h5>
          <p className="card-text mb-0">{message}</p>
        </div>
        <button
          className="btn btn-sm btn-outline-danger ms-3 flex-shrink-0"
          onClick={() => onClear(id)}
        >
          Clear
        </button>
      </div>
    </Card>
  );
}

export default NotificationItem;