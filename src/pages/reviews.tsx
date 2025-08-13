import MaxWidthWrapper from "../components/max-width-wrapper";
import Blog from "../components/reviews/blog";
import Testimonials from "../components/reviews/testimonials";

function Reviews() {
  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <Testimonials />
      <Blog />
    </MaxWidthWrapper>
  );
}

export default Reviews;
