import React from "react";
import FormTodo from "./FormTodo";
import { Close } from "../../assets/svg";
const ModalTodo = ({ modal, onClose }) => {
  return (
    <>
      <div className="fixed top-0 w-full h-full bg-ble-600/40">
        <div className="flex items-center justify-center w-full h-full">
          <div className="relative w-3/4 p-8 shadow-xl bg-blue-50 rounded-xl">
            <div
              onClick={() => onClose()}
              className="absolute cursor-pointer right-2 top-2"
            >
              <Close className="h-7 w-7 fill-blue-600 hover:fill-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-600 font-borel sm:text-2xl">
              {" "}
              Edit the Plan
            </h3>
            <FormTodo currentId={modal.id} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalTodo;
