import { useState } from "react";
import Modal from "react-modal";

interface Item {
  title: string;
  id: number;
  img: string;
  isSelected: boolean;
}

const Bingo = () => {
  const initialItems: Item[] = Array(25)
    .fill(null)
    .map((_, index) => ({
      title: `Item ${index + 1}`,
      id: index,
      img: `https://picsum.photos/200/300?random=${index + 1}`,
      isSelected: index === 12,
    }));

  const [items, setItems] = useState<Item[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleClick = (index: number) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, isSelected: !item.isSelected } : item
    );
    setItems(newItems);
    setSelectedItem(newItems[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  Modal.setAppElement("#root");

  return (
    <div className='grid grid-cols-5 gap-2'>
      {items.map((item, index) => (
        <button
          key={item.id}
          className={`w-20 h-20 flex flex-col justify-center items-center overflow-hidden ${
            item.isSelected ? "bg-blue-500" : "bg-white"
          } border border-gray-300 rounded shadow`}
          onClick={() => handleClick(index)}
          disabled={item.isSelected}>
          <img
            src={item.img}
            alt={item.title}
            className='w-full h-full object-cover'
          />
          <span className='text-xs'>{item.title}</span>
        </button>
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Item Details'
        className={
          'Modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow w-96 flex flex-col justify-center items-center'
        }
        overlayClassName='Overlay'>
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <img src={selectedItem.img} alt={selectedItem.title} />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Bingo;
