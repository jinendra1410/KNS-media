import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { exhibitions, upcomingExhibitions } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

export default function ExhibitionsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
            <Badge variant="outline">Exhibitions</Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            PharmaTech Expo & LabTech Expo
          </h1>
          <div className="text-muted-foreground space-y-4">
            <p>
              PharmaTech Expo & Lab Tech Expo are the flagship event of the group. They are being organised since 2011 and successfully conducted at Ahmedabad, Gandhinagar, Indore, Chandigarh, Mumbai & Bengaluru.
            </p>
            <p>
              PharmaTechnologyIndex.com Pvt. Ltd is the organizer of "PharmaTech Expo & LabTech Expo", which are premier flagship events dedicated to pharmaceutical innovation, technology and knowledge.
            </p>
          </div>
           <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://picsum.photos/seed/expo-1/300/200"
                width={300}
                height={200}
                alt="Expo Hall"
                data-ai-hint="exhibition hall"
                className="rounded-lg object-cover shadow-md"
              />
              <Image
                src="https://picsum.photos/seed/expo-2/300/200"
                width={300}
                height={200}
                alt="Expo Tent"
                data-ai-hint="outdoor event"
                className="rounded-lg object-cover shadow-md"
              />
           </div>
        </div>
        <div className="space-y-6">
            <Image
                src="https://picsum.photos/seed/expo-main/600/400"
                width={600}
                height={400}
                alt="Ribbon Cutting Ceremony"
                data-ai-hint="ribbon cutting"
                className="rounded-lg object-cover shadow-lg w-full"
            />
        </div>
      </div>

       <section id="upcoming-events" className="w-full py-12 md:py-16 lg:py-20">
        <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm flex items-center gap-2 mx-auto">
                <CalendarDays className="h-4 w-4"/>
                <span>Upcoming Events</span>
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Us at Our Next Expo
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Mark your calendars for our upcoming exhibitions.
            </p>
        </div>
        <Card className="mt-8">
            <CardContent className="p-0">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {upcomingExhibitions.map((expo, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{expo.event}</TableCell>
                            <TableCell>{expo.date}</TableCell>
                            <TableCell>{expo.location}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
      </section>

      <section id="event-highlights" className="w-full py-12 md:py-16 lg:py-20">
        <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Event Highlights
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A journey through our past successful events.
            </p>
        </div>
        <Card className="mt-8">
            <CardContent className="p-0">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {exhibitions.map((expo, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{expo.event}</TableCell>
                            <TableCell>{expo.date}</TableCell>
                            <TableCell>{expo.location}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
