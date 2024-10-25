import { AiOutlineArrowLeft, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function Jarimalar() {
  const navigate = useNavigate();

  const fines = [
    {
      id: 1,
      title: "DADD dan jarima keldi!",
      description: "Tezlikni oshirganlik uchun jarima",
      amount: "300 000 so’m",
      date: "09.10.2024",
      status: "unpaid",
    },
    {
      id: 2,
      title: "DADD dan jarima keldi!",
      description: "Tezlikni oshirganlik uchun jarima",
      amount: "300 000 so’m",
      date: "09.10.2024",
      status: "partial",
      paid: "35 000 so’m",
      remaining: "85 000 so’m",
    },
    {
      id: 3,
      title: "DADD dan jarima To’landi!",
      description: "Tezlikni oshirganlik uchun jarima",
      amount: "300 000 so’m",
      date: "09.10.2024",
      status: "paid",
    },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "unpaid":
        return "text-red";
      case "partial":
        return "text-yellow-500";
      case "paid":
        return "text-green-500";
      default:
        return "";
    }
  };

  const handleCardClick = (fine) => {
    const fineWithDetails = {
      ...fine,
      details: {
        date: "12.10.2024",
        rule: "128 - modda 1 - band",
        decisionDate: "12.10.2024",
        description: "Tezlikni oshirish (20 km/soat dan ko’p bo’lmagan)",
        fineAmount: fine.amount,
        paidAmount: fine.status === "partial" ? fine.paid : fine.amount,
        remainingAmount: fine.status === "partial" ? fine.remaining : "0 so’m",
        location: "M-37 avtomobil yo’lining 263-277, 5 km (Buxoro shahar)",
      },
    };
    navigate(`/jarimalar/${fine.id}`, { state: { fine: fineWithDetails } });
  };

  return (
    <div className="min-h-screen max-w-full mx-auto md:px-40 px-10 p-5 text-gray">
      <div className="text-center mb-6">
        <div className="absolute top-4 left-4">
          <BackButton /> {/* Back button */}
        </div>
        <h1 className="ml-4 text-2xl font-bold ">Jarimalar</h1>
        <div></div>
      </div>

      {/* Unpaid and Partial Fines Section */}
      {fines
        .filter((fine) => fine.status !== "paid")
        .map((fine) => (
          <div
            key={fine.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => handleCardClick(fine)}
          >
            <div>
              <h2 className={`${getStatusStyles(fine.status)} text-xl font-bold`}>
                {fine.title}
              </h2>
              <p className="">{fine.description}</p>
              <hr className="my-2" />
              {fine.status === "partial" ? (
                <div>
                  <p className="text-tasdiq">To'landi: {fine.paid}</p>
                  <p className="text-red">To'lash kerak: {fine.remaining}</p>
                </div>
              ) : (
                <p className="text-blue-500 text-2xl">{fine.amount}</p>
              )}
            </div>
            <p className="text-gray">{fine.date}</p>
          </div>
        ))}

      {/* Paid Fines Section */}
      <div className="my-6">
        <hr />
        <h2 className="text-center text-lg font-bold my-2">To'langan</h2>
        <hr />
      </div>

      {fines
        .filter((fine) => fine.status === "paid")
        .map((fine) => (
          <div
            key={fine.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center cursor-pointer"
            onClick={() => handleCardClick(fine)}
          >
            <div>
              <h2 className="text-green-500 text-xl font-bold">{fine.title}</h2>
              <p className="text-gray-500">{fine.description}</p>
              <hr className="my-2" />
              <p className="text-2xl text-green-500">{fine.amount}</p>
            </div>
            <p className="text-gray">{fine.date}</p>
          </div>
        ))}
    </div>
  );
}

export default Jarimalar;
