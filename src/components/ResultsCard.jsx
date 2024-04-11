import { Link } from "react-router-dom";

const ResultsCard = ({ results }) => {
  return (
    <Link to="/resultsDetail">
      <div>
        <div>
          <img />
        </div>
        <div>
          <p>Date</p>
          <h3>Event Title</h3>
          <p>Location</p>
        </div>
        <p>Date and Time</p>
      </div>
    </Link>
  );
};

export default ResultsCard;
