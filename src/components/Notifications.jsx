import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../store/notificationsSlice";
import { RootState } from "../store/store";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        dispatch(removeNotification(notifications[0].id));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notifications, dispatch]);

  return (
    <div className="fixed top-4 right-4 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`mb-2 p-4 rounded-md shadow-md ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          } text-white`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
