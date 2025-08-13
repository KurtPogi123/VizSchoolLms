import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EnrollNowCTA from "../components/programmes/enroll-now-cta";
import EnrollNowForm from "../components/programmes/enroll-now-form";
import FAQ from "../components/programmes/faq";
import Hero from "../components/programmes/hero";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer";

function Programmes() {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatedMeshGradient primaryColor="#FD8735" secondaryColor="#007AFF" overlayOpacity={0.3} />
        <Hero />
      </div>
      <EnrollNowCTA />
      <EnrollNowCTAMobile />
      <Features />
      <FAQ />
    </>
  );
}

const features = [
  {
    category: "Learning Experience",
    title: "Engage in interactive online classes",
    details:
      "Join live virtual lessons with real-time discussions, shared screens, and collaborative tools—making online learning as dynamic and engaging as being in a physical classroom.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-1.jpeg",
  },
  {
    category: "Progress Tracking",
    title: "See growth through easy-to-read reports",
    details:
      "Every class activity is automatically recorded and turned into simple, visual progress reports—helping parents and students stay on track with their learning goals.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-2.jpeg",
  },
  {
    category: "Teacher Support",
    title: "Get help beyond class hours",
    details:
      "Experienced teachers provide week-long support through chat, personalised feedback, and extra resources—so learning continues even after the live session ends.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-3.jpeg",
  },
];

function Features() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-screen-lg w-full">
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20 lg:space-y-28">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div
                style={{
                  backgroundImage: `url(${feature.imageUrl})`,
                }}
                className="w-full aspect-[4/2] rounded-xl basis-1/2 bg-cover"
              />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">{feature.category}</span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">{feature.title}</h4>
                <p className="text-muted-foreground text-[17px]">{feature.details}</p>
                <Button asChild className="mt-6 rounded-full min-w-40 text-[15px]">
                  <Link to={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnrollNowCTAMobile() {
  return (
    <Drawer>
      <DrawerTrigger className="fixed z-20 bottom-4 flex lg:hidden" asChild>
        <div className="w-full">
          <Button size="lg" className="text-lg font-extrabold py-7 !px-8 w-11/12 mx-auto gap-2 hover:bg-orange-500">
            Secure a slot now <ArrowUpRight className="stroke-3 size-5" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-start justify-between p-4 gap-4 bg-muted mt-2">
          <div className="inline-block space-y-2">
            <Badge className="uppercase rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
              Secure a slot now
            </Badge>
            <DrawerTitle className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Sign up now
            </DrawerTitle>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-[#71C5E8] text-xs rounded-full">English</Badge>
            <Badge className="text-xs rounded-full">Math</Badge>
            <Badge className="bg-[#C6579A] text-xs rounded-full">Science</Badge>
            <Badge className="bg-[#615E9B] text-xs rounded-full">History</Badge>
          </div>
        </DrawerHeader>
        <EnrollNowForm />
        <DrawerFooter className="pt-0">
          <p className="text-pretty text-xs text-muted-foreground">
            By submitting your phone number, we have your permission to contact you regarding Geniebook. See our{" "}
            <span className="underline font-medium">Privacy Policy</span>.
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Programmes;
