import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CardContainer } from "../ui/3d-card";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-8">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12">
        <div className="my-auto">
          <motion.h1
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            className="text-primary max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold !leading-[1.2] tracking-tight">
            Our Tutors
          </motion.h1>
          <motion.p
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            className="mt-6 max-w-[60ch] text-lg">
            At VizSchool, our tutors do more than teach—they mentor, guide, and inspire every learner. With real
            classroom expertise and innovative tools, they deliver engaging, personalized lessons that build confidence,
            skills, and a love for learning.
          </motion.p>
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              amount: "all",
              once: true,
            }}>
            <Button size="lg" className="mt-12 text-base lg:text-lg font-extrabold py-6 lg:py-7 gap-2">
              Explore our courses
              <ArrowUpRight className="size-5 stroke-3" />
            </Button>
          </motion.div>
        </div>
        <CardContainer className="w-full">
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            style={{
              backgroundImage: "url(/assets/our-tutors/teacher.webp)",
            }}
            className="relative flex items-center justify-center w-full aspect-video bg-accent rounded-2xl overflow-hidden border-8 border-white bg-cover shadow"
          />
        </CardContainer>
      </div>
    </div>
  );
}

export default Hero;
