import { Bingo } from "@/types/bingo";

export const initialBingo: Bingo = {
  id: 1,
  title: "Bingo 1",
  author: "Author 1",
  status: Array(25)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "",
      img: "",
      isChecked: false,
    })),
};
