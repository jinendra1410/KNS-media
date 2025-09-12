import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export default function PublicationsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Our Publications
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Insights and analysis from the forefront of the pharma and allied industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mt-16 max-w-5xl mx-auto">
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                 <BookOpen className="h-8 w-8 text-primary"/>
                 <h2 className="font-headline text-3xl font-bold">PharmaTech Magazine</h2>
            </div>
          <div className="text-muted-foreground space-y-4">
            <p>
                PharmaTech is bi-monthly magazine Published by KNS MEDIA, which is an Industrial journal on Pharma & Allied Industry.
            </p>
            <p>
                PharmaTech Provides an Excellent Platform to all Pharmaceutical, Packaging and Allied Industrial suppliers, as well as Buyers helping them to promot their products and services at National & International level.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
             <Image
                src="https://picsum.photos/seed/magazine-cover/400/500"
                width={400}
                height={500}
                alt="PharmaTech Magazine Cover"
                data-ai-hint="magazine cover"
                className="rounded-lg object-cover shadow-lg transform -rotate-3 transition-transform hover:rotate-0"
            />
        </div>
      </div>
    </div>
  );
}
