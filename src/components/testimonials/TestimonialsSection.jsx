import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants/dummyData";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-2">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight mb-2">What Our Customers Say</h2>
        <p className="text-text-muted dark:text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm">
          Read real stories from thousands of happy buyers and sellers who trust BechDal for their daily marketplace needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="snap-start shrink-0 flex-1 min-w-[300px]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
}

