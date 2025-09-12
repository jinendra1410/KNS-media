'use server';
/**
 * @fileOverview A project categorization AI agent.
 *
 * - categorizeProject - A function that categorizes a project into a business division.
 * - CategorizeProjectInput - The input type for the categorizeProject function.
 * - CategorizeProjectOutput - The return type for the categorizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeProjectInputSchema = z.object({
  description: z.string().describe('The description of the project.'),
  image: z
    .string()
    .describe(
      "A photo representing the project, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type CategorizeProjectInput = z.infer<typeof CategorizeProjectInputSchema>;

const CategorizeProjectOutputSchema = z.object({
  division: z
    .string()
    .describe(
      'The business division that the project belongs to. Possible values: ["Construction", "Real Estate", "Technology", "Investment Management", "Energy"]'
    ),
  confidence: z
    .number()
    .describe('The confidence level (0 to 1) of the categorization.'),
});
export type CategorizeProjectOutput = z.infer<typeof CategorizeProjectOutputSchema>;

export async function categorizeProject(input: CategorizeProjectInput): Promise<CategorizeProjectOutput> {
  return categorizeProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeProjectPrompt',
  input: {schema: CategorizeProjectInputSchema},
  output: {schema: CategorizeProjectOutputSchema},
  prompt: `You are an expert in understanding business projects and categorizing them into divisions within KNS Group.

  Given the project description and image, determine which of the following business divisions the project most likely belongs to:

  Construction
  Real Estate
  Technology
  Investment Management
  Energy

  Description: {{{description}}}
  Image: {{media url=image}}

  Return the business division and a confidence level (0 to 1) indicating the certainty of your categorization.
  `,
});

const categorizeProjectFlow = ai.defineFlow(
  {
    name: 'categorizeProjectFlow',
    inputSchema: CategorizeProjectInputSchema,
    outputSchema: CategorizeProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
