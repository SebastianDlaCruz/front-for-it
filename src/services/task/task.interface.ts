import type { Task } from "../../models";

export interface TaskMethods {
  create(task: Task): Promise<Response>;
  update(id: number, task: Task): Promise<Response>;
  delete(id: number): Promise<Response>;
  getFind(): Promise<Response>;
  getFindOne(id: number): Promise<Response>;
}