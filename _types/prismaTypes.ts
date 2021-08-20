export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  private: boolean;
  authorId: number;
  author: {
    name: string;
    email: string;
  } | null;
}
