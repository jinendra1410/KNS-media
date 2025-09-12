import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const internationalEvents = [
  {
    title: 'Interphex, USA',
    logoUrl: 'https://picsum.photos/seed/interphex-logo/200/50',
    logoAlt: 'Interphex Logo',
    logoHint: 'corporate logo',
    content: [
      'INTERPHEX is the premier pharmaceutical, biotechnology and device development and manufacturing event to "Experience Science through Commercialization". Based in New York, INTERPHEX brings over 11,000 global industry professionals and 650+ leading suppliers together to "Learn It, Experience It, Procure It" through a combination of no cost technical conference, exhibits, demonstrations, and networking events to leverage quality, efficiency and cost effectiveness in today\'s ever-changing global market. For 42 years, INTERPHEX has proven to be the place to find all of the State-of-the-Art Solutions needed to Cost Effectively Develop and Manufacture Quality Product.',
      'KNS Media is the Exclusive Promoter in India of Interphex since 2013 and have actively worked in promoting the event in India. KNS Media has coordinated Indian companies to participate in Interphex including booking of space, helping in logistic and organising one to one meetings during the event. The major highlights of our contribution are mentioned here under.',
    ],
  },
  {
    title: 'Interphex, Japan',
    logoUrl: 'https://picsum.photos/seed/interphex-jp-logo/200/50',
    logoAlt: 'Interphex Japan Logo',
    logoHint: 'corporate logo text',
    content: [
      'Federation of Indian Chambers of Commerce and Industry (FICCI) organised Exhibition and Buyer seller meet, as a part of INTERPHEX JAPAN 2014 & In-Pharma Japan from 2nd to 4th July 2014, where in "India" was the Partner Country. KNS Media being a Promoter of the event, coordinated with Indian companies and delegates for exhibition and buyer seller meet for this event. About 80 Indian companies participated in this three day event at Tokyo, Japan.',
      'Swarnim Vision (A Division of KNS Group) was the exclusive marketing partner for Interphex, Japan for the region of India.',
    ],
  },
  {
    title: 'India Product Show 2014, Myanmar',
    logoUrl: 'https://picsum.photos/seed/myanmar-show-logo/150/60',
    logoAlt: 'India Product Show Myanmar 2014 Logo',
    logoHint: 'event logo',
    content: [
      'India Product Show Myanmar 2014 was held from 24th to 27th September 2014, organised by Federation of Indian Chambers of Commerce and Industry (FICCI) incorporating various industrial product. KNS Media being a Marketing Partner invited about 100 companies from India and coordinated their visit as well as all facilities for exhibiting their product during four days event at Yangon, Myanmar.',
    ],
  },
  {
    title: 'Top Resa, Paris',
    logoUrl: 'https://picsum.photos/seed/iftm-logo/100/60',
    logoAlt: 'IFTM Top Resa Logo',
    logoHint: 'travel logo',
    content: [
      'IFTM Top Resa is a leading B2B event for the business and leisure travel industry in the French market. It was established in 1978 in Deauville and is organized every year in Paris since the year 2008. Swarnim Vision (A Division of KNS Group) was the exclusive marketing partner for IFTM Top Resa, Paris from 2014 to 2016 for the region of India, Nepal and Bangladesh. Swarnim Vision have been marketing and managing the show in these three countries since 2014. The event is organized by Reed Expo, a global event organizer company which also organizes WTM London. During 3 years KNS Group Company coordinated with about Forty companies for their participation in the event by way of exhibition and one to one discussion at Paris. The major participants included state Tourism Department of Goa, Kerala Tourism, and Karnataka Tourism & some private resorts and tourism companies from India.',
    ],
  },
];

export default function InternationalPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          International Partnerships
        </h1>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
          Expanding horizons and fostering global connections through strategic event promotions and partnerships.
        </p>
      </div>

      <div className="mt-16 space-y-16 max-w-5xl mx-auto">
        {internationalEvents.map((event) => (
          <Card key={event.title} className="bg-card shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <CardTitle className="font-headline text-3xl">{event.title}</CardTitle>
                <div className="flex-shrink-0">
                   <Image
                    src={event.logoUrl}
                    width={200}
                    height={60}
                    alt={event.logoAlt}
                    data-ai-hint={event.logoHint}
                    className="object-contain"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                {event.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}