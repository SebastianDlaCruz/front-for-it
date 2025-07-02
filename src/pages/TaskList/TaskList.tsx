import { useNavigate } from 'react-router';
import { UseTaskFetch } from '../../hook';
import { TasksService } from '../../services';
import ModalForm from './components/modal-form/ModalForm';
import Nav from './components/nav/Nav';
import Table from './components/table/Table';
import { useDialog } from './hook/useDialog/useDialog';
import './TaskList.css';


const Home = () => {

  const navigate = useNavigate();
  const { tasks, setTasks } = UseTaskFetch({ httpMethod: new TasksService('task') });
  const { handleOpenDialog, open, handleCloseDialog } = useDialog();


  const handleeDelete = (id: number) => {
    /* deleteTask(id) */
    setTasks((t) => t.filter((task) => task.id !== id));
  }

  const handleView = (id: number) => {
    navigate(`/task-item/${id}`)
  }


  return (
    <>
      <header className="home-header">
        <h1>Lista de tareas</h1>
      </header>

      <main className='padding-inline'>
        <Nav onOpenModal={handleOpenDialog} />
        <Table tasks={tasks} deleteTask={handleeDelete} viewTask={handleView} />
      </main>

      <ModalForm open={open} onClose={handleCloseDialog} />
    </>
  )
}

export default Home;