import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants/dummyData";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f8fafc] rounded-2xl p-6 md:p-10 shadow-subtle border border-border/50">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text mb-2">What Our Customers Say</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
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
