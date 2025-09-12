import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { businessDivisions, projects } from '@/lib/data';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveMap } from '@/components/interactive-map';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Building the Future, Today.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    KNS Group is a diversified conglomerate committed to excellence and innovation across construction, real estate, technology, and beyond. Our mission is to deliver sustainable value and drive progress.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/portfolio"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Our Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/kns-hero/600/400"
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint="office building skyscraper"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="divisions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Divisions
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  A Diversified Portfolio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We operate across multiple key industries, leveraging synergies to foster innovation and growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {businessDivisions.map((division) => (
                <Card key={division.name} className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                     <division.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline">{division.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{division.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Landmarks of Excellence
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A glimpse into our commitment to quality, innovation, and impactful results across our project portfolio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Image
                    src={project.imageUrl}
                    width={600}
                    height={400}
                    alt={project.name}
                    data-ai-hint={project.imageHint}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{project.name}</CardTitle>
                    <CardDescription>{project.division}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/portfolio">
                <Button variant="outline">
                  View All Projects <MoveRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section id="locations" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Our Locations
                  </div>
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                    Global Presence, Local Expertise
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore our network of offices and project sites around the world.
                  </p>
                </div>
              </div>
            <div className="mt-12">
              <InteractiveMap />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
