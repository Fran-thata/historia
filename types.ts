export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  isImportant: boolean;
  imageUrl?: string;
}

export interface TimelinePeriod {
  id: string;
  title: string;
  periodRange: string;
  events: TimelineEvent[];
}