import { useEffect, useState } from "react"
import type { CreateTask, ResponseHttpData, Task } from "../../models"
import type { TaskMethods } from "../../services/task/task.interface"
interface Props {
  httpMethod: TaskMethods
  id?: number
}
export const UseTaskFetch = ({ httpMethod, id }: Props) => {

  const testTasks: Task[] = [
    {
      completed: true,
      createAd: new Date(),
      description: 'Tarea 1',
      id: 1,
      title: 'Tarea 1'
    },
    {
      completed: false,
      createAd: new Date(),
      description: 'Tarea 2',
      id: 2,
      title: 'Tarea 2'
    },

    {
      completed: false,
      createAd: new Date(),
      description: 'Tarea 3',
      id: 3,
      title: 'Tarea 5'
    },

  ];

  const [tasks, setTasks] = useState<Task[]>(testTasks);

  const [task, setTask] = useState<Task | null>(null);

  const getTask = async () => {

    try {

      const res = await httpMethod.getFind()

      if (!res.ok) throw new Error('Error al obtener las tareas');

      const resHttp = await res.json() as ResponseHttpData<Task[]>;

      const { data } = resHttp;

      setTasks([
        ...tasks,
        ...data
      ])

    } catch (e) {
      console.error(e);
    }

  }

  const getFindOne = async (id: number) => {
    try {

      const res = await httpMethod.getFindOne(id)

      if (!res.ok) throw new Error('Error al obtener la tarea');
      const data = await res.json() as ResponseHttpData<Task>;

      setTask(data.data)

    } catch (error) {
      console.log(error)
    }
    ;
  }

  const create = async (task: CreateTask) => {

    try {
      const res = await httpMethod.create(task);

      if (!res.ok) throw new Error('Error al crear la tarea');

    } catch (error) {
      console.log(error)
    }

  }

  const deleteTask = async (id: number) => {

    try {

      const res = await httpMethod.delete(id);

      if (!res.ok) throw new Error('Error al eliminar la tarea');

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    if (!id) getTask();

    if (id) getFindOne(id);

  }, [])


  return { tasks, deleteTask, create, setTasks, task, setTask, getFindOne };

}