/** @format */

import { useState } from "react";
import Modal from "react-modal";

const Bingo = () => {
  // Initial array of elements
  const initialItems = Array(25)
    .fill(null)
    .map((_, index) => ({
      title: `Item ${index + 1}`,
      id: index,
      img: `https://picsum.photos/200/300?random=${index + 1}`,
      isSelected: index === 12, // Center element is selected by default
    }));

  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item

  const handleClick = (index: number) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, isSelected: !item.isSelected } : item
    );
    setItems(newItems);
    setSelectedItem(items[index]); // Set the selected item for modal display
    setIsModalOpen(true); // Open the modal when an item is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        className='Modal'
        overlayClassName='Overlay'>
        <div>
          {selectedItem && (
            <div>
              <h2>{selectedItem.title}</h2>
              <img src={selectedItem.img} alt={selectedItem.title} />
              <button onClick={closeModal}>Close</button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Bingo;
