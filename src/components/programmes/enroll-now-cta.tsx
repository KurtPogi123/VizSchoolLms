"use client";

import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import EnrollNowForm from "./enroll-now-form";

function EnrollNowCTA() {
  return (
    <MaxWidthWrapper className="hidden lg:block relative z-10 max-w-screen-xl">
      <Card className="mt-[-104px] pt-0 overflow-hidden rounded-3xl">
        <CardHeader className="flex justify-between items-end bg-muted p-4">
          <div className="inline-block space-y-2">
            <Badge className="uppercase rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
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
            By submitting your phone number, we have your permission to contact you regarding Geniebook. See our{" "}
            <span className="underline font-medium">Privacy Policy</span>.
          </p>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}

export default EnrollNowCTA;
