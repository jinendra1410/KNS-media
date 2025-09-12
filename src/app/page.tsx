import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { businessDivisions, projects, groupCompanies, upcomingExhibitions, exhibitions, rbsmEvents } from '@/lib/data';
import { ArrowRight, MoveRight, Newspaper, BookOpen, Handshake, Briefcase, CalendarDays, Users, Globe, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveMap } from '@/components/interactive-map';
import { KnsLogo } from '@/components/icons';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ContactForm from '@/components/contact-form';

export default function Home() {

  const quickLinks = [
    { title: 'Exhibitions', description: 'Premier events for the pharma industry.', icon: CalendarDays, href: '/exhibitions' },
    { title: 'Publications', description: 'Insights from the forefront of the industry.', icon: BookOpen, href: '/publications' },
    { title: 'RBSM', description: 'Connecting buyers and sellers globally.', icon: Users, href: '/rbsm' },
    { title: 'International', description: 'Fostering global connections.', icon: Globe, href: '/international' },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Innovation Continues...
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Proudly celebrating 50 years of excellence and innovation in connecting industries and fostering growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button>Know More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/kns-hero/600/400"
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint="corporate handshake"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
             <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto items-center">
                <div>
                  <h2 className="font-headline text-3xl font-bold tracking-tighter mb-6">About KNS Group</h2>
                  <div className="space-y-4 text-muted-foreground">
                      <p>
                      Way back in 1971, Late Shri Kantilal N. Shah, founder of M/s. Kantilal N. Shah had been handling the Media and Publicity Agency for National as well as International technical journals, periodicals, and directories for various industries. His son Ramesh Shah followed the footprints of his father.
                      </p>
                      <p>
                      His Son Ramesh Shah formed KNS MEDIA in the year 1998. Mr. Ramesh Shah is the Chairman of KNS Group Companies. Mr. Shah took the family business to newer heights.
                      </p>
                  </div>
                  <div className="mt-6">
                    <Link href="/about">
                      <Button variant="outline">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                    <Image
                      src="https://picsum.photos/seed/about-home/500/350"
                      width={500}
                      height={350}
                      alt="KNS Group Team"
                      data-ai-hint="corporate team"
                      className="mx-auto rounded-lg object-cover shadow-lg"
                    />
                </div>
              </div>
          </div>
        </section>

        <section id="group-companies" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Group Companies
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The KNS Group comprises of the following companies, each a leader in its respective field.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {groupCompanies.map((company) => {
                const Icon = company.icon;
                return (
                <Card key={company.name} className="h-full bg-background transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                  <CardHeader className="flex flex-row items-center gap-4">
                     <Icon className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline text-base">{company.name}</CardTitle>
                  </CardHeader>
                </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="what-we-do" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  What We Do
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting industries through premier events, insightful publications, and global partnerships.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12">
              {quickLinks.map((link) => {
                 const Icon = link.icon;
                 return (
                  <Link href={link.href} key={link.title}>
                    <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="bg-accent rounded-md p-3 flex-shrink-0">
                            <Icon className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <CardTitle className="font-headline text-xl">{link.title}</CardTitle>
                            <CardDescription>{link.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                 )
              })}
            </div>
          </div>
        </section>
        
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
             <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="font-headline text-3xl font-bold">Get In Touch</h2>
                 <div className="space-y-6">
                  <p className="text-muted-foreground">We'd love to hear from you. Whether you have a question about our projects, partnerships, or anything else, our team is ready to answer all your questions.</p>
                  <div className="flex items-start gap-4">
                      <div className="bg-accent rounded-md p-3">
                           <Building className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                          <h3 className="font-semibold">Our Headquarters</h3>
                          <p className="text-muted-foreground">302 Shail's Mall, Nr. Girish Cold Drinks, C. G. Road, Navarangpura, Ahmedabad - 380009</p>
                      </div>
                  </div>
                 </div>
              </div>
              <div className="space-y-8">
                 <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
