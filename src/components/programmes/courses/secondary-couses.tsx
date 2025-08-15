import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const secondarySchoolCourses = [
  {
    category: "English",
    gradeLevel: "Secondary 1",
    price: "S$80",
    tutor: "Mr. Adrian Koh",
    title: "English Literature & Writing",
    excerpt:
      "Dive into classic and modern literature while developing strong analytical writing and comprehension skills.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    category: "Mathematics",
    gradeLevel: "Secondary 1",
    price: "S$90",
    tutor: "Ms. Clarissa Tan",
    title: "Algebra and Geometry",
    excerpt: "Build a strong foundation in algebraic expressions, equations, and geometric reasoning.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    category: "Science",
    gradeLevel: "Secondary 1",
    price: "S$85",
    tutor: "Dr. Samuel Lee",
    title: "Physics Foundations",
    excerpt: "Learn the fundamentals of motion, forces, and energy through experiments and problem-solving exercises.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    category: "English",
    gradeLevel: "Secondary 2",
    price: "Free",
    tutor: "Ms. Nadine Ong",
    title: "Communication & Debate",
    excerpt:
      "Enhance persuasive speaking, critical thinking, and writing skills through structured debates and discussions.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    category: "Mathematics",
    gradeLevel: "Secondary 2",
    price: "S$95",
    tutor: "Mr. Vincent Ho",
    title: "Advanced Algebra",
    excerpt: "Tackle quadratic equations, inequalities, and algebraic problem-solving at an intermediate level.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    category: "Science",
    gradeLevel: "Secondary 2",
    price: "Free",
    tutor: "Ms. Caroline Goh",
    title: "Chemistry for Beginners",
    excerpt:
      "Discover the basics of atoms, molecules, and chemical reactions through engaging lessons and lab simulations.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    category: "Art",
    gradeLevel: "Secondary 3",
    price: "S$50",
    tutor: "Mr. Ethan Lim",
    title: "Digital Arts and Graphic Design",
    excerpt: "Learn the principles of digital illustration, photo editing, and creative design projects.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    category: "ICT",
    gradeLevel: "Secondary 3",
    price: "S$100",
    tutor: "Ms. Fiona Chen",
    title: "Introduction to Programming",
    excerpt: "Get started with coding concepts, logic building, and hands-on projects in Python.",
    image: "/assets/reviews/blog-9.png",
  },
  {
    category: "Physical Education",
    gradeLevel: "Secondary 4",
    price: "Free",
    tutor: "Coach Leonard Tan",
    title: "Fitness and Team Sports",
    excerpt: "Improve physical endurance, coordination, and teamwork through various indoor and outdoor activities.",
    image: "/assets/reviews/blog-6.png",
  },
];

function SecondaryCourses() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {secondarySchoolCourses.map((details, i) => (
        <Card key={i} className="shadow-none pt-0 overflow-hidden">
          <CardHeader className="p-0">
            <div
              style={{
                backgroundImage: `url(${details.image})`,
              }}
              className="aspect-video bg-cover rounded-lg w-full"
            />
          </CardHeader>
          <CardContent className="pt-4 pb-5">
            <div className="space-x-2">
              <Badge className="font-semibold">{details.category}</Badge>
              <Badge className="font-semibold" variant={"outline"}>
                {details.gradeLevel}
              </Badge>
            </div>
            <div className="space-y-2">
              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">{details.title}</h3>
              <p className="text-muted-foreground text-sm md:text-[17px] line-clamp-2">{details.excerpt}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-muted-foreground font-semibold">{details.tutor}</span>
              </div>
              <Badge className="bg-green-100 text-green-500 rounded-full px-3 text-xs font-bold uppercase">
                {details.price}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button
              size={"lg"}
              variant={"ghost"}
              className="py-5 w-full font-semibold bg-primary/10 hover:bg-primary text-primary hover:text-white gap-2">
              Enrol now
              <ArrowUpRight />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default SecondaryCourses;
