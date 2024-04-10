import { useState } from "react";

const SignUpModal3 = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    "Sports",
    "Music",
    "Travel",
    "Foodie",
    "Gaming",
    "Movies",
    "Reading",
    "Outdoors",
  ];

  const handleInterestSelect = (interest) => {
    const newSelectedInterests = [...selectedInterests];

    // Remove interest if already selected
    if (newSelectedInterests.includes(interest)) {
      const index = newSelectedInterests.indexOf(interest);
      newSelectedInterests.splice(index, 1);
    } else {
      // Add interest if not already selected
      newSelectedInterests.push(interest);
    }
    setSelectedInterests(newSelectedInterests);
  };

  return (
    <div>
      <h2>Your Interests</h2>
      {interests.map((interest) => (
        <button
          type="button"
          key={interest}
          onClick={() => handleInterestSelect(interest)}
        >
          {interest}
        </button>
      ))}
      <Link to="/">
        <button>Complete Profile</button>
      </Link>
    </div>
  );
};

export default SignUpModal3;
