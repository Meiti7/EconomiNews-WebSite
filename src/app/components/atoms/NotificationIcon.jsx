"use client";
// components/NotificationIcon.js
import React, { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";

const notifications = [
  { id: 1, text: "notification" },
  { id: 2, text: "notification" },
  { id: 3, text: "notification" },
];

function NotificationList({ notifications }) {
  return (
    <div className="absolute bg-white p-2 shadow-md top-10 right-0 mt-1 w-48 rounded-md z-20">
      {notifications.map((notification) => (
        <div key={notification.id} className="text-sm mb-1">
          {notification.text}
        </div>
      ))}
    </div>
  );
}

function NotificationIcon() {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showNotifications && !event.target.closest(".notification-icon")) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className="relative notification-icon">
      <AiOutlineBell
        size={34}
        className="cursor-pointer"
        onClick={toggleNotifications}
      />

      {notificationCount > 0 && (
        <div className="bg-[#126C46] text-white absolute text-[12px] w-4 h-4 top-2 right-1 -mt-1 -mr-1 px-1 rounded-full">
          {notificationCount}
        </div>
      )}

      {showNotifications && <NotificationList notifications={notifications} />}
    </div>
  );
}

export default NotificationIcon;
