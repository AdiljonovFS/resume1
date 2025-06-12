import rasm from '../assets/Fatxulla.jpg';

const InfoItem = ({ title, description }) => (
  <p className="text-gray-600">
    <strong>{title}:</strong> {description}
  </p>
);

const LinkItem = ({ href, label }) => (
  <li>
    <a href={href} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </li>
);

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    {children}
  </section>
);

const MainContent = () => {
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <img src={rasm} alt="Profile" className="w-20 h-24 rounded-md" />
        <div className="pl-6">
          <h1 className="text-4xl font-bold">FATXULLA ADILJONOV</h1>
          <h2 className="text-xl text-gray-600">FRONTEND DEVELOPER</h2>
        </div>
      </div>

      {/* About Me */}
      <Section title="ABOUT ME">
        <p>
          I am a beginner Frontend developer. It’s been 2 years since I started programming. 
          During this time, I have built websites with my team. Currently, I am graduating 
          from Astrum IT Academy, and my passion for programming is very high.
        </p>
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        <InfoItem title="Astrum IT Academy" description="2022 – 2023 | Full Stack Web Developer" />
      </Section>

      {/* Experience */}
      <Section title="EXPERIENCE">
        <InfoItem title="Noxon FX Trading Community" description="2023 – 2024 | Frontend Developer" />
        <InfoItem title="United Bridge" description="2024 – Present" />
        <p>
          My team and I at the NOXON FX trading community have developed a website and 
          we continue to improve it. My work here is remote.
        </p>
      </Section>

      {/* My Work */}
      <Section title="MY WORK">
        <ul className="list-disc pl-5 space-y-2">
          <LinkItem href="https://uzgreenwall.uz/" label="UzGreenWall.uz" />
          <LinkItem href="https://firstsitenoxon.netlify.app/" label="First Website (Noxon)" />
          <LinkItem href="https://movie-frontend-vite.vercel.app/" label="Demo Movie App" />
          <LinkItem href="https://adminpanel-woad.vercel.app/" label="Admin Panel (Edu API noConnection)" />
          <LinkItem href="https://boriga-baraka-vimv.vercel.app/" label="Boriga Baraka Admin Panel  (that is only used to get information)" />
          <LinkItem href="https://my-way-demo-1.vercel.app/" label="MyWay (my-way demo version)" />
{/*           <LinkItem href="https://uzgreenwall.uz/" label="UzGreenWall.uz" /> */}
        </ul>
      </Section>

      {/* Certificates */}
      <Section title="MY CERTIFICATES">
        <ul className="list-disc pl-5 space-y-2">
          <LinkItem
            href="https://upskill.us.qwasar.io/certificates/MTM1Ni1hZGlsamFub19mLWp1bC0yMDIxLTMwLWE4ZDg="
            label="FULLSTACK ENGINEERING"
          />
          <LinkItem
            href="https://upskill.us.qwasar.io/certificates/MTI1Mi1hZGlsamFub19mLW1heS0yMDIxLTIwLWIyZmU="
            label="ADVANCED FRONTEND DEVELOPMENT"
          />
        </ul>
      </Section>
    </div>
  );
};

export default MainContent;
