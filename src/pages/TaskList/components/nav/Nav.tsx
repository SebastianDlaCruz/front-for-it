import './nav.css';

interface Props {
  onOpenModal: () => void
}
const Nav = ({ onOpenModal }: Props) => {
  return (
    <nav className="nav">
      <ul className='nav-ul'>
        <li>
          <button onClick={onOpenModal}>Crear +</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;