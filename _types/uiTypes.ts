export interface ProjectProps {
  id: number;
  title: string;
  content: string;
  private: boolean;
  authorId: number;
  author: {
    name: string;
    email: string;
    image: string;
  } | null;
}
