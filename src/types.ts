export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export enum Filter {
  All = 'all',
  Completed = 'completed',
  NotCompleted = 'not-completed',
}
