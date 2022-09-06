export interface NewProps {
  author: string;
  title: string;
  description: string;
  url: string;
  image: string | undefined | null;
  category: string;
  published_at: string;
}

export interface NormalizeNewProps extends NewProps {
  shortDescription: string;
  spanishDate: string;
}
