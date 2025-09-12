import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { rbsmEvents } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

export default function RbsmPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <Badge variant="outline" className="flex items-center gap-2 w-fit">
            <Users className="h-4 w-4" />
            <span>RBSM</span>
          </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Reverse Buyer Seller Meet (RBSM)
          </h1>
          <div className="text-muted-foreground space-y-4">
            <p>
              Since export is an important component of pharmaceutical product
              industry in India, inviting the buyers for export promotion is
              need of the hour. In view of this, Reverse Buyer Seller Meet
              (RBSM) has been organised in association with Indo-African
              Chamber of Commerce & Industry (IACCI) during the last three
              PharmaTech events.
            </p>
            <p>
              An MOU has been signed between PharmaTechnologyIndex.com Pvt Ltd
              and Indo-African Chamber of Commerce and Industry for mutual
              cooperation and business development. As a result of this
              meetings the exhibitors of machinery and pharmaceutical products
              received opportunity for export for their items.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <Image
            src="https://picsum.photos/seed/rbsm-main/600/400"
            width={600}
            height={400}
            alt="Reverse Buyer Seller Meet"
            data-ai-hint="business meeting"
            className="rounded-lg object-cover shadow-lg w-full"
          />
        </div>
      </div>

      <section id="past-events" className="w-full py-12 md:py-16 lg:py-20">
        <div className="space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            RBSM Event Details
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
            Details of country participating in RBSM in last three events are
            as detail here under:
          </p>
        </div>
        <div className="mt-8 border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>No. of Delegates</TableHead>
                <TableHead>Countries</TableHead>
                <TableHead className="text-right">No. of Meetings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rbsmEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium align-top">
                    <p>{event.event}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </TableCell>
                  <TableCell className="align-top">{event.location}</TableCell>
                  <TableCell className="align-top">{event.delegates}</TableCell>
                  <TableCell className="align-top">
                    <ul className="list-disc pl-4 space-y-1">
                      {event.countries.map((country, i) => (
                        <li key={i}>{country}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="text-right align-top">
                    {event.meetings}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}

    