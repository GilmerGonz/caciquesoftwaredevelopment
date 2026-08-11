export interface PortfolioProject {
  id: string;
  name: string;
  clientCategory: string;
  badge: string;
  metric: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  mockupCode: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  details: string[];
}
