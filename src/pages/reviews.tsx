import Blog from "../components/about/blog";
import MaxWidthWrapper from "../components/max-width-wrapper";
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
