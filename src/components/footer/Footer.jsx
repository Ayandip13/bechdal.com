import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import { footerLinks } from "@/constants/dummyData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1128] pt-16 pb-8 border-t-4 border-secondary mt-8 rounded-t-3xl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col pr-4">
            <div className="mb-4">
              <h2 className="text-3xl font-extrabold tracking-tight">
                <span className="text-white">BechDal</span>
                <span className="text-secondary">.com</span>
              </h2>
              <p className="text-white text-sm mt-1">Buy. Sell. Anything.</p>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              BechDal.com is your one-stop platform to buy, sell, rent anything. 100% Free and Easy to use. Join thousands of users today.
            </p>
            
            <SocialLinks />
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <FooterColumn title={column.title} links={column.links} />
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BechDal.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
