import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlayCircle, PlusIcon, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import { Button } from "../ui/button";

const faq = [
  {
    question: "What is VizSchool?",
    answer:
      "VizSchool is an online learning platform with live virtual classes, interactive activities, and personalised teacher support—bringing the classroom experience straight to your device.",
  },
  {
    question: "How do I join a class?",
    answer:
      "After enrolling, you’ll receive a class link via email and in your dashboard. Simply click the link at the scheduled time to join your live virtual session.",
  },
  {
    question: "Can I access lessons after they’re over?",
    answer:
      "Yes! All live classes are recorded and stored in your account so you can replay them anytime, along with any shared resources or assignments.",
  },
  {
    question: "What devices can I use for VizSchool?",
    answer:
      "You can join classes using a laptop, tablet, or smartphone. For the best experience, we recommend a stable internet connection, a webcam, and a microphone.",
  },
  {
    question: "What if I have technical issues during a class?",
    answer:
      "Our support team is here to help. You can reach us via live chat or email, and we’ll guide you through troubleshooting so you can get back to learning quickly.",
  },
];

function FAQ() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-muted">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl md:text-4xl !leading-[1.15] font-extrabold tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-1.5 text-lg text-muted-foreground">
            Quick answers to common questions about our products and services.
          </p>

          <Accordion type="single" collapsible className="mt-8 space-y-4" defaultValue="question-0">
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`} className="bg-white py-1 px-4 rounded-xl">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "text-primary flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}>
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 stroke-primary stroke-3" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary/10 text-primary">
                  Watch How It Works
                </span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience VizSchool in Action
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Watch our quick demo to see how virtual classes work, how students join, and the interactive features
                  that make online learning engaging.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Simple enrollment and class setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Easy-to-use virtual classroom</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Guided tour of learning features</span>
                </li>
              </ul>

              <Button size="lg" className="mt-2 font-extrabold py-6 w-max">
                Sign up now
              </Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border shadow-lg">
              {isPlaying ? (
                <div className="relative w-full h-full">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-2 right-2 z-10 rounded-full bg-background/80 p-1.5 backdrop-blur-sm transition-colors hover:bg-background"
                    aria-label="Close video">
                    <X className="h-5 w-5" />
                  </button>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"></iframe>
                </div>
              ) : (
                <div className="relative h-full w-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
                  <img
                    src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Product walkthrough video thumbnail showing interface demo"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-primary text-primary-foreground p-2 transition-transform group-hover:scale-110">
                      <PlayCircle className="h-12 w-12" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
