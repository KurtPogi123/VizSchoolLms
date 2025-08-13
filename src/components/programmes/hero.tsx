import { CirclePlay } from "lucide-react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="z-10 max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
      <div className="text-white">
        <div className="-space-y-1">
          <h1 className="mt-6 text-xl md:text-2xl font-bold">VizSchool</h1>
          <p className="font-extrabold text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">Campus</p>
        </div>
        <p className="mt-6 text-xl md:text-2xl font-bold">Engaging and effective learning made affordable</p>
        <div className="mt-6 flex items-center gap-4">
          <Button size="lg" className="text-lg font-extrabold py-6 w-2/5">
            Sign up now
          </Button>

          <Button variant="outline" size="lg" className="text-lg font-extrabold py-6 w-2/5 bg-transparent">
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(/assets/programmes/programmes-hero.jpg)`,
        }}
        className="w-full aspect-video bg-cover rounded-4xl border-6 lg:border-8 border-primary"
      />
    </div>
  );
}

export default Hero;
