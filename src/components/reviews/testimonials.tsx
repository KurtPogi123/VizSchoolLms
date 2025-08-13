import { Plus } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

const testimonials = [
  {
    name: "Aiden Cruz",
    role: "Student - Secondary 2",
    testimonial: "Learning here is actually fun!", // short
    avatar: "https://randomuser.me/api/portraits/teen/1.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Parent - Mother of Primary 3 Student",
    testimonial:
      "My daughter looks forward to her lessons every day. VizSchool has made online learning engaging and easy to follow.", // medium
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Student - Secondary 4",
    testimonial:
      "The teachers really know how to make lessons interesting. I used to struggle in Science, but the interactive activities here helped me understand faster and retain more.", // long
    avatar: "https://randomuser.me/api/portraits/teen/3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Parent - Mother of Primary 5 Student",
    testimonial:
      "My son’s confidence has grown so much since enrolling in VizSchool. He’s now answering questions in class without hesitation and enjoys working on projects.", // medium
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Daniel Martinez",
    role: "Parent - Father of Secondary 1 Student",
    testimonial:
      "Enrolling my son in VizSchool was the best decision we made this year. The teachers provide personalized feedback, the lessons are well-structured, and the platform is easy to use. I’ve seen a real improvement in his grades and study habits, and he’s more motivated than ever to learn.", // very long
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Jane Smith",
    role: "Student - Primary 6",
    testimonial: "The lessons are clear and easy to follow.", // short
    avatar: "https://randomuser.me/api/portraits/teen/2.jpg",
  },
  {
    name: "Carlos Reyes",
    role: "Parent - Father of Primary 4 Student",
    testimonial:
      "Since joining VizSchool, my daughter has become more responsible with her schoolwork. She’s excited about her subjects and even reviews her notes without being told.", // long
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Hannah Park",
    role: "Student - Secondary 3",
    testimonial:
      "The platform makes it so easy to find lessons, quizzes, and my progress. I feel more organized and less stressed about schoolwork.", // medium
    avatar: "https://randomuser.me/api/portraits/teen/9.jpg",
  },
  {
    name: "Liam Carter",
    role: "Parent - Father of Primary 2 Student",
    testimonial:
      "VizSchool has taken away the stress of keeping track of lessons and homework. I can see exactly what my son is learning, and the teachers are quick to give updates. It’s reassuring to know he’s getting quality education even from home.", // long
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

function Testimonials() {
  const [studentParentTestimonials, setStudentParentTestimonials] = useState(testimonials);

  function seeMoreParentsAndStudentsTestimonials() {
    setStudentParentTestimonials((prev) => {
      const shuffled = testimonials.slice().sort(() => Math.random() - 0.5);
      return [...prev, ...shuffled];
    });
  }

  return (
    <div className="min-h-screen flex justify-center items-center py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center">
        <h2 className="text-primary mb-14 text-4xl md:text-5xl font-extrabold text-center tracking-tighter">
          What parents & students say!
        </h2>
        <div className="relative max-w-screen-xl mx-auto">
          <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-8">
            {studentParentTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="mb-8 rounded-xl p-6 break-inside-avoid shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="#" target="_blank">
                      <TwitterLogo className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
          {studentParentTestimonials.length < 24 && (
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        {studentParentTestimonials.length < 24 && (
          <Button
            onClick={() => seeMoreParentsAndStudentsTestimonials()}
            variant={"ghost"}
            size={"lg"}
            className="text-primary font-extrabold text-2xl py-6 hover:-translate-y-1 cursor-pointer">
            <Plus className="stroke-4 size-6" /> More testimonials
          </Button>
        )}
      </div>
    </div>
  );
}

function TwitterLogo(props: ComponentProps<"svg">) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  );
}
export default Testimonials;
