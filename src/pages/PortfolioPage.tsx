import { useSearchParams } from "react-router-dom";
import Portfolio from "../components/sections/Portfolio";

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="pt-16 sm:pt-20">
      <Portfolio initialCategory={category || "All"} />
    </div>
  );
};

export default PortfolioPage;
