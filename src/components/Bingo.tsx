import { useState } from "react";

const Bingo = () => {
  // 初期状態での要素の配列
  const initialItems = Array(25)
    .fill(null)
    .map((_, index) => ({
      title: `Item ${index + 1}`,
      id: index,
      img: `https://picsum.photos/200/300?random=${index + 1}`,
      isSelected: index === 12, // 中央の要素を初期状態で選択済みに
    }));

  const [items, setItems] = useState(initialItems);

  const handleClick = (index: number) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, isSelected: !item.isSelected } : item
    );
    setItems(newItems);
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
      </div>
  );
};

export default Bingo;
