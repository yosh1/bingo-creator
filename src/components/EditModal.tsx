import { StatusInfo } from "@/types/bingo";
import React from "react";

interface EditModalProps {
  selectedStatus: StatusInfo | null;
  onSave: () => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  selectedStatus,
  onSave,
  onCancel,
}) => {
  if (!selectedStatus) return null;

  return (
    <div
      className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow
        `}>
      <input
        type='text'
        value={selectedStatus.name}
        onChange={(e) =>
          selectedStatus.setName ? selectedStatus.setName(e.target.value) : null
        }
        className='mb-2 border border-gray-300 rounded'
        placeholder='Name'
      />
      <input
        type='text'
        value={selectedStatus.img}
        onChange={(e) =>
          selectedStatus.setImage ? selectedStatus.setImage(e.target.value) : null
        }
        className='mb-2 border border-gray-300 rounded'
        placeholder='Image URL'
      />
      <button
        onClick={onSave}
        className='mr-2 bg-blue-500 text-white rounded px-2 py-1'>
        Save
      </button>
      <button
        onClick={onCancel}
        className='bg-red-500 text-white rounded px-2 py-1'>
        Cancel
      </button>
    </div>
  );
};

export default EditModal;
