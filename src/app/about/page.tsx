import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Newspaper, Globe, BrainCircuit, Handshake } from 'lucide-react';

const groupCompanies = [
    {
        name: 'M/s Kantilal N Shah',
        icon: Briefcase,
    },
    {
        name: 'KNS Media',
        icon: Newspaper,
    },
    {
        name: 'PharmaTechnologyIndex.com Pvt. Ltd.',
        icon: Globe,
    },
    {
        name: 'A. R. Consultancy',
        icon: BrainCircuit,
    },
    {
        name: 'Swarnim Vision',
        icon: Handshake,
    },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          About KNS Group
        </h1>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
          Proudly celebrating 50 years of excellence and innovation.
        </p>
      </div>

      <section id="history" className="w-full py-12 md:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter mb-6">The Journey So Far</h2>
            <div className="space-y-4 text-muted-foreground">
                <p>
                Way back on 1971, Late Shri Kantilal N. Shah, founder of M/s. Kantilal N. Shah had been handling the Media and Publicity Agency for National as well as International technical journals, periodicals, and directories for various industries. His son Ramesh Shah followed the footprints of his father.
                </p>
                <p>
                His Son Ramesh Shah formed KNS MEDIA in the year 1998. Mr. Ramesh Shah is the Chairman of KNS Group Companies. Mr. Shah took the family business to newer heights. He directed a part of their business to the Pharmaceutical market with the formation of KNS Media.
                </p>
                <p>
                A huge breakthrough for him was when he got the opportunity to showcase his abilities in 1998 at the Golden Jubilee celebration of L. M. College of Pharmacy. After the grand success at their maiden trade show, new avenues opened for him. His Son Mr. Aarjav Shah (MBA, Certified in Exhibition Management - CEM) joined the family business and implemented new techniques & technology.
                </p>
            </div>
          </div>
           <div className="flex flex-col items-center">
              <Image
                src="https://picsum.photos/seed/founder-kns/400/500"
                width={400}
                height={500}
                alt="Late. Kantilal N Shah"
                data-ai-hint="portrait man"
                className="mx-auto rounded-lg object-cover shadow-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">Late. Kantilal N Shah</h3>
                <p className="text-sm text-muted-foreground">Founder of M/s. Kantilal N. Shah</p>
              </div>
            </div>
        </div>
      </section>

      <section id="group-companies" className="w-full py-12 md:py-16 lg:py-20 bg-card rounded-lg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  KNS Group Companies
                </h2>
                <p className="max-w-[900px] text-card-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today the KNS Group comprises of the following companies:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {groupCompanies.map((company) => {
                const Icon = company.icon;
                return (
                <Card key={company.name} className="h-full bg-background transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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

    </div>
  );
}
