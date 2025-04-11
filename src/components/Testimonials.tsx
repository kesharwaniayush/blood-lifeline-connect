
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Updated testimonials with authentic Indian names
const testimonials = [
  {
    id: 1,
    name: "Priya Patel",
    role: "Regular Donor",
    image: null,
    initials: "PP",
    quote: "I've been donating blood for 5 years now. The BloodLifeline platform makes it so much easier to find donation centers and track my impact. It feels amazing to know exactly how my donations help people in need.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Blood Recipient",
    image: null,
    initials: "RS",
    quote: "After my accident, I needed multiple blood transfusions. Thanks to generous donors on BloodLifeline, I was able to receive the blood I needed quickly. I'm now a donor myself to give back to the community that saved me.",
  },
  {
    id: 3,
    name: "Dr. Anjali Reddy",
    role: "Hospital Administrator",
    image: null,
    initials: "AR",
    quote: "BloodLifeline has revolutionized how our hospital manages blood inventory. The real-time availability dashboard and emergency request system have significantly reduced our response time for critical cases.",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blood-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What People Are Saying</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from donors, recipients, and healthcare professionals who've experienced the impact of blood donation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl text-blood-300">"</span>
                </div>
                <p className="text-gray-700 mb-4 text-center italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center justify-center pt-4 border-t border-gray-200">
                <Avatar className="h-10 w-10 mr-3 border-2 border-blood-100">
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  ) : null}
                  <AvatarFallback className="bg-blood-100 text-blood-600">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
