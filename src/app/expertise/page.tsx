import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, Handshake, ArrowRight, Target, Briefcase } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Event Organization',
    description: 'We specialize in organizing premier industry events, connecting professionals and showcasing the latest innovations. Our flagship events, PharmaTech Expo and LabTech Expo, are industry-leading platforms.',
    icon: Calendar,
    link: '/exhibitions',
    linkText: 'Explore Exhibitions',
    imageUrl: 'https://picsum.photos/seed/event-service/600/400',
    imageHint: 'conference event',
  },
  {
    title: 'Industry Publications',
    description: 'Through our publications like PharmaTech Magazine, we provide invaluable insights, analysis, and news, keeping professionals at the forefront of the pharmaceutical and allied industries.',
    icon: BookOpen,
    link: '/publications',
    linkText: 'View Publications',
    imageUrl: 'https://picsum.photos/seed/publication-service/600/400',
    imageHint: 'reading magazine',
  },
  {
    title: 'Consultancy Services',
    description: 'Our expert consultancy services help businesses navigate the complexities of the market, offering strategic guidance and solutions to drive growth and efficiency.',
    icon: Handshake,
    link: '/contact',
    linkText: 'Contact Us',
    imageUrl: 'https://picsum.photos/seed/consultancy-service/600/400',
    imageHint: 'business meeting',
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Our Expertise
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          We offer a range of services designed to support and advance the pharmaceutical and allied industries through events, publications, and expert consultancy.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {services.map((service, index) => (
          <div key={service.title} className={`grid gap-12 md:grid-cols-2 max-w-6xl mx-auto items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
             <div className={`flex flex-col items-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Image
                src={service.imageUrl}
                width={600}
                height={400}
                alt={service.title}
                data-ai-hint={service.imageHint}
                className="mx-auto rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <Card className="bg-card border-0 shadow-none">
                    <CardHeader className="p-0">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-accent rounded-md p-3">
                                <service.icon className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        <Link href={service.link}>
                            <Button variant="outline">
                                {service.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
          </div>
        ))}
      </div>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto grid gap-16">

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary"/>
                <h2 className="font-headline text-3xl font-bold">Event Marketing</h2>
              </div>
              <p className="text-muted-foreground">The Federation of Indian Chambers of Commerce & Industry (FICCI) had organised PHARMAceutical EXPO concurrent with Indian Pharmaceutical Congress (IPC) where in KNS Media was Exclusive Marketing Associate during the following years:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>PHARMAceutical EXPO 2007 concurrent with 59th IPC, Varanasi.</li>
                <li>PHARMAceutical EXPO 2008 concurrent with 60th IPC, Delhi.</li>
                <li>PHARMAceutical EXPO 2009 concurrent with 61st IPC, Ahmedabad.</li>
                <li>PHARMAceutical EXPO 2010 concurrent with 62nd IPC, Manipal.</li>
              </ul>
               <p className="text-muted-foreground">Indian Pharma machinery manufacturers Association (IPMMA) organised Pharma Pro & Pack 2013 at Mumbai which was exclusively marketed by KNS Media.</p>
            </div>
            <div className="flex justify-center">
              <Image src="https://picsum.photos/seed/event-marketing/500/350" width={500} height={350} alt="Event Marketing" data-ai-hint="marketing event" className="rounded-lg object-cover shadow-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="flex justify-center md:order-2">
              <Image src="https://picsum.photos/seed/event-management/500/350" width={500} height={350} alt="Event Management" data-ai-hint="corporate event" className="rounded-lg object-cover shadow-lg" />
            </div>
            <div className="space-y-4 md:order-1">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary"/>
                <h2 className="font-headline text-3xl font-bold">Event Management</h2>
              </div>
              <h3 className="font-semibold text-lg">Agarbatti Tech Expo 2014</h3>
              <p className="text-muted-foreground">The Agarbatti Tech Expo 2014 was the largest exhibition for Agarbatti Manufacturers, Perfumers, Traders & Aromatic Chemicals manufacturers organized by Gujarat Agarbatti Manufacturers & Dealers Association (GAMDA). The Exhibition was managed by KNS Media. The exhibition was spread over 2000 sq. mtr. area and was participated by 150 exhibitors and witnessed by 6000 visitors during three days event from 19th to 21st December 2014 at Sanskar Kendra, Ahmedabad.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
