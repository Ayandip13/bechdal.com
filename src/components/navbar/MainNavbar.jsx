"use client";

import { useState, useEffect, useRef } from "react";
import {
  MapPin, Search, ChevronDown, User, ClipboardList, Heart,
  Inbox, PlusCircle, Menu, X, ArrowRight, Clock, Sparkles, Check, HelpCircle, LogOut
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { categoryDetails, categoryProducts, popularSearchTags } from "@/constants/categoryData";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";


export default function MainNavbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const { user, isAuthenticated, logout } = useAuth();

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("Kolkata");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Suggestion results
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [suggestedCategories, setSuggestedCategories] = useState([]);

  const searchRef = useRef(null);
  const locationRef = useRef(null);

  // Locations list
  const locations = ["Kolkata", "Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Chennai"];

  // Categories list
  const searchCategories = [
    { id: "all", name: "All Categories" },
    { id: "electronics", name: "Electronics" },
    { id: "mobiles", name: "Mobiles" },
    { id: "vehicles", name: "Vehicles" },
    { id: "properties", name: "Properties" },
    { id: "furniture", name: "Furniture" },
    { id: "fashion", name: "Fashion" },
    { id: "jobs", name: "Jobs" },
    { id: "services", name: "Services" },
    { id: "pets", name: "Pets" },
    { id: "books", name: "Books" },
    { id: "pet-products", name: "Pet Products" },
    { id: "agricultural-products", name: "Agricultural Products" },
    { id: "construction-equipment", name: "Construction Equipment" },
    { id: "office-equipment", name: "Office Equipment" }
  ];

  // Load search parameters
  useEffect(() => {
    const q = searchParams.get("q") || "";
    const cat = searchParams.get("category") || "all";
    setSearchQuery(q);
    setSelectedCategory(cat);
  }, [searchParams]);

  // Handle autocomplete matching
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestedProducts([]);
      setSuggestedCategories([]);
      return;
    }

    const query = searchQuery.toLowerCase();

    // Match categories
    const matchedCats = Object.values(categoryDetails).filter(cat =>
      cat.title.toLowerCase().includes(query) ||
      cat.slug.toLowerCase().includes(query)
    ).slice(0, 3);

    // Match products across all categories
    let allProducts = [];
    Object.keys(categoryProducts).forEach(catKey => {
      // If we filtered by category, only pull from that category
      if (selectedCategory === "all" || selectedCategory === catKey) {
        allProducts = [...allProducts, ...categoryProducts[catKey]];
      }
    });

    const matchedProds = allProducts.filter(prod =>
      prod.title.toLowerCase().includes(query)
    ).slice(0, 5);

    setSuggestedCategories(matchedCats);
    setSuggestedProducts(matchedProds);
  }, [searchQuery, selectedCategory]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setIsLocationDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e, overrideQuery = null) => {
    if (e) e.preventDefault();
    const queryToSend = overrideQuery !== null ? overrideQuery : searchQuery;
    setIsSearchFocused(false);

    // Navigate to Search Results page
    router.push(`/search?q=${encodeURIComponent(queryToSend)}&category=${selectedCategory}`);
  };

  const selectSuggestedSearch = (text) => {
    setSearchQuery(text);
    handleSearchSubmit(null, text);
  };

  const getCategoryName = (id) => {
    const cat = searchCategories.find(c => c.id === id);
    return cat ? cat.name : "All Categories";
  };

  return (
    <div className="bg-white dark:bg-slate-800/95 border-b border-border dark:border-slate-700/80 z-50 relative transition-colors duration-200">

      {/* ----------------- DESKTOP & TABLET HEADER ----------------- */}
      <div className="hidden md:block max-w-[1400px] mx-auto py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex flex-col flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
            <h1 className="text-xl lg:text-2xl font-black text-primary dark:text-blue-400 flex items-center tracking-tight">
              BechDal<span className="text-secondary dark:text-amber-400 font-extrabold">.com</span>
            </h1>
            <p className="text-[9px] text-text-muted dark:text-slate-400 font-bold tracking-wider -mt-0.5">Maximum Bachat • Zero Fees</p>
          </Link>

          {/* Location Picker */}
          <div className="relative" ref={locationRef}>
            <div
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex items-center gap-1.5 cursor-pointer bg-slate-50 dark:bg-slate-700/50 border border-border dark:border-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none"
            >
              <MapPin size={16} className="text-primary dark:text-blue-400 flex-shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-text-muted dark:text-slate-400 font-bold uppercase leading-none">Deliver to</span>
                <span className="text-xs font-extrabold text-text dark:text-slate-100 leading-tight mt-0.5 flex items-center gap-0.5">
                  {selectedLocation} <ChevronDown size={11} className="text-text-muted dark:text-slate-400" />
                </span>
              </div>
            </div>

            {/* Location Dropdown */}
            {isLocationDropdownOpen && (
              <div className="absolute top-[44px] left-0 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-lg py-2 w-48 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 pb-1 border-b border-slate-100 dark:border-slate-700 text-[10px] uppercase font-extrabold text-text-muted dark:text-slate-400">
                  Select Location
                </div>
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-text dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && <Check size={12} className="text-primary dark:text-blue-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Advanced Search Box with Category Selector and Suggestions */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <form
              onSubmit={(e) => handleSearchSubmit(e)}
              className={`flex items-center border-2 rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-xs transition-colors ${isSearchFocused
                  ? "border-primary dark:border-blue-500"
                  : "border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
                }`}
            >
              {/* Category selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-text-muted dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap cursor-pointer h-[38px] select-none"
                >
                  <span className="truncate max-w-[90px]">{getCategoryName(selectedCategory)}</span>
                  <ChevronDown size={12} className="opacity-70" />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute top-[42px] left-0 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-lg py-1.5 w-56 z-50 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                    {searchCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-1.5 text-xs font-semibold text-text dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        {selectedCategory === cat.id && <Check size={12} className="text-primary dark:text-blue-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input text */}
              <input
                type="text"
                placeholder="Search for mobiles, laptops, sofas, pets, fresh crops and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setIsCategoryDropdownOpen(false);
                }}
                className="flex-1 px-3 py-2 outline-none text-xs lg:text-sm text-text dark:text-slate-100 placeholder:text-text-light dark:placeholder:text-slate-500 bg-transparent min-w-0"
              />

              {/* Search button */}
              <button
                type="submit"
                className="flex-shrink-0 bg-secondary hover:bg-secondary-dark px-5 text-slate-900 font-bold hover:text-white transition-colors flex items-center justify-center h-[38px] cursor-pointer"
              >
                <Search size={16} />
              </button>
            </form>

            {/* AUTOCOMPLETE POPUP PANEL */}
            {isSearchFocused && (
              <div className="absolute top-[44px] left-0 right-0 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                {/* Popular Tags / Recent Searches when input is empty */}
                {!searchQuery.trim() ? (
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400 mb-2.5">
                      <Sparkles size={12} className="text-secondary" /> Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearchTags.slice(0, 8).map((tag, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => selectSuggestedSearch(tag)}
                          className="bg-slate-50 dark:bg-slate-700/60 hover:bg-primary-light/5 dark:hover:bg-slate-700 text-xs font-semibold text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-600 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-700">

                    {/* Category Suggestions */}
                    {suggestedCategories.length > 0 && (
                      <div className="p-2">
                        {suggestedCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            onClick={() => setIsSearchFocused(false)}
                            className="flex items-center justify-between px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/70 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all group"
                          >
                            <span className="flex items-center gap-2">
                              <Search size={12} className="text-text-muted dark:text-slate-400 opacity-60" />
                              <span>Search in <span className="font-bold">{cat.title}</span></span>
                            </span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Product Suggestions */}
                    {suggestedProducts.length > 0 ? (
                      <div className="p-2">
                        <div className="px-3 py-1 text-[9px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400 mb-1">
                          Product Matches
                        </div>
                        {suggestedProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/product/${prod.id}`}
                            onClick={() => setIsSearchFocused(false)}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/70 rounded-lg transition-all text-left"
                          >
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-8 h-8 rounded object-cover border border-slate-100 dark:border-slate-700"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-semibold text-text dark:text-slate-100 truncate">{prod.title}</h4>
                              <p className="text-[10px] text-text-muted dark:text-slate-400 font-bold mt-0.5">₹{prod.price}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      suggestedCategories.length === 0 && (
                        <div className="p-4 text-center text-xs text-text-muted dark:text-slate-400 font-semibold">
                          No suggestions match "{searchQuery}"
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions (Theme Toggle, Wishlist, Inbox, Account) */}
          <div className="flex items-center gap-3 lg:gap-4 text-text-muted dark:text-slate-300">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Auth State Action: Login Link or User Account Dropdown */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex flex-col items-center hover:text-primary dark:hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-400 flex items-center justify-center text-[10px] font-bold border border-primary/30">
                    {user?.name ? user.name.charAt(0).toUpperCase() : <User size={13} />}
                  </div>
                  <span className="text-[10px] font-bold mt-0.5 max-w-[50px] truncate">{user?.name?.split(" ")[0] || "Account"}</span>
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute top-[38px] right-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl py-2 w-48 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">{user?.name}</p>
                      <p className="text-[10px] text-text-muted dark:text-slate-400 truncate">{user?.email || user?.mobile}</p>
                    </div>
                    <Link
                      href="/wishlist"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors"
                    >
                      My Wishlist
                    </Link>
                    <Link
                      href="/inbox"
                      onClick={() => setIsUserDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors"
                    >
                      My Chats
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <LogOut size={13} />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="flex flex-col items-center hover:text-primary dark:hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
              >
                <User size={18} />
                <span className="text-[10px] font-bold mt-0.5">Login</span>
              </Link>
            )}

            <Link href="/wishlist" className="flex flex-col items-center hover:text-primary dark:hover:text-blue-400 transition-colors relative">
              <Heart size={18} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white dark:border-slate-800 font-extrabold">
                  {wishlistItems.length}
                </span>
              )}
              <span className="text-[10px] font-bold mt-0.5">Wishlist</span>
            </Link>

            <Link href="/inbox" className="flex flex-col items-center hover:text-primary dark:hover:text-blue-400 transition-colors relative">
              <Inbox size={18} />
              <span className="absolute top-0 right-1.5 bg-red-500 w-2 h-2 rounded-full border border-white dark:border-slate-800"></span>
              <span className="text-[10px] font-bold mt-0.5">Chat</span>
            </Link>
          </div>

          {/* Sell Button */}
          <Link href="/sell" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold shadow-xs hover:shadow transition-all whitespace-nowrap">
            <PlusCircle size={16} />
            <div className="flex flex-col text-left">
              <span className="text-xs leading-none">Sell Now</span>
              <span className="text-[8px] font-medium opacity-90 tracking-wide mt-0.5">Post Free Ad</span>
            </div>
          </Link>

        </div>
      </div>


      {/* ----------------- MOBILE DEDICATED HEADER ----------------- */}
      <div className="md:hidden flex flex-col bg-white dark:bg-slate-800">

        {/* Row 1: Top navigation bar */}
        <div className="flex items-center justify-between px-4 py-2 gap-3 border-b border-slate-100 dark:border-slate-700/80">

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors focus:outline-none"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <h1 className="text-lg font-black text-primary dark:text-blue-400 flex items-center tracking-tight">
              BechDal<span className="text-secondary dark:text-amber-400 font-extrabold">.com</span>
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme toggle for mobile header */}
            <ThemeToggle compact />

            {/* Location Selector shortcut */}
            <div
              onClick={() => setIsLocationDropdownOpen(true)}
              className="flex items-center gap-1 cursor-pointer bg-slate-50 dark:bg-slate-700/60 border border-border dark:border-slate-600 px-2 py-1 rounded-md text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors max-w-[110px] sm:max-w-none"
            >
              <MapPin size={13} className="text-primary dark:text-blue-400 flex-shrink-0" />
              <span className="truncate max-w-[55px] sm:max-w-none">{selectedLocation}</span>
            </div>
          </div>

        </div>


        {/* Row 2: Full-width search bar */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700/80">
          <form 
            onSubmit={(e) => handleSearchSubmit(e)}
            className="flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden relative"
          >
            <Search size={14} className="text-slate-400 dark:text-slate-500 ml-2.5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search mobiles, electronics, sofas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="flex-1 w-full pl-2 pr-3 py-1.5 text-xs outline-none bg-transparent text-text dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery("")}
                className="p-1 mr-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none cursor-pointer"
              >
                <X size={13} />
              </button>
            )}
            
            {/* Suggestions Overlay inside mobile search */}
            {isSearchFocused && (
              <div className="absolute top-[38px] left-0 right-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                {!searchQuery.trim() ? (
                  <div className="p-3">
                    <div className="text-[9px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400 mb-2">
                      Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearchTags.slice(0, 6).map((tag, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => selectSuggestedSearch(tag)}
                          className="bg-slate-50 dark:bg-slate-700/60 hover:bg-primary-light/5 dark:hover:bg-slate-700 text-[10px] font-semibold text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-600 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-700">
                    {suggestedCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:text-primary dark:hover:text-blue-400 transition-colors"
                      >
                        <Search size={11} className="text-text-muted dark:text-slate-400" />
                        <span>Search in <span className="font-bold">{cat.title}</span></span>
                      </Link>
                    ))}
                    {suggestedProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/product/${prod.id}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors"
                      >
                        <img src={prod.image} alt={prod.title} className="w-6 h-6 object-cover rounded border border-slate-100 dark:border-slate-700" />
                        <span className="truncate">{prod.title}</span>
                      </Link>
                    ))}
                    <button 
                      type="submit" 
                      className="w-full text-center py-2 text-xs font-bold text-primary dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/70 transition-colors cursor-pointer"
                    >
                      Search for "{searchQuery}"
                    </button>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

      </div>


      {/* ----------------- MOBILE SLIDE-IN MENU DRAWER ----------------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden animate-in fade-in duration-200">

          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative w-full max-w-[280px] bg-white dark:bg-slate-800 h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250 border-r border-slate-200 dark:border-slate-700">

            {/* Header */}
            <div className="p-4 bg-primary dark:bg-slate-900 text-white flex items-center justify-between">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white font-extrabold flex items-center justify-center text-sm border border-white/30">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold truncate max-w-[140px]">{user?.name}</span>
                    <span className="text-[10px] text-white/80 truncate max-w-[140px]">{user?.email || user?.mobile}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-xs opacity-80 leading-none">Welcome to</span>
                  <span className="text-lg font-black tracking-tight mt-0.5 flex items-center gap-0.5">
                    BechDal<span className="text-secondary dark:text-amber-400 font-black">.com</span>
                  </span>
                </div>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full text-white/95 hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body Scroll */}
            <div className="flex-1 overflow-y-auto py-2">

              {/* Theme Toggle section in mobile menu */}
              <div className="px-3 my-2">
                <div className="text-[9px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400 mb-1.5 px-1">
                  Appearance
                </div>
                <ThemeToggle showLabel />
              </div>

              {/* Marketing Value Proposition Banner */}
              <div className="mx-3 my-2.5 p-3 rounded-xl bg-orange-50 dark:bg-slate-700/50 border border-orange-100 dark:border-slate-600 flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-orange-700 dark:text-amber-400 flex items-center gap-1">
                  <Sparkles size={11} className="fill-orange-500 text-orange-500 dark:fill-amber-400 dark:text-amber-400" /> Value Proposition
                </span>
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 mt-1">Maximum Bachat</h4>
                <p className="text-[10px] text-text-muted dark:text-slate-300 mt-0.5 font-bold leading-normal">
                  Zero hidden charges. No platform fees. Save more on every transaction.
                </p>
              </div>

              {/* Main Links */}
              <div className="px-2 divide-y divide-slate-100 dark:divide-slate-700">
                <div className="py-2.5">
                  {!isAuthenticated ? (
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-400 hover:bg-primary/20 rounded-lg text-xs font-bold mb-1"
                    >
                      <User size={16} />
                      <span>Login / Create Account</span>
                    </Link>
                  ) : null}

                  <Link
                    href="/sell"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg text-xs font-extrabold text-primary dark:text-blue-400"
                  >
                    <PlusCircle size={16} />
                    <span>Sell Now (Post Free Ad)</span>
                  </Link>
                  <Link
                    href="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <Heart size={16} className="text-text-muted dark:text-slate-400" />
                    <span>My Wishlist ({wishlistItems.length})</span>
                  </Link>
                  <Link
                    href="/inbox"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    <Inbox size={16} className="text-text-muted dark:text-slate-400" />
                    <span>My Chats / Inbox</span>
                  </Link>
                  {isAuthenticated ? (
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                    >
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  ) : null}
                </div>

                {/* Categories Links */}
                <div className="py-2.5">
                  <div className="px-3 pb-1 text-[9px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400">
                    Browse Categories
                  </div>
                  {searchCategories.filter(c => c.id !== "all").map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:text-primary dark:hover:text-blue-400 rounded-lg transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Help Links */}
                <div className="py-2.5">
                  <a
                    href="#"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-text-muted dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/60 rounded-lg"
                  >
                    <HelpCircle size={15} />
                    <span>Help & Support</span>
                  </a>
                  <div className="px-3 pt-3 text-[10px] text-text-light dark:text-slate-500 font-medium">
                    © 2026 BechDal.com
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
