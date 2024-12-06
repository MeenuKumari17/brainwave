import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            className="flex items-center flex-1 justify-center h-[8.5rem]"
            key={i}
          >
            <img src={logo} width={134} height={28} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
