'use server';

/**
 * @fileOverview A news aggregation AI agent.
 *
 * - aggregateRelevantNews - A function that handles the news aggregation process.
 * - AggregateRelevantNewsInput - The input type for the aggregateRelevantNews function.
 * - AggregateRelevantNewsOutput - The return type for the aggregateRelevantNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AggregateRelevantNewsInputSchema = z.object({
  query: z.string().describe('The search query for news articles.'),
  newsSources: z.array(z.string()).describe('A list of news sources to search from.'),
});
export type AggregateRelevantNewsInput = z.infer<typeof AggregateRelevantNewsInputSchema>;

const AggregateRelevantNewsOutputSchema = z.object({
  articles: z.array(
    z.object({
      title: z.string().describe('The title of the news article.'),
      link: z.string().describe('The URL of the news article.'),
      summary: z.string().describe('A brief summary of the news article.'),
      relevanceScore: z.number().describe('A score indicating the relevance of the article to KNS Group.'),
    })
  ).describe('A list of relevant news articles.'),
});
export type AggregateRelevantNewsOutput = z.infer<typeof AggregateRelevantNewsOutputSchema>;

export async function aggregateRelevantNews(input: AggregateRelevantNewsInput): Promise<AggregateRelevantNewsOutput> {
  return aggregateRelevantNewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aggregateRelevantNewsPrompt',
  input: {schema: AggregateRelevantNewsInputSchema},
  output: {schema: AggregateRelevantNewsOutputSchema},
  prompt: `You are an AI news aggregator specializing in identifying news relevant to KNS Group and its industries.

You will receive a query and a list of news sources. Your task is to search these sources using the query, summarize the articles, and assess their relevance to KNS Group.

For each article, provide the title, link, a brief summary, and a relevance score (0-1) indicating how relevant the article is to KNS Group. Consider KNS Group's business divisions and interests when determining relevance.

Query: {{{query}}}
News Sources: {{#each newsSources}}{{{this}}} {{/each}}

Output the results as a JSON array of articles.
`,
});

const aggregateRelevantNewsFlow = ai.defineFlow(
  {
    name: 'aggregateRelevantNewsFlow',
    inputSchema: AggregateRelevantNewsInputSchema,
    outputSchema: AggregateRelevantNewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
