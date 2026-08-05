"use client";

import { MapPin, Search, ChevronDown, User, ClipboardList, Heart, Inbox, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function MainNavbar() {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2 md:gap-4 lg:gap-8">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
          <h1 className="text-2xl font-bold text-primary flex items-center">
            BechDal<span className="text-secondary">.com</span>
          </h1>
          <p className="text-[10px] text-text-muted font-medium tracking-wide">Buy. Sell. Anything.</p>
        </Link>

        {/* Location Selector */}
        <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
          <div className="bg-blue-50 p-2 rounded-full text-primary group-hover:bg-blue-100 transition-colors">
            <MapPin size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text">Kolkata</span>
            <span className="text-xs text-text-muted">Change City</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-3xl hidden md:flex items-center border-2 border-primary rounded-md overflow-hidden bg-white shadow-sm hover:shadow transition-shadow min-w-0">
          <button className="flex-shrink-0 flex items-center gap-1.5 px-3 lg:px-4 py-2.5 bg-slate-100 border-r border-border text-xs lg:text-sm font-medium text-text-muted hover:bg-slate-200 transition-colors whitespace-nowrap">
            All Categories <ChevronDown size={14} />
          </button>
          <input 
            type="text" 
            placeholder="Search for cars, mobiles, properties and more..." 
            className="flex-1 min-w-[100px] w-full px-3 lg:px-4 py-2.5 outline-none text-xs md:text-sm text-text placeholder:text-text-light truncate"
          />
          <button className="flex-shrink-0 bg-secondary px-4 md:px-5 lg:px-6 py-2.5 text-text hover:bg-secondary-dark hover:text-white transition-colors flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="hidden xl:flex items-center gap-6 text-text-muted">
          <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <User size={20} />
            <span className="text-xs font-medium">Login / Register</span>
          </button>
          <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <ClipboardList size={20} />
            <span className="text-xs font-medium">My Orders</span>
          </button>
          <Link href="/wishlist" className="flex flex-col items-center gap-1 hover:text-primary transition-colors relative">
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
                {wishlistItems.length}
              </span>
            )}
            <span className="text-xs font-medium">Wishlist</span>
          </Link>
          <Link href="/inbox" className="flex flex-col items-center gap-1 hover:text-primary transition-colors relative">
            <Inbox size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border border-white"></span>
            <span className="text-xs font-medium">Inbox</span>
          </Link>
        </div>

        {/* Sell Button */}
        <Link href="/sell" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5">
          <PlusCircle size={20} />
          <div className="flex flex-col text-left">
            <span className="text-sm">Sell Now</span>
            <span className="text-[10px] font-normal opacity-90 -mt-0.5">Post Free Ad</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
