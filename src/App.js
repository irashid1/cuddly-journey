import FanInformation from "./FanInformation.js";
import PageHeading from "./PageHeading.js";

function App() {

  const ancientBirbsTeam = {
    name: "Torrano Ancient Birbs",
    city: "Torrano",
    stadium: {
      name: "Birbs Nest",
      capacity: 30000
    },
    id: 1,
  }

  const modernBirbsTeam = {
    name: "Torrano Modern Birbs",
    city: "Torrano",
    stadium: {
      name: "Birb Roost",
      capacity: 30001
    },
    id: 2
  }

  const treeFingersTeam = {
    name: "Toronto Tree Fingers",
    city: "Toronto",
    stadium: {
      name: "Birbs Nest",
      capacity: 31001
    },
    id: 3
  }

  const sportsTeams = [ancientBirbsTeam, modernBirbsTeam, treeFingersTeam];

  const followTeam = (name) => {
    console.log(`You are now following ${name}!`);
  }

  return (
    <div>
      <PageHeading>
        <h1>ALL THE SPORTS TEAMS!!</h1>
        <p>THIS IS THE BEST CHANGE EVER</p>>
      </PageHeading>
      <div>
        {sportsTeams.map((team, index) => {
          return (<FanInformation
            teamName={team.name}
            key={team.id}
            id={team.id}
            number={index}
            city={team.city}
            stadium={team.stadium}
            followTeamFunction={followTeam}
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
