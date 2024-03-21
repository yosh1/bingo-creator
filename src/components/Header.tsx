const Header = (
  { title }: { title: string }
) => {
  return (
    <header className="w-full h-16 bg-gray-100 shadow p-5">
      <h1 className="text-2xl font-bold text-center leading-16">
        {title}
      </h1>
    </header>
  );
}

export default Header;
