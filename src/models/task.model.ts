export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAd: Date;
}


export type CreateTask = Omit<Task, 'id' | 'createAd'>;