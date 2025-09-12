import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { KnsLogo } from '@/components/icons';

const managementTeam = [
  {
    name: 'Mr. Ramesh Shah',
    title: 'Chairman',
    imageUrl: 'https://picsum.photos/seed/ramesh-shah/400/500',
    imageHint: 'portrait man glasses',
    bio: [
      'Mr. Ramesh Shah, Chairman of KNS Group of Companies directed a part of his business to the pharmaceutical market with the formation of KNS Media.',
      'He has rich marketing experience and he has served 23 years with Bayer India in healthcare profession. A huge breakthrough came for him when he got the opportunity to showcase his abilities in 1998 at the Golden Jubilee celebration of L.M. College of Pharmacy.',
      'After the grand success of the maiden trade show Pharma Tech Expo at Indore, new dimensions opened for him. Also, group had organized exhibition in Ahmedabad, Gandhinagar, Indore, Chandigarh, Mumbai & Bengaluru. He also did international exhibitions in Dhaka, Nepal, Pakistan, Malaysia, etc.',
    ],
  },
  {
    name: 'Mr. Aarjav Shah',
    title: 'CEO',
    imageUrl: 'https://picsum.photos/seed/aarjav-shah/400/500',
    imageHint: 'portrait man young',
    bio: [
        'Mr. Aarjav Shah, a young entrepreneur, has been directly and indirectly involved in this industry for a long time. He is a B.Sc., MBA in marketing from Symbiosis, Pune and Certified in Exhibition Management (CEM).',
        'His area of expertise has been marketing and client relations since 2009 when he took charge of Pharma Tech magazine as an Editor and took the publication to new heights. He is currently the CEO of Pharma Technologyindex.com Pvt. Ltd.',
        'He has been engaged in organising "PharmaTech Expo & LabTech Expo" exhibition. He is responsible for coordinating Interphex USA since 2013 and is also having exposure for international events including at United States, Japan, Myanmar, Germany, China, Dubai & Korea.',
    ],
  },
];

export default function ManagementPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center mb-16">
        <div className="flex justify-center items-center gap-4">
             <KnsLogo className="h-10 w-10 text-primary" />
             <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                KNS Group
             </h1>
        </div>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
          Meet the leaders driving our success.
        </p>
      </div>

      <div className="space-y-20">
        {managementTeam.map((member, index) => (
          <div key={member.name} className={`grid gap-12 md:grid-cols-2 max-w-6xl mx-auto items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
             <div className={`flex flex-col items-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Image
                src={member.imageUrl}
                width={400}
                height={500}
                alt={member.name}
                data-ai-hint={member.imageHint}
                className="mx-auto rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <Card className="bg-card">
                <CardContent className="pt-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter">{member.name}</h2>
                    <p className="text-accent font-semibold mb-6">{member.title}</p>
                    <div className="space-y-4 text-muted-foreground">
                        {member.bio.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
