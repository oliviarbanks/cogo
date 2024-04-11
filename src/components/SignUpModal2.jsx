import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpModal2 = () => {
  const [displayName, setDisplayName] = useState("");
  const [isDesignatedDriver, setIsDesignatedDriver] = useState(false);
  const [maxPassengers, setMaxPassengers] = useState(1);
  const [drivingLimit, setDrivingLimit] = useState(0);

  return (
    <div>
      <h2>Additional Information</h2>
      <label htmlFor="displayName">Display Name:</label>
      <input
        type="text"
        id="displayName"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        required
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <label>Are you a designated driver?</label>
      <input
        type="checkbox"
        id="isDesignatedDriver"
        checked={isDesignatedDriver}
        onChange={(e) => setIsDesignatedDriver(e.target.checked)}
      />
      <label htmlFor="maxPassengers">Max Passengers (excluding driver):</label>
      <select
        id="maxPassengers"
        value={maxPassengers}
        onChange={(e) => setMaxPassengers(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      <label htmlFor="drivingLimit">Driving Radius Limit (miles):</label>
      <input
        type="number"
        id="drivingLimit"
        value={drivingLimit}
        onChange={(e) => setDrivingLimit(parseInt(e.target.value))}
      />
      <Link to="/SignUpModal3">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default SignUpModal2;
