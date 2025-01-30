import { FaEdit } from "react-icons/fa";
import { FaEye, FaTrash } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export type ActionBtnProps = {
  id: string;
  deleteAction: Function;
  editUrl: string;
};

const TableActionBtnComponent = ({
  id,
  deleteAction,
  editUrl,
}: ActionBtnProps) => {
  const handleDelete = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          deleteAction(id);
        }
      });
    } catch (exception: any) {
      toast.error(exception.message);
      throw exception;
    }
  };
  return (
    <>
      <a
        href=""
        className="bg-blue-600 text-white px-2 py-1 h-7 w-9 rounded-md text-xl"
      >
        <FaEye />
      </a>
      <NavLink
        to={editUrl}
        className="bg-teal-600 text-white px-2 py-1 h-7 w-9 rounded-md text-xl"
      >
        <FaEdit />
      </NavLink>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleDelete();
        }}
        href=""
        className="bg-red-600 text-white px-2 py-1 h-7 w-9 rounded-md text-xl"
      >
        <FaTrash />
      </a>
    </>
  );
};

export default TableActionBtnComponent;
