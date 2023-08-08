function Test() {
  return (
    <div className="tailwind-css bg-black h-screen">
      <div className="text-2xl font-bold text-white flex items-center flex-col md:flex-row justify-center h-full gap-4">
        <p className="mb-0 pr-0 md:pr-6 border-e-0 md:border-e-2 border-white border-solid hover:text-[#F2B944]">
          Hello world!
        </p>
        <p className="mb-0 hover:text-[#F2B944]">Hello world!</p>
      </div>
    </div>
  );
}

export default Test;
