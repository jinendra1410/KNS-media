import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, BookOpen, Handshake, ArrowRight } from 'lucide-react';
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
          Our Services
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
    </div>
  );
}
