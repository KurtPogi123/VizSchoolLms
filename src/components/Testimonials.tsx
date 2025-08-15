import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "VieSchool has been an amazing addition to my child's education. The virtual classes and interactive lessons keep her engaged, and she's learning skills beyond the regular school curriculum. ",
      name: "Maria D.",
      title: "Parent of a Grade 7 Student",
      image: "/assets/testimonial1.png",
    },
    {
      id: 2,
      text: "The personalized learning approach has transformed how my son approaches his studies. He's more confident and excited about learning new topics every day.",
      name: "John S.",
      title: "Parent of a Grade 5 Student",
      image: "/assets/testimonial2.png",
    },
    {
      id: 3,
      text: "As a teacher, I've seen remarkable improvement in my students' engagement levels. The interactive platform makes learning fun and accessible for everyone.",
      name: "Sarah M.",
      title: "Elementary School Teacher",
      image: "/assets/teacher.jpg",
    },
    {
      id: 4,
      text: "The flexibility of online learning combined with high-quality content has been perfect for our family's busy schedule. My daughter loves the gamified learning experience!",
      name: "David L.",
      title: "Parent of a Grade 4 Student",
      image: "/assets/testomonial3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Real Stories, Real Success:</h2>
          <h3 className="text-4xl font-bold text-gray-900">What Parents & Students Say!</h3>
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden border-4 border-orange-400 shadow-lg">
                <img
                  src={currentTestimonial.image}
                  alt="Student learning"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
              <div className="text-6xl text-orange-400 mb-4 leading-none">"</div>
              <p
                className="text-gray-700 text-lg leading-relaxed mb-6 italic min-h-[140px]"
                // 👆 keeps text block height consistent
              >
                {currentTestimonial.text}
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-orange-500 text-lg">{currentTestimonial.name}</h4>
                <p className="text-gray-600">{currentTestimonial.title}</p>
              </div>

              {/* Navigation */}
              <div className="flex justify-start gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial">
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-orange-400 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-400" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
