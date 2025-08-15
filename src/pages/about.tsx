import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Features from "../components/about/features";
import MaxWidthWrapper from "../components/max-width-wrapper";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import SEO from "../seo";

function About() {
  return (
    <>
      <SEO
        title="About VizSchool LMS | Our Mission and Vision for Learning"
        description="Discover the mission, vision, and story behind VizSchool LMS. Learn how we make education flexible, accessible, and empowering for every student."
        canonical="https://yourdomain.com/about"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About VizSchool LMS",
          url: "https://yourdomain.com/about",
        }}
      />
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatedMeshGradient primaryColor="#FD8735" secondaryColor="#007AFF" overlayOpacity={0.3} />

        <MaxWidthWrapper className="relative z-10 space-y-6 text-center text-white">
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              amount: "all",
              once: true,
            }}>
            <Badge className="font-semibold rounded-full py-1 border-none bg-white/20 backdrop-blur-sm">
              Our Vision for Learning
            </Badge>
          </motion.div>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
            Empowering students to learn anytime, anywhere.
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
            className="text-balance text-[17px] md:text-lg">
            We envision a future where every learner can explore knowledge anytime, anywhere—free from limits. Our
            mission is to remove barriers to education, empowering students to learn at their own pace.
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
            }}
            className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-white">
              Hear from our community
              <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </motion.div>
        </MaxWidthWrapper>
      </div>
      <Features />
    </>
  );
}

export default About;
