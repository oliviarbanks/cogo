import ResultsList from "./ResultsList";

const ResultsContainer = ({ heading }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <ResultsList results={results} />
    </div>
  );
};

export default ResultsContainer;
