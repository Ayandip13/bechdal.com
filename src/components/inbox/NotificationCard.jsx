import Link from "next/link";
import { MessageSquare, Tag, Bell, Percent, ChevronRight } from "lucide-react";

export default function NotificationCard({ notification }) {
  const { type, title, description, timestamp, isUnread, actionLink, avatar } = notification;

  // Determine Icon based on type
  let Icon = Bell;
  let iconBg = "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300";
  
  switch (type) {
    case "message":
      Icon = MessageSquare;
      iconBg = "bg-blue-100 dark:bg-blue-950/60 text-primary dark:text-blue-400";
      break;
    case "offer":
      Icon = Tag;
      iconBg = "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400";
      break;
    case "promo":
      Icon = Percent;
      iconBg = "bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400";
      break;
    case "alert":
    default:
      Icon = Bell;
      iconBg = "bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400";
      break;
  }

  return (
    <Link 
      href={actionLink || "#"} 
      className={`
        block group p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700/80 last:border-b-0 transition-all duration-200
        hover:bg-slate-50 dark:hover:bg-slate-700/50
        ${isUnread ? "bg-blue-50/50 dark:bg-blue-950/30" : "bg-white dark:bg-slate-800"}
      `}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        
        {/* Icon or Avatar */}
        <div className="relative shrink-0">
          {avatar ? (
            <img 
              src={avatar} 
              alt="User" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            />
          ) : (
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${iconBg}`}>
              <Icon size={18} />
            </div>
          )}
          {/* Unread Dot Indicator */}
          {isUnread && (
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary dark:bg-blue-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 mb-0.5">
            <h3 className={`font-extrabold text-xs sm:text-sm truncate ${isUnread ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>
              {title}
            </h3>
            <span className="text-[10px] sm:text-xs text-text-muted dark:text-slate-400 font-medium shrink-0 pt-0.5">
              {timestamp}
            </span>
          </div>
          <p className={`text-xs sm:text-sm line-clamp-2 ${isUnread ? "text-slate-800 dark:text-slate-200 font-medium" : "text-text-muted dark:text-slate-400"}`}>
            {description}
          </p>
        </div>

        {/* Chevron Action */}
        <div className="shrink-0 self-center text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors pl-1 hidden sm:block">
          <ChevronRight size={18} />
        </div>

      </div>
    </Link>
  );
}
