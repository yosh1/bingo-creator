import { useState } from "react";
import { Bingo, StatusInfo } from "@/types/bingo";
import { initialBingo } from "@/state/initialBingoState";

const useBingoState = () => {
  const [bingo, setBingo] = useState<Bingo>(initialBingo);
  const [selectedStatus, setSelectedStatus] = useState<StatusInfo | null>(null);

  const handleClick = (statusId: number) => {
    setSelectedStatus(
      bingo.status.find((status) => status.id === statusId) || null
    );
  };

  const handleSave = () => {
    if (selectedStatus) {
      const newBingo = {
        ...bingo,
        status: bingo.status.map((status) =>
          status.id === selectedStatus.id
            ? { ...status, name: selectedStatus.name, img: selectedStatus.img }
            : status
        ),
      };
      setBingo(newBingo);
      setSelectedStatus(null);
    }
  };

  const closeModal = () => setSelectedStatus(null);

  return { bingo, handleClick, selectedStatus, closeModal, handleSave };
};

export default useBingoState;
