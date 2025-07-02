import "./modal-form.css";
interface Props {
  refDialog: React.RefObject<HTMLDialogElement | null>

}
const ModalForm = ({ refDialog }: Props) => {

  return (
    <dialog className="modal-form" ref={refDialog}>
      <button >
        X
      </button>
      <form className="modal-form__form" method="dialog">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <select name="status" id="">
          <option value={"true"}>Completado</option>
          <option value={"true"}>Pendiente</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </dialog>
  )
}

export default ModalForm;