import { DynamicIcon } from 'lucide-react/dynamic';
import { useNavigate, useParams } from "react-router";
import { dateTransform } from "../../adapters";
import { StateTask } from "../../components";
import { UseTaskFetch } from "../../hook";
import { TasksService } from "../../services";
import LoaderTask from "./components/loader/LoaderTask";
import "./task-item.css";

const TaskItem = () => {

  const { id } = useParams();
  const { task } = UseTaskFetch({ httpMethod: new TasksService('task'), id: Number(id) });
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <main className='task-item'>

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
          :
          <div className="container-loader">
            <LoaderTask />
            <button className='container-loader__button' onClick={handleBack}>
              <DynamicIcon className='container-loader__loader' name="arrow-left" color="white" size={20} />
              <span>volver</span>
            </button>
          </div>
      }

    </main>
  )
}

export default TaskItem;