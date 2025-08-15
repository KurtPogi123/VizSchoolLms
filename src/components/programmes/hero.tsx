import { CirclePlay } from "lucide-react";
import { buttonVariants } from "../ui/button";

function Hero() {
  return (
    <>
      {/* Custom CSS for staggered fade-in animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-title {
          animation: fadeInUp 1.2s ease-out forwards;
        }
        
        .fade-in-subtitle {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .fade-in-description {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .fade-in-buttons {
          animation: fadeInUp 1s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        .fade-in-image {
          animation: fadeInUp 1.5s ease-out 1.2s forwards;
          opacity: 0;
        }
      `}</style>

      <div className="z-10 max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6">
        <div className="text-white">
          <div className="-space-y-1">
            <h1 className="fade-in-title mt-6 text-xl md:text-2xl font-bold">VizSchool</h1>
            <p className="fade-in-subtitle font-extrabold text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">Campus</p>
          </div>
          <p className="fade-in-description mt-6 text-xl md:text-2xl font-bold">Engaging and effective learning made affordable</p>
          <div className="fade-in-buttons mt-6 flex items-center gap-4">
            <a
              href="#sign-up"
              className={buttonVariants({
                size: "lg",
                className: "!hidden lg:!flex !text-base lg:!text-lg !font-extrabold !py-5 lg:!py-6 !w-2/5",
              })}>
              Sign up now
            </a>
             
            <a
              href="#watch-demo"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "!text-base lg:!text-lg !font-extrabold !py-5 lg:!py-6 !w-2/5 !bg-white/10 !backdrop-blur-sm !border-white/20 hover:!bg-white/20 ! hover:!text-white",
              })}>
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </a>
          </div>
        </div>
        <div
          className="fade-in-image w-full aspect-video bg-cover rounded-4xl border-6 lg:border-8 border-primary"
          style={{
            backgroundImage: `url(/assets/programmes/programmes-hero.jpg)`,
          }}
        />
      </div>
    </>
  );
}

export default Hero;