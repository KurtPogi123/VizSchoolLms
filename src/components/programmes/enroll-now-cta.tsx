import { ArrowUpRight } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";
import EnrollNowForm from "../programmes/enroll-now-form";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

function EnrollNowCTA() {
  return (
    <MaxWidthWrapper className="hidden lg:block relative z-10 max-w-screen-xl">
      <Card id="sign-up" className="mt-[-104px] pt-0 overflow-hidden rounded-3xl scroll-m-48">
        <CardHeader className="flex justify-between items-end bg-muted p-4">
          <div className="inline-block space-y-2">
            <Badge className="rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
              Secure a slot now
            </Badge>
            <CardTitle className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Sign up now</CardTitle>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-[#71C5E8] px-4 text-sm rounded-full">English</Badge>
            <Badge className="px-4 text-sm rounded-full">Math</Badge>
            <Badge className="bg-[#C6579A] px-4 text-sm rounded-full">Science</Badge>
            <Badge className="bg-[#615E9B] px-4 text-sm rounded-full">History</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <EnrollNowForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            By submitting your phone number, we have your permission to contact you regarding VizSchool. See our{" "}
            <span className="underline font-medium">Privacy Policy</span>.
          </p>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}

export function EnrollNowCTAMobile() {
  return (
    <Drawer>
      <DrawerTrigger className="fixed z-20 bottom-4 flex lg:hidden" asChild>
        <div className="w-full">
          <Button size="lg" className="text-lg font-extrabold py-7 !px-8 w-11/12 mx-auto gap-2 hover:bg-orange-500">
            Secure a slot now <ArrowUpRight className="stroke-3 size-5" />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-start justify-between p-4 gap-4 bg-muted mt-2">
          <div className="inline-block space-y-2">
            <Badge className="uppercase rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
              Secure a slot now
            </Badge>
            <DrawerTitle className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Sign up now
            </DrawerTitle>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-[#71C5E8] text-xs rounded-full">English</Badge>
            <Badge className="text-xs rounded-full">Math</Badge>
            <Badge className="bg-[#C6579A] text-xs rounded-full">Science</Badge>
            <Badge className="bg-[#615E9B] text-xs rounded-full">History</Badge>
          </div>
        </DrawerHeader>
        <div className="px-6">
          <EnrollNowForm />
        </div>
        <DrawerFooter className="pt-0">
          <p className="text-pretty text-xs text-muted-foreground">
            By submitting your phone number, we have your permission to contact you regarding VizSchool. See our{" "}
            <span className="underline font-medium">Privacy Policy</span>.
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default EnrollNowCTA;
