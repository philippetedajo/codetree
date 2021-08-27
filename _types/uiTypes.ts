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

export interface ProjectComponentProps {
  props: ProjectProps;
  onDelete?: () => Promise<void>;
  onToggleLike?: () => Promise<void>;
}
