import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const primarySchoolCourses = [
  {
    category: "English",
    gradeLevel: "Primary 1",
    price: "Free",
    tutor: "Ms. Sarah Lim",
    title: "English Foundations",
    excerpt:
      "Build strong reading, writing, and speaking skills through interactive lessons and engaging activities for young learners.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    category: "Mathematics",
    gradeLevel: "Primary 1",
    price: "S$50",
    tutor: "Mr. Daniel Tan",
    title: "Mathematics Basics",
    excerpt: "Master counting, number recognition, and simple problem-solving through games and visual learning tools.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    category: "Science",
    gradeLevel: "Primary 1",
    price: "S$40",
    tutor: "Mrs. Elaine Wong",
    title: "Exploring the World Around Us",
    excerpt:
      "Introduce young learners to the wonders of nature, basic experiments, and how science explains everyday things.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    category: "English",
    gradeLevel: "Primary 2",
    price: "Free",
    tutor: "Ms. Rachel Ng",
    title: "English Communication Skills",
    excerpt: "Enhance vocabulary, grammar, and reading comprehension to build confident and effective communicators.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    category: "Mathematics",
    gradeLevel: "Primary 2",
    price: "S$60",
    tutor: "Mr. Alvin Lee",
    title: "Numbers and Operations",
    excerpt:
      "Deepen understanding of addition, subtraction, and basic multiplication using visual aids and practice exercises.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    category: "Science",
    gradeLevel: "Primary 2",
    price: "Free",
    tutor: "Mrs. Michelle Goh",
    title: "Discovering Habitats and Living Things",
    excerpt: "Learn about plants, animals, and their environments through exciting projects and hands-on activities.",
    image: "/assets/reviews/blog-6.png",
  },
  {
    category: "Art",
    gradeLevel: "Primary 3",
    price: "S$30",
    tutor: "Ms. Joanne Chua",
    title: "Creative Arts for Young Minds",
    excerpt: "Develop artistic expression through drawing, painting, and crafts while exploring colors and shapes.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    category: "ICT",
    gradeLevel: "Primary 3",
    price: "S$45",
    tutor: "Mr. Kelvin Chan",
    title: "Introduction to Computers",
    excerpt:
      "Gain basic computer skills, from typing to safe internet use, tailored for young primary school students.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    category: "Physical Education",
    gradeLevel: "Primary 4",
    price: "Free",
    tutor: "Coach Benjamin Ong",
    title: "Fitness and Fun Activities",
    excerpt: "Promote physical health, teamwork, and coordination through guided exercises and games.",
    image: "/assets/reviews/blog-9.png",
  },
];

function PrimaryCourses() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {primarySchoolCourses.map((details, i) => (
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

export default PrimaryCourses;
