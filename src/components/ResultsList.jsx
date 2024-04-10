import ResultsCard from "./ResultsCard"

const ResultsList = ({results}) => {
  return (
           <div >
            <div >
                {results.map((results) =>
                {
                    return (
                        <ResultsCard results={results} />
                    )
                })}
            </div>
        </div>
  )
}

export default ResultsList