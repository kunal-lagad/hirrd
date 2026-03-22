
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Search, Sparkles } from "lucide-react";
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-14 py-6 sm:gap-24 sm:py-10">
      {/* HERO */}
      <section className="relative overflow-x-hidden rounded-2xl border border-border/50 bg-card/40 px-4 py-10 text-center shadow-sm backdrop-blur-sm sm:px-8 sm:py-16 md:py-20">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Hire faster. Apply smarter.
        </Badge>
        {/* FIXED TITLE */}
        <h1 className="relative font-extrabold tracking-tight text-center">
          <span className="gradient-title block text-4xl sm:text-6xl lg:text-7xl">
            Find Your Dream Job
          </span>
          <span className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4 text-3xl sm:text-5xl lg:text-6xl">
            <span className="text-muted-foreground">and get</span>
            <img
              src="/logo.png"
              alt="Hirrd"
              className="h-10 sm:h-14 md:h-16 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-lg">
          Explore thousands of listings, save roles you love, and connect with
          teams that match your goals.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/jobs">
            <Button size="xl" className="w-full sm:w-auto gap-2">
              <Search className="h-5 w-5" />
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto border-primary/30"
            >
              Post a Job
            </Button>
          </Link>
        </div>
      </section>
      {/* COMPANIES */}
      <section className="rounded-2xl border border-border/50 bg-muted/20 p-4 sm:p-6">
        <p className="mb-4 text-center text-xs uppercase tracking-wider text-muted-foreground">
          Trusted by teams at
        </p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2200,
            }),
          ]}
        >
          <CarouselContent>
            {companies.map(({ name, id, path }) => (
              <CarouselItem
                key={id}
                className="basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <img
                  src={path}
                  alt={name}
                  className="mx-auto h-8 object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 sm:h-12"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* FEATURED IMAGE (NO GAP, NO CROP) */}
      <section className="px-3 sm:px-6 md:px-10 lg:px-14">
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/20 shadow-md ring-1 ring-border/30">
          <img
            src="/banner.jpeg"
            alt="Featured banner"
            className="w-full h-auto object-contain rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
      {/* CARDS */}
      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Search className="h-5 w-5" />
            </div>
            <CardTitle>For job seekers</CardTitle>
            <CardDescription>
              Search, filter, and apply in one place.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Built for clarity—no clutter, just relevant jobs.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
              <Building2 className="h-5 w-5" />
            </div>
            <CardTitle>For employers</CardTitle>
            <CardDescription>
              Manage hiring efficiently.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Reach candidates faster with a clean workflow.
          </CardContent>
        </Card>
      </section>
      {/* FAQ */}
      <section className="rounded-2xl border border-border/50 bg-card/30 p-4 sm:p-6">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Frequently asked questions
        </h2>
        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};
export default LandingPage;
