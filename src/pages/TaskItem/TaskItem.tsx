import { useParams } from "react-router";
import { dateTransform } from "../../adapters";
import { StateTask } from "../../components";
import { UseTaskFetch } from "../../hook";
import { TasksService } from "../../services";
import LoaderTask from "./components/loader/LoaderTask";
import "./task-item.css";

const TaskItem = () => {

  const { id } = useParams();
  const { task } = UseTaskFetch({ httpMethod: new TasksService('task'), id: Number(id) });

  return (
    <main>

      {
        task ?
          <>
            <header>
              <h1>{task.title}</h1>
              <StateTask completed={task.completed} />
            </header>

            <section>
              <p>{task.description}</p>

              <p>{dateTransform(task.createAd)}</p>
            </section>

          </>
          : <LoaderTask />
      }

    </main>
  )
}

export default TaskItem;