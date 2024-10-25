const OptionItem = ({ icon, label }) => {
    return (
      <div className="flex flex-col items-center p-4 w-[200px] h-[150px] mx-auto  shadow-md rounded-lg transition-transform transform hover:scale-105">
        <img src={icon} alt="" width={"90px"} height={'90px'}/>
        <span className="mt-2 text-gray font-semibold">{label}</span>
      </div>
    );
  };
  
  export default OptionItem;