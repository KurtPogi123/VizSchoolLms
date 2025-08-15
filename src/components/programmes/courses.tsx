import MaxWidthWrapper from "../max-width-wrapper";
import { buttonVariants } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import EnrichmentCourses from "./courses/enrichment-courses";
import PrimaryCourses from "./courses/primary-courses";
import SecondaryCourses from "./courses/secondary-couses";

function Courses() {
  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <div className="text-center">
        <h2 className="text-primary text-3xl md:text-4xl !leading-[1.15] font-extrabold tracking-tight">
          VizSchool Courses
        </h2>
        <p className="mt-1.5 text-lg text-muted-foreground">
          Explore the wide range of courses offered by VizSchool across all programmes
        </p>
      </div>

      <div className=" py-10 md:py-14">
        <Tabs defaultValue="primary" className="w-full">
          <TabsList className="gap-2 md:gap-4 w-max mx-auto bg-white">
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-border data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-0",
              })}
              value="primary">
              Primary
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-border data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-0",
              })}
              value="secondary">
              Secondary
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-border data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-0",
              })}
              value="enrichment">
              Enrichment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="primary">
            <PrimaryCourses />
          </TabsContent>
          <TabsContent value="secondary">
            <SecondaryCourses />
          </TabsContent>
          <TabsContent value="enrichment">
            <EnrichmentCourses />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}

export default Courses;
