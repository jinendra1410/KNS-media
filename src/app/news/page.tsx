import { aggregateRelevantNews } from '@/ai/flows/aggregate-relevant-news';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const revalidate = 3600; // Revalidate every hour

function getRelevanceBadge(score: number) {
  if (score > 0.8) {
    return <Badge variant="default" className="bg-green-600">Highly Relevant</Badge>;
  }
  if (score > 0.5) {
    return <Badge variant="secondary" className="bg-yellow-500">Relevant</Badge>;
  }
  return <Badge variant="outline">Related</Badge>;
}

export default async function NewsPage() {
  const newsData = await aggregateRelevantNews({
    query: 'KNS Group OR construction industry OR real estate technology OR investment management trends OR renewable energy',
    newsSources: ['Reuters', 'Bloomberg', 'TechCrunch', 'Associated Press'],
  }).catch((error) => {
    console.error("Failed to fetch news:", error);
    return null;
  });

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          News & Updates
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Stay informed with the latest news and trends relevant to KNS Group and our industries, curated by our AI.
        </p>
      </div>
      
      {!newsData || newsData.articles.length === 0 ? (
        <div className="text-center mt-12">
            <p className="text-muted-foreground">Could not load news at this time. Please check back later.</p>
        </div>
      ) : (
      <div className="grid gap-8 mt-12 max-w-4xl mx-auto">
        {newsData.articles.map((article, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="font-headline text-xl">
                    <Link href={article.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {article.title}
                    </Link>
                </CardTitle>
                <Link href={article.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground"/>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{article.summary}</CardDescription>
            </CardContent>
            <CardFooter>
              {getRelevanceBadge(article.relevanceScore)}
            </CardFooter>
          </Card>
        ))}
      </div>
      )}
    </div>
  );
}
