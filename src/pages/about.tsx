import { ArrowUpRight } from "lucide-react";
import Features from "../components/about/features";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

function About() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('/assets/gradient-bg.png')` }}
        className="min-h-screen w-full flex items-center justify-center bg-cover">
        <MaxWidthWrapper className="space-y-6 text-center text-white">
          <Badge className="font-semibold rounded-full py-1 border-none">Our Vision for Learning</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
            Empowering students to learn anytime, anywhere.
          </h1>
          <p className="text-balance text-[17px] md:text-lg">
            We envision a future where every learner can explore knowledge anytime, anywhere—free from limits. Our
            mission is to remove barriers to education, empowering students to learn at their own pace.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-transparent">
              Hear from our community
              <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
      <Features />
    </>
  );
}

export default About;
