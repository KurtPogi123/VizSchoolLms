import MaxWidthWrapper from "../components/max-width-wrapper";

import Testimonials from "../components/reviews/testimonials";
import SEO from "../seo";

function Reviews() {
  return (
    <>
      <SEO
        title="Student and Parent Reviews | VizSchool LMS Experience"
        description="Read reviews from students and parents who have experienced VizSchool LMS. See how our platform transforms learning into an engaging journey."
        canonical="https://yourdomain.com/reviews"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ReviewPage",
          name: "Reviews",
          url: "https://yourdomain.com/reviews",
        }}
      />

      <MaxWidthWrapper className="max-w-screen-xl">
        <Testimonials />
      </MaxWidthWrapper>
    </>
  );
}

export default Reviews;
