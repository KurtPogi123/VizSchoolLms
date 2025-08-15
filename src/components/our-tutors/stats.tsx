function Stats() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto w-full py-12 px-6 xl:px-0">
        <h2 className="text-primary text-3xl md:text-4xl font-extrabold tracking-tight">
          Dedicated. Experienced. Inspiring.
        </h2>
        <p className="mt-6 text-base md:text-lg max-w-2xl text-foreground/70">
          Our tutors bring a wealth of experience, passion, and commitment to every lesson—mentoring students, guiding
          their growth, and inspiring a lifelong love for learning.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <span className="text-5xl md:text-6xl font-bold text-indigo-500">900+</span>
            <p className="mt-6 font-semibold text-xl">Students Mentored</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Hundreds of learners guided towards academic and personal success.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-rose-500">10,000+</span>
            <p className="mt-6 font-semibold text-xl">Hours of Teaching</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Extensive experience in delivering engaging, personalized lessons.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-emerald-500">420+</span>
            <p className="mt-6 font-semibold text-xl">Courses Delivered</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              From core subjects to special skills, we’ve taught it all.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-blue-500">2,000+</span>
            <p className="mt-6 font-semibold text-xl">Lessons Completed</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Every lesson is a step towards our students’ highest potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
