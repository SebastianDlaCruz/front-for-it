import { useRef } from "react";

export const useDialog = () => {
  const refDialog = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    refDialog.current?.showModal()
  };
  const handleCloseDialog = () => { refDialog.current?.close() };

  return {
    refDialog,
    handleOpenDialog,
    handleCloseDialog
  }
}