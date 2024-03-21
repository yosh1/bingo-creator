import Bingo from "@/components/Bingo";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header title='Bingo' />
      <main className='flex justify-center items-center h-screen bg-gray-100'>
        <Bingo />
      </main>
    </>
  );
}

export default Home;
