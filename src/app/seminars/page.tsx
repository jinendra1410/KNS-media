import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { seminars } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Presentation } from 'lucide-react';

export default function SeminarsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
       <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
            <Badge variant="outline" className="flex items-center gap-2 w-fit">
                <Presentation className="h-4 w-4"/>
                <span>Seminars & Conferences</span>
            </Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Sharing Knowledge, Building Networks
          </h1>
          <div className="text-muted-foreground space-y-4">
            <p>
              KNS Media has been organizing conferences and seminars on the topics of interest to the pharma industry. These events bring together experts, professionals, and stakeholders to discuss the latest trends, challenges, and opportunities in the pharmaceutical sector.
            </p>
          </div>
        </div>
        <div className="space-y-6">
            <Image
                src="https://picsum.photos/seed/seminar-main/600/400"
                width={600}
                height={400}
                alt="Seminar Audience"
                data-ai-hint="conference audience"
                className="rounded-lg object-cover shadow-lg w-full"
            />
        </div>
      </div>


      <section id="past-seminars" className="w-full py-12 md:py-16 lg:py-20">
        <div className="space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Past Seminars
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
                A look at the diverse topics and collaborations from our recent events.
            </p>
        </div>
        <div className="mt-8 border rounded-lg overflow-hidden">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[250px]">Event</TableHead>
                <TableHead className="w-[150px]">Location</TableHead>
                <TableHead>Topic of the Seminar</TableHead>
                <TableHead>Supporters / Partners</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {seminars.map((seminar, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium align-top">{seminar.event}</TableCell>
                        <TableCell className="align-top">{seminar.location}</TableCell>
                        <TableCell className="align-top">
                            <ul className="list-disc pl-4 space-y-2">
                                {seminar.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                            </ul>
                        </TableCell>
                        <TableCell className="align-top">
                             <ul className="list-disc pl-4 space-y-2">
                                {seminar.partners.map((partner, i) => <li key={i}>{partner}</li>)}
                            </ul>
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
