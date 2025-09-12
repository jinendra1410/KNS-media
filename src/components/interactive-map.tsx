import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { locations } from '@/lib/data';

const pinPositions = [
  { top: '35%', left: '22%' }, // New York
  { top: '28%', left: '48%' }, // London
  { top: '38%', left: '85%' }, // Tokyo
  { top: '75%', left: '88%' }, // Sydney
  { top: '36%', left: '23%' }, // Project Site near NY
  { top: '40%', left: '15%' }, // Project Site CA
];

export function InteractiveMap() {
  return (
    <Card className="w-full h-[500px] overflow-hidden relative shadow-lg">
      <Image
        src="https://picsum.photos/seed/map/1200/500"
        alt="World Map"
        data-ai-hint="world map"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <TooltipProvider>
        {locations.map((location, index) => (
          <Tooltip key={location.id}>
            <TooltipTrigger asChild>
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125"
                style={pinPositions[index]}
              >
                <MapPin className="h-8 w-8 text-accent fill-accent/50" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{location.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </Card>
  );
}
