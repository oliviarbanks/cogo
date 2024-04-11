import { useState } from "react";

const SignUpModal3 = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [

"Concert",
"Museum",
"Market",
"Sports",
"Club",
"Class",
"Volunteer",
"Bar/Cafe",
"Picnic",
"Bowling",
"Play",
"Sporting",
"Comedy",
"GameNight",
"Bonfire",
"Karaoke",
"PickupGame",
"Stargazing",
"BookClub",
"Networking",
"Party",
"Festival",
"Concert",
"Hiking",
"Camping",
"RoadTrip",
"Volunteer",
"Sports league",
"Dance class ",
"Board game cafe",
"Cooking class ",
"Art class ",
"Trivia night ",
"Escape room ",
"Sporting event "
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
