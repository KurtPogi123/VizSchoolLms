import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const enrichmentCourses = [
  {
    category: "Music",
    price: "S$80",
    tutor: "Mr. Adrian Koh",
    title: "Beginner Piano for Kids",
    excerpt: "Learn the basics of piano playing, reading musical notes, and performing simple songs with confidence.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    category: "Coding",
    price: "S$100",
    tutor: "Ms. Felicia Tan",
    title: "Coding with Scratch",
    excerpt:
      "Introduce young learners to programming concepts through fun, drag-and-drop coding activities using Scratch.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    category: "Public Speaking",
    price: "S$70",
    tutor: "Mrs. Grace Lim",
    title: "Confident Communicators Workshop",
    excerpt: "Boost self-esteem and improve communication skills through speech practice, storytelling, and role-play.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    category: "Drama",
    price: "S$65",
    tutor: "Mr. Jonathan Ong",
    title: "Acting and Stage Performance",
    excerpt:
      "Discover the art of drama, from improvisation to stage presence, in a supportive and creative environment.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    category: "Robotics",
    price: "S$120",
    tutor: "Mr. Samuel Lee",
    title: "LEGO Robotics for Beginners",
    excerpt: "Build and program simple robots using LEGO kits while learning engineering and problem-solving skills.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    category: "Creative Writing",
    price: "S$55",
    tutor: "Ms. Amanda Wong",
    title: "Storytelling and Creative Writing",
    excerpt:
      "Encourage imagination and writing skills through guided story creation, poems, and journaling activities.",
    image: "/assets/reviews/blog-6.png",
  },
  {
    category: "Art",
    price: "S$50",
    tutor: "Ms. Clarissa Tan",
    title: "Watercolor Painting for Kids",
    excerpt:
      "Explore watercolor techniques to create vibrant, expressive artwork inspired by nature and everyday life.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    category: "Dance",
    price: "S$60",
    tutor: "Ms. Chloe Ng",
    title: "Hip-Hop Dance Basics",
    excerpt: "Learn fun, energetic dance routines while improving rhythm, flexibility, and coordination.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    category: "STEM",
    price: "S$90",
    tutor: "Dr. Matthew Chan",
    title: "Fun Science Experiments",
    excerpt:
      "Engage in exciting hands-on experiments to learn about chemistry, physics, and biology in a safe lab setting.",
    image: "/assets/reviews/blog-9.png",
  },
];

function EnrichmentCourses() {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {enrichmentCourses.map((details, i) => (
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
            <Badge className="font-semibold">{details.category}</Badge>

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

export default EnrichmentCourses;
