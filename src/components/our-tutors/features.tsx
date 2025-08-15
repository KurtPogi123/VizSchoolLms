import { GraduationCap, Users } from "lucide-react";

function Features() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-bl from-accent/60 to-white" />
      <div className="w-full max-w-screen-lg mx-auto py-12">
        <h2 className="text-primary text-2xl leading-10 sm:text-3xl md:text-[38px] md:leading-[3.25rem] font-extrabold tracking-tight">
          Meet Our Tutors: <br />
          Inspiring Minds, One Lesson at a Time
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            <div
              style={{
                backgroundImage: "url(/assets/our-tutors/our-tutors-1.jpg)",
              }}
              className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl bg-cover"
            />
            <span className="text-2xl font-bold text-primary tracking-tight">Expert Educators</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <GraduationCap className="shrink-0" />
                  <p className="-mt-0.5">
                    Our tutors are certified educators with real classroom experience, bringing their expertise into
                    every lesson.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Users className="shrink-0" />
                  <p className="-mt-0.5">
                    They mentor, guide, and inspire learners—ensuring every student feels supported on their journey.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            style={{
              backgroundImage: "url(/assets/our-tutors/our-tutors-1.jpg)",
            }}
            className="hidden md:block border border-border/80 bg-cover rounded-xl col-span-1 md:col-span-3 lg:col-span-2"
          />

          <div
            style={{
              backgroundImage: "url(/assets/our-tutors/our-tutors-2.webp)",
            }}
            className="hidden md:block border border-border/80 bg-cover rounded-xl col-span-1 md:col-span-3 lg:col-span-2"
          />

          <div className="bg-white rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            <div
              style={{
                backgroundImage: "url(/assets/our-tutors/our-tutors-2.webp)",
              }}
              className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl bg-cover"></div>

            <span className="text-2xl font-bold text-primary tracking-tight">Personalised Learning</span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <GraduationCap className="shrink-0" />
                  <p className="-mt-0.5">
                    Lessons are tailored to each student’s pace, strengths, and goals for maximum growth.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Users className="shrink-0" />
                  <p className="-mt-0.5">
                    From academics to special skills, our tutors help students excel in every area of learning.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
