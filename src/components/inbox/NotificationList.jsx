"use client";

import { useState } from "react";
import { CheckAll } from "lucide-react"; // Using an icon for mark all read if needed, or just text
import NotificationCard from "./NotificationCard";
import { notifications as initialNotifications } from "@/constants/inboxDummyData";

export default function NotificationList() {
  const [notifs, setNotifs] = useState(initialNotifications);

  const unreadCount = notifs.filter(n => n.isUnread).length;

  const markAllAsRead = () => {
    setNotifs(notifs.map(n => ({ ...n, isUnread: false })));
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-2xs">
              {unreadCount} New
            </span>
          )}
        </div>
        
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-xs sm:text-sm font-bold text-primary dark:text-blue-400 hover:underline transition-colors self-start sm:self-auto cursor-pointer"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* List Container */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-2xs overflow-hidden">
        {notifs.length > 0 ? (
          <div className="flex flex-col">
            {notifs.map((notif) => (
              <NotificationCard key={notif.id} notification={notif} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-text-muted dark:text-slate-400">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700/60 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400 dark:text-slate-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <p className="font-extrabold text-lg text-slate-900 dark:text-white">No notifications yet</p>
            <p className="text-sm mt-1 text-text-muted dark:text-slate-400 font-medium">When you get messages or alerts, they'll show up here.</p>
          </div>
        )}
      </div>

    </div>
  );
}
