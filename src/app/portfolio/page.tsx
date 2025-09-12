import ProjectPortfolio from '@/components/project-portfolio';
import { projects, businessDivisions } from '@/lib/data';

export default function PortfolioPage() {
  const divisions = ['All', ...businessDivisions.map((d) => d.name)];

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Our Portfolio
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Explore our diverse range of completed and ongoing projects that showcase our commitment to excellence and innovation.
        </p>
      </div>

      <div className="mt-12">
        <ProjectPortfolio projects={projects} divisions={divisions} />
      </div>
    </div>
  );
}
