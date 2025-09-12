import { jobs } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Briefcase } from 'lucide-react';
import CareersForm from '@/components/careers-form';

export default function CareersPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Join Our Team
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          We are looking for passionate and talented individuals to help us build the future. Explore our open positions.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
        <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Open Positions</h2>
             <Accordion type="single" collapsible className="w-full">
            {jobs.map((job) => (
              <AccordionItem key={job.id} value={job.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex-1 space-y-1">
                     <h3 className="text-lg font-semibold">{job.title}</h3>
                     <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.division}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                        </div>
                     </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold">Apply Now</h2>
            <CareersForm />
        </div>
      </div>
    </div>
  );
}
