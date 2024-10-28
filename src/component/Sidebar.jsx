const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-full md:w-1/4">
      <h2 className="text-2xl font-bold mb-8">SKILLS</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Html</li>
        <li>Css</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
      </ul>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">LANGUAGE</h2>
        <p>Uzbek: 100%</p>
        <p>English: 35%</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">REFERENCES</h2>
        <p>Fatxulla Adiljonov</p>
        <p>Phone: +998 (93) 260 49 97</p>
        <p>Email: adiljonovfatxulla42@gmail.com</p>
        <p>
          GitHub: 
          <a href="https://github.com/AdiljonovFS" className="underline">
            AdiljonovFS
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
