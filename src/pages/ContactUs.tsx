import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import Contact from "../components/about/contact";

const ContactUs = () => {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedMeshGradient
          primaryColor="#FD8735"
          secondaryColor="#007AFF"
          overlayOpacity={0.3}
        />
        
        {/* Foreground Content */}
        <MaxWidthWrapper className="relative z-10 space-y-6 text-center text-white">
          <Badge className="font-semibold rounded-full py-1 border-none bg-white/20 backdrop-blur-sm">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            We'd love to hear from you
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you have a question, feedback, or just want to say hello, our team is ready to help.
          </p>
          <div className="flex items-center justify-center gap-4">
           
          </div>
        </MaxWidthWrapper>
      </div>
      <Contact />
    </>
  );
};

export default ContactUs;