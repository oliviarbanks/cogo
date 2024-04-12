
import ResultsCard from "./ResultsCard";
import { useLocation } from "react-router-dom";

const ResultsList = ({ results }) => {
  
  return (
    <div>
      <div>
        {results.map((results) => {
          return <ResultsCard results={results} />;
        })}
      </div>
    </div>
  );
};

export default ResultsList;
