/** Edit the arrays in `data/itWork.ts`, `data/projectWork.ts`, and `data/musicWork.ts`. */
export type WorkSummary = {
  /** URL segment for `/it-work/[slug]`, `/projects/[slug]`, or `/music/[slug]`. */
  slug: string;
  title: string;
  description: string;
  /** Optional longer copy on the dedicated project page. */
  body?: string;
  stack: string[];
  href?: string;
  year: string;
};
