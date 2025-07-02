import type { CreateTask } from "../../models";
import type { TaskMethods } from "./task.interface";

/** 
 * @description Servicio de tareas , se encarga de las consultas http del servidor
 * 
*/

export class TasksService implements TaskMethods {
  private readonly API = "";
  private path: string;

  constructor(path: string) {
    this.path = path;
  }
  create(task: CreateTask): Promise<Response> {
    return fetch(`${this.API}/${this.path}`, {
      method: 'POST',
      body: JSON.stringify(task)
    })
  }
  update(id: number, task: CreateTask): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(task)
    })
  }
  delete(id: number): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`, {
      method: 'DELETE'
    })
  }
  getFind(): Promise<Response> {
    return fetch(`${this.API}/${this.path}`)
  }

  getFindOne(id: number): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`)
  }
}