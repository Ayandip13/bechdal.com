"use client";

import { useState, useEffect, useRef } from "react";
import { 
  MapPin, Search, ChevronDown, User, ClipboardList, Heart, 
  Inbox, PlusCircle, Menu, X, ArrowRight, Clock, Sparkles, Check, HelpCircle
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { categoryDetails, categoryProducts, popularSearchTags } from "@/constants/categoryData";

export default function MainNavbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("Kolkata");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <div className="bg-white border-b border-border z-50 relative">
      
      {/* ----------------- DESKTOP & TABLET HEADER ----------------- */}
      <div className="hidden md:block max-w-[1400px] mx-auto py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
            <h1 className="text-xl lg:text-2xl font-black text-primary flex items-center tracking-tight">
              BechDal<span className="text-secondary font-extrabold">.com</span>
            </h1>
            <p className="text-[9px] text-text-muted font-bold tracking-wider -mt-0.5">Maximum Bachat • Zero Fees</p>
          </Link>

          {/* Location Picker */}
          <div className="relative" ref={locationRef}>
            <div 
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex items-center gap-1.5 cursor-pointer bg-slate-50 border border-border px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors select-none"
            >
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-text-muted font-bold uppercase leading-none">Deliver to</span>
                <span className="text-xs font-extrabold text-text leading-tight mt-0.5 flex items-center gap-0.5">
                  {selectedLocation} <ChevronDown size={11} className="text-text-muted" />
                </span>
              </div>
            </div>

            {/* Location Dropdown */}
            {isLocationDropdownOpen && (
              <div className="absolute top-[44px] left-0 bg-white border border-border rounded-xl shadow-lg py-2 w-48 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 pb-1 border-b border-slate-100 text-[10px] uppercase font-extrabold text-text-muted">
                  Select Location
                </div>
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-text hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && <Check size={12} className="text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Advanced Search Box with Category Selector and Suggestions */}
          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <form 
              onSubmit={(e) => handleSearchSubmit(e)}
              className={`flex items-center border-2 rounded-lg overflow-hidden bg-white shadow-xs transition-colors ${isSearchFocused ? "border-primary" : "border-slate-300 hover:border-slate-400"}`}
            >
              {/* Category selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-2 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-text-muted border-r border-slate-200 transition-colors whitespace-nowrap cursor-pointer h-[38px] select-none"
                >
                  <span className="truncate max-w-[90px]">{getCategoryName(selectedCategory)}</span>
                  <ChevronDown size={12} className="opacity-70" />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute top-[42px] left-0 bg-white border border-border rounded-xl shadow-lg py-1.5 w-56 z-50 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                    {searchCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-1.5 text-xs font-semibold text-text hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        <span>{cat.name}</span>
                        {selectedCategory === cat.id && <Check size={12} className="text-primary" />}
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
                className="flex-1 px-3 py-2 outline-none text-xs lg:text-sm text-text placeholder:text-text-light min-w-0"
              />

              {/* Search button */}
              <button 
                type="submit"
                className="flex-shrink-0 bg-secondary px-5 text-text hover:bg-secondary-dark font-bold hover:text-white transition-colors flex items-center justify-center h-[38px] cursor-pointer"
              >
                <Search size={16} />
              </button>
            </form>

            {/* AUTOCOMPLETE POPUP PANEL */}
            {isSearchFocused && (
              <div className="absolute top-[44px] left-0 right-0 bg-white border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                {/* Popular Tags / Recent Searches when input is empty */}
                {!searchQuery.trim() ? (
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-extrabold text-text-muted mb-2.5">
                      <Sparkles size={12} className="text-secondary" /> Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearchTags.slice(0, 8).map((tag, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => selectSuggestedSearch(tag)}
                          className="bg-slate-50 hover:bg-primary-light/5 text-xs font-semibold text-text-muted hover:text-primary px-3 py-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    
                    {/* Category Suggestions */}
                    {suggestedCategories.length > 0 && (
                      <div className="p-2">
                        {suggestedCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/category/${cat.slug}`}
                            onClick={() => setIsSearchFocused(false)}
                            className="flex items-center justify-between px-3 py-2 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 hover:text-primary transition-all group"
                          >
                            <span className="flex items-center gap-2">
                              <Search size={12} className="text-text-muted opacity-60" />
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
                        <div className="px-3 py-1 text-[9px] uppercase tracking-wider font-extrabold text-text-muted mb-1">
                          Product Matches
                        </div>
                        {suggestedProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/product/${prod.id}`}
                            onClick={() => setIsSearchFocused(false)}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg transition-all text-left"
                          >
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-8 h-8 rounded object-cover border border-slate-100"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-semibold text-text truncate">{prod.title}</h4>
                              <p className="text-[10px] text-text-muted font-bold mt-0.5">₹{prod.price}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      suggestedCategories.length === 0 && (
                        <div className="p-4 text-center text-xs text-text-muted font-semibold">
                          No suggestions match "{searchQuery}"
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions (Wishlist, Inbox, Account) */}
          <div className="flex items-center gap-4 text-text-muted">
            <button className="flex flex-col items-center hover:text-primary transition-colors focus:outline-none">
              <User size={18} />
              <span className="text-[10px] font-bold mt-0.5">Account</span>
            </button>
            
            <Link href="/wishlist" className="flex flex-col items-center hover:text-primary transition-colors relative">
              <Heart size={18} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white font-extrabold">
                  {wishlistItems.length}
                </span>
              )}
              <span className="text-[10px] font-bold mt-0.5">Wishlist</span>
            </Link>

            <Link href="/inbox" className="flex flex-col items-center hover:text-primary transition-colors relative">
              <Inbox size={18} />
              <span className="absolute top-0 right-1.5 bg-red-500 w-2 h-2 rounded-full border border-white"></span>
              <span className="text-[10px] font-bold mt-0.5">Chat</span>
            </Link>
          </div>

          {/* Sell Button */}
          <Link href="/sell" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold shadow-sm hover:shadow transition-all whitespace-nowrap">
            <PlusCircle size={16} />
            <div className="flex flex-col text-left">
              <span className="text-xs leading-none">Sell Now</span>
              <span className="text-[8px] font-medium opacity-90 tracking-wide mt-0.5">Post Free Ad</span>
            </div>
          </Link>

        </div>
      </div>


      {/* ----------------- MOBILE DEDICATED HEADER ----------------- */}
      <div className="md:hidden flex flex-col bg-white">
        
        {/* Row 1: Top navigation bar */}
        <div className="flex items-center justify-between px-4 py-2 gap-4 border-b border-slate-100">
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors focus:outline-none"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <h1 className="text-lg font-black text-primary flex items-center tracking-tight">
              BechDal<span className="text-secondary font-extrabold">.com</span>
            </h1>
          </Link>

          {/* Location Selector shortcut */}
          <div 
            onClick={() => setIsLocationDropdownOpen(true)}
            className="flex items-center gap-1 cursor-pointer bg-slate-50 border border-border px-2.5 py-1 rounded-md text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <MapPin size={13} className="text-primary" />
            <span>{selectedLocation}</span>
          </div>

        </div>

        {/* Row 2: Full-width search bar */}
        <div className="px-4 py-2 border-b border-slate-100">
          <form 
            onSubmit={(e) => handleSearchSubmit(e)}
            className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden relative"
          >
            <Search size={14} className="text-slate-400 ml-2.5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search mobiles, electronics, sofas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="flex-1 w-full pl-2 pr-3 py-1.5 text-xs outline-none bg-transparent text-text"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery("")}
                className="p-1 mr-1 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                <X size={13} />
              </button>
            )}
            
            {/* Suggestions Overlay inside mobile search */}
            {isSearchFocused && (
              <div className="absolute top-[38px] left-0 right-0 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150">
                {!searchQuery.trim() ? (
                  <div className="p-3">
                    <div className="text-[9px] uppercase tracking-wider font-extrabold text-text-muted mb-2">
                      Popular Searches
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {popularSearchTags.slice(0, 6).map((tag, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => selectSuggestedSearch(tag)}
                          className="bg-slate-50 hover:bg-primary-light/5 text-[10px] font-semibold text-text-muted hover:text-primary px-2.5 py-1.5 rounded-full border border-slate-200 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {suggestedCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        <Search size={11} className="text-text-muted" />
                        <span>Search in <span className="font-bold">{cat.title}</span></span>
                      </Link>
                    ))}
                    {suggestedProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/product/${prod.id}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        <img src={prod.image} alt={prod.title} className="w-6 h-6 object-cover rounded" />
                        <span className="truncate">{prod.title}</span>
                      </Link>
                    ))}
                    <button 
                      type="submit" 
                      className="w-full text-center py-2 text-xs font-bold text-primary hover:bg-slate-50"
                    >
                      Search for "{searchQuery}"
                    </button>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Row 3: Horizontally scrollable category shortcuts */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar px-4 py-2 border-b border-slate-100 bg-slate-50/50">
          {searchCategories.filter(c => c.id !== "all").map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="flex items-center gap-1 bg-white border border-slate-200/80 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-700 hover:text-primary transition-colors whitespace-nowrap shadow-2xs"
            >
              <span>{cat.name}</span>
            </Link>
          ))}
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
          <div className="relative w-full max-w-[280px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250">
            
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs opacity-80 leading-none">Welcome to</span>
                <span className="text-lg font-black tracking-tight mt-0.5 flex items-center gap-0.5">
                  BechDal<span className="text-secondary font-black">.com</span>
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full text-white/95 hover:bg-white/10 transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body Scroll */}
            <div className="flex-1 overflow-y-auto py-2">
              
              {/* Marketing Value Proposition Banner */}
              <div className="mx-3 my-2.5 p-3 rounded-xl bg-orange-50 border border-orange-100 flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-orange-700 flex items-center gap-1">
                  <Sparkles size={11} className="fill-orange-500 text-orange-500" /> Value Proposition
                </span>
                <h4 className="text-xs font-black text-slate-800 mt-1">Maximum Bachat</h4>
                <p className="text-[10px] text-text-muted mt-0.5 font-bold leading-normal">
                  Zero hidden charges. No platform fees. Save more on every transaction.
                </p>
              </div>

              {/* Main Links */}
              <div className="px-2 divide-y divide-slate-100">
                <div className="py-2.5">
                  <Link
                    href="/sell"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-lg text-xs font-extrabold text-primary"
                  >
                    <PlusCircle size={16} />
                    <span>Sell Now (Post Free Ad)</span>
                  </Link>
                  <Link
                    href="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700"
                  >
                    <Heart size={16} className="text-text-muted" />
                    <span>My Wishlist ({wishlistItems.length})</span>
                  </Link>
                  <Link
                    href="/inbox"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700"
                  >
                    <Inbox size={16} className="text-text-muted" />
                    <span>My Chats / Inbox</span>
                  </Link>
                </div>

                {/* Categories Links */}
                <div className="py-2.5">
                  <div className="px-3 pb-1 text-[9px] uppercase tracking-wider font-extrabold text-text-muted">
                    Browse Categories
                  </div>
                  {searchCategories.filter(c => c.id !== "all").map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Help Links */}
                <div className="py-2.5">
                  <a
                    href="#"
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-text-muted hover:bg-slate-50 rounded-lg"
                  >
                    <HelpCircle size={15} />
                    <span>Help & Support</span>
                  </a>
                  <div className="px-3 pt-3 text-[10px] text-text-light font-medium">
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
