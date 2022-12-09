const APIBlock = ({ method, children }) => (
  <div className="w-full border-[0.5px] border-[#E0E0E0] mt-4">
    <div className="flex">
      <p className="px-4 py-2 border-[0.5px] border-[#E0E0E0] bg-[#EDEDED] dark:bg-black w-32 md:w-[9.125rem] flex-shrink-0">
        Method
      </p>
      <div className="px-4 py-2 border-[0.5px] border-[#E0E0E0] w-full">{method}</div>
    </div>
    <div className="flex">
      <p className="px-4 py-2 border-[0.5px] border-[#E0E0E0] bg-[#EDEDED] dark:bg-black w-32 md:w-[9.125rem] flex-shrink-0">
        Sandbox url
      </p>
      <div className="px-4 py-2 border-[0.5px] border-[#E0E0E0] w-full">{children}</div>
    </div>
  </div>
);

export default APIBlock;
