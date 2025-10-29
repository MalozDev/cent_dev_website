import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Portfolio from "../components/sections/Portfolio";

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      <Portfolio initialCategory={category || "All"} />
    </div>
  );
};

export default PortfolioPage;
