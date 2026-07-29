import Link from "next/link";
import { MessageSquare, Tag, Bell, Percent, ChevronRight } from "lucide-react";

export default function NotificationCard({ notification }) {
  const { type, title, description, timestamp, isUnread, actionLink, avatar } = notification;

  // Determine Icon based on type
  let Icon = Bell;
  let iconBg = "bg-slate-100 text-slate-600";
  
  switch (type) {
    case "message":
      Icon = MessageSquare;
      iconBg = "bg-blue-100 text-primary";
      break;
    case "offer":
      Icon = Tag;
      iconBg = "bg-green-100 text-green-600";
      break;
    case "promo":
      Icon = Percent;
      iconBg = "bg-yellow-100 text-secondary-dark";
      break;
    case "alert":
    default:
      Icon = Bell;
      iconBg = "bg-purple-100 text-purple-600";
      break;
  }

  return (
    <Link 
      href={actionLink || "#"} 
      className={`
        block group p-4 sm:p-5 border-b border-border last:border-b-0 transition-all duration-300
        hover:bg-slate-50
        ${isUnread ? "bg-blue-50/30" : "bg-white"}
      `}
    >
      <div className="flex items-start gap-4">
        
        {/* Icon or Avatar */}
        <div className="relative flex-shrink-0">
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={avatar} 
              alt="User" 
              className="w-12 h-12 rounded-full object-cover border border-border"
            />
          ) : (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
              <Icon size={20} />
            </div>
          )}
          {/* Unread Dot Indicator */}
          {isUnread && (
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary border-2 border-white rounded-full"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2 mb-1">
            <h3 className={`font-semibold truncate ${isUnread ? "text-text" : "text-text-muted"}`}>
              {title}
            </h3>
            <span className="text-xs text-text-light whitespace-nowrap pt-0.5">
              {timestamp}
            </span>
          </div>
          <p className={`text-sm line-clamp-2 ${isUnread ? "text-text font-medium" : "text-text-muted"}`}>
            {description}
          </p>
        </div>

        {/* Chevron Action */}
        <div className="flex-shrink-0 self-center text-border group-hover:text-primary transition-colors pl-2 hidden sm:block">
          <ChevronRight size={20} />
        </div>

      </div>
    </Link>
  );
}
