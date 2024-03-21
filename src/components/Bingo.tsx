import Modal from "react-modal";
import useBingoState from "@/hooks/useBingoState";
import EditModal from "./EditModal";

const BingoComponent = () => {
  const { bingo, handleClick, selectedStatus, closeModal, handleSave } =
    useBingoState();

  Modal.setAppElement("#root");

  return (
    <div className='grid grid-cols-5 gap-2'>
      {bingo.status.map((status) => (
        <button
          key={status.id}
          className={`w-20 h-20 flex flex-col justify-center items-center overflow-hidden ${
            status.id === 13
              ? "bg-black text-white"
              : status.isChecked
              ? "bg-blue-500"
              : "bg-white"
          } border border-gray-300 rounded shadow`}
          onClick={() => handleClick(status.id)}
          disabled={status.id === 13}>
          {status.img && status.id !== 13 && (
            <img
              src={status.img}
              alt={status.name}
              className='w-full h-full object-cover'
            />
          )}
          <span className='text-xs'>{status.name}</span>
        </button>
      ))}

      <Modal
        isOpen={!!selectedStatus}
        onRequestClose={closeModal}
        contentLabel='Item Details'
        className='Modal'
        overlayClassName='Overlay'>
        <EditModal
          selectedStatus={selectedStatus}
          onSave={handleSave}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
};

export default BingoComponent;
