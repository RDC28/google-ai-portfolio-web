
export enum ProjectCategory {
  DATA_SCIENCE = 'Data Science & ML',
  FUN = 'For Fun',
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  sourceUrl?: string;
  category: ProjectCategory;
}
