import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeletConfirmModel = ({ setDeleteProduct, refetch, deleteProduct }) => {
  const { _id, name } = deleteProduct;

  const handDelete = () => {
    const deletePro = async () => {
      const { data } = axios.delete(`http://localhost:5000/product/${_id}`);
      console.log(data)
      if (data.deletedCount > 0) {
        toast.warning(`Doctors: ${name} is Deleted!`)
        setDeleteProduct(null)
        refetch()
      }
    }
    deletePro()

  }

  return (
    <div>
      {/* <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">Are you want to delete {name}!</h3>
          <div className="modal-action">
            <button onClick={handDelete} className="btn btn-xs bg-red-600" >Delete</button>
            <label htmlFor="delete-modal" className="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DeletConfirmModel;