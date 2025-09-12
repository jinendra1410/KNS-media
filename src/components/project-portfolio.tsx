'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { projects as TProjects } from '@/lib/data';

type Project = (typeof TProjects)[number];

interface ProjectPortfolioProps {
  projects: Project[];
  divisions: string[];
}

export default function ProjectPortfolio({ projects, divisions }: ProjectPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.division === activeFilter);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {divisions.map((division) => (
          <Button
            key={division}
            variant={activeFilter === division ? 'default' : 'outline'}
            onClick={() => setActiveFilter(division)}
            className={cn('transition-all', activeFilter === division ? 'bg-primary text-primary-foreground' : 'bg-card')}
          >
            {division}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    width={600}
                    height={400}
                    alt={project.name}
                    data-ai-hint={project.imageHint}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{project.name}</CardTitle>
                  <CardDescription>{project.division}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
