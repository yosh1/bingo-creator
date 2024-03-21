import { useState } from "react";
import Modal from "react-modal";

type StatusInfo = {
  id: number;
  name: string;
  img: string;
  isChecked: boolean;
};

type Bingo = {
  id: number;
  title: string;
  author: string;
  status: StatusInfo[];
};

const BingoComponent = () => {
  const initialBingo: Bingo = {
    id: 1,
    title: "Bingo 1",
    author: "Author 1",
    status: Array(25)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: `Status ${index + 1}`,
        img: `https://picsum.photos/200/300?random=${index + 1}`,
        isChecked: index === 12,
      })),
  };

  const [bingo, setBingo] = useState<Bingo>(initialBingo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusInfo | null>(null);

  const handleClick = (statusId: number) => {
    const newBingo = {
      ...bingo,
      status: bingo.status.map((status) =>
        status.id === statusId
          ? { ...status, isChecked: !status.isChecked }
          : status
      ),
    };
    setBingo(newBingo);
    setSelectedStatus(
      newBingo.status.find((status) => status.id === statusId) || null
    );
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (selectedStatus) {
      const newBingo = {
        ...bingo,
        status: bingo.status.map((status) =>
          status.id === selectedStatus.id ? selectedStatus : status
        ),
      };
      setBingo(newBingo);
    }
    setIsModalOpen(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedStatus) {
      setSelectedStatus({ ...selectedStatus, name: e.target.value });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedStatus) {
      setSelectedStatus({ ...selectedStatus, img: e.target.value });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStatus(null);
  };

  Modal.setAppElement("#root");

  return (
    <div className='grid grid-cols-5 gap-2'>
      {bingo.status.map((status) => (
        <button
          key={status.id}
          className={`w-20 h-20 flex flex-col justify-center items-center overflow-hidden ${
            status.isChecked ? "bg-blue-500" : "bg-white"
          } border border-gray-300 rounded shadow`}
          onClick={() => handleClick(status.id)}
          disabled={status.isChecked}>
          <img
            src={status.img}
            alt={status.name}
            className='w-full h-full object-cover'
          />
          <span className='text-xs'>{status.name}</span>
        </button>
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Item Details'
        className={
          'Modal bg-white w-1/4 h-1/4 p-4 rounded shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        }
        overlayClassName='Overlay'>
        {selectedStatus && (
          <div>
            <input
              type='text'
              value={selectedStatus.name}
              onChange={handleNameChange}
            />
            <input
              type='text'
              value={selectedStatus.img}
              onChange={handleImageChange}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BingoComponent;
