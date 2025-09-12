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
  {
    title: 'Duphat, Dubai',
    logoUrl: 'https://picsum.photos/seed/duphat-logo/150/50',
    logoAlt: 'Duphat Logo',
    logoHint: 'corporate logo text',
    content: [
        'DUPHAT exhibition spans the entire value chain of the industry from drugs manufacturing of medicine, OTC and retail products distribution within the pharmacy network. The growing population, improvement in healthcare system together with the regional affluent lifestyle make the pharmaceutical segment a lucrative industry. Swarnim Vision (A Division of KNS Group) was the exclusive marketing partner for DUPHAT, Dubai from 2020 for the region of India.',
        'DUPHAT is the premier Pharmaceutical and Technology event in the Middle East launched in 1995 by INDEX® Conferences and Exhibitions Org. Est., a member of INDEX Holding in collaboration with the government through the Dubai Health Authority with the aim to provide a high-quality conference and a wide-ranging exhibition.',
    ],
  },
  {
    title: 'Bioplus - Interphex, Korea',
    logoUrl: 'https://picsum.photos/seed/bioplus-logo/200/40',
    logoAlt: 'Bioplus Interphex Korea Logo',
    logoHint: 'event logo text',
    content: [
        'BIOPLUS of the Korea Biotechnology Industry Organization made a collaboration with INTERPHEX, one of the global pharmaceutical exhibition brands and a platform for R&D to Manufacturing/Processing, Logistics, and Packaging. It is the only platform that encompasses the Value Chain of Biotechnology and Pharmaceutical Industries.',
        'Swarnim Vision (A Division of KNS Group) was the exclusive marketing partner for INTERPHEX, Korea from 2020 for the region of India. INTERPHEX is a global pharmaceutical industry exhibition hosted by Reed Exhibitions, held annually in New York, Osaka, and Tokyo. INTERPHEX represents the premier pharmaceutical, biotechnology, and device development and manufacturing event around the world.',
    ],
  },
  {
    title: 'API China, China',
    logoUrl: 'https://picsum.photos/seed/apichina-logo/150/40',
    logoAlt: 'API China Logo',
    logoHint: 'logo text',
    content: [
        'API China is a well-established comprehensive pharmaceuticals and chemicals show in Chinese pharmaceutical industry. With more than 50 years\' experience in China, it has been a well-known celebration for all parties involved in Chinese Pharmaceutical market. Swarnim Vision (A Division of KNS Group) was the exclusive marketing partner for API China, China from 2020 for the region of India. It has deep partnership with China Center for Food and Drug International Exchange (CCFDIE), China Pharmaceutical Industry Association (CPIA), China National Pharmaceutical Packaging Association (CNPPA) and other powerful industry associations.',
    ],
  },
];

export default function InternationalPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
       <div className="space-y-4 text-center">
        <div className="flex justify-center items-center gap-4">
            <Image
                src="https://picsum.photos/seed/international-header/1200/300"
                width={1200}
                height={300}
                alt="International Partnerships"
                data-ai-hint="airplane world map"
                className="w-full h-48 object-cover rounded-lg"
            />
        </div>
      </div>
      <div className="space-y-4 text-center mt-8">
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

      <div className="mt-16 text-center text-muted-foreground max-w-5xl mx-auto">
        <p>Last but not the least we would like to thank all our partners, exhibitors, advertisers, subscribers, press, associates and our staff for making this long journey possible. It would not have been possible without your support and we seek your valuable support in continuing this journey further. Thanks once again.</p>
      </div>
    </div>
  );
}
