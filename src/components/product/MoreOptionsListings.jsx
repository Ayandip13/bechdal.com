"use client";

import { useMemo } from "react";
import Link from "next/link";
import { categoryProducts } from "@/constants/categoryData";
import { Sparkles, ArrowRight, ShieldCheck, Tag } from "lucide-react";

export default function MoreOptionsListings({ productTitle, currentProductPrice }) {
  
  const alternatives = useMemo(() => {
    if (!productTitle) return [];

    const words = productTitle.toLowerCase()
      .replace(/[\(\)\-\,]/g, "")
      .split(" ")
      .filter(w => w.length > 2 && w !== "and" && w !== "for" && w !== "with");

    // Gather all products in catalog
    let allProducts = [];
    Object.keys(categoryProducts).forEach((key) => {
      allProducts = [...allProducts, ...categoryProducts[key]];
    });

    // Score products based on matching words
    const matches = allProducts
      .map(p => {
        let score = 0;
        const pTitle = p.title.toLowerCase();
        words.forEach(word => {
          if (pTitle.includes(word)) score += 1;
        });
        return { product: p, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.product)
      // Limit to 4 options and exclude exact same price (which might indicate the exact same item page)
      .filter(p => p.price.toString() !== currentProductPrice?.toString())
      .slice(0, 4);

    return matches;
  }, [productTitle, currentProductPrice]);

  if (alternatives.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs">
      
      {/* Header banner */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 text-white p-1.5 rounded-lg">
            <Tag size={14} className="fill-amber-500 text-white" />
          </div>
          <h3 className="font-extrabold text-sm sm:text-base text-slate-800">
            More Options / Alternative Listings
          </h3>
        </div>
        <span className="text-[10px] text-primary bg-primary-light/10 px-2 py-0.5 rounded-full font-black uppercase tracking-wider hidden sm:inline-block">
          Bachat Deals
        </span>
      </div>

      {/* Alternatives Grid / Stack */}
      <div className="grid grid-cols-1 gap-2.5">
        {alternatives.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="bg-white border border-slate-100 hover:border-slate-300 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 transition-all hover:shadow-2xs cursor-pointer group"
          >
            {/* Left: Thumbnail & Info */}
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-lg object-cover border border-slate-100 flex-shrink-0"
              />
              <div className="min-w-0 text-left">
                <h4 className="text-xs font-bold text-slate-800 truncate leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                
                {/* Meta details */}
                <div className="flex items-center flex-wrap gap-2 mt-1">
                  <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.condition}
                  </span>
                  <span className="text-[10px] text-text-muted font-semibold">
                    {item.location.split(",")[0]}
                  </span>
                  {item.isVerifiedSeller && (
                    <span className="text-[10px] text-primary font-bold flex items-center gap-0.5">
                      <ShieldCheck size={11} /> Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Price & Redirect */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100">
              <div className="flex flex-col text-left sm:text-right">
                <span className="text-xs text-text-light font-medium">Alternative Price</span>
                <span className="font-extrabold text-sm sm:text-base text-slate-900">
                  ₹{item.price.toString().replace("₹", "")}
                </span>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all flex-shrink-0">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
