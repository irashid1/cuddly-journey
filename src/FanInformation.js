const FanInformation = (props) => {

    console.log(props);

    const { teamName, number, city, stadium, followTeamFunction } = props;

    const followMySpecificTeam = () => { followTeamFunction(teamName) };

    return (
        <div>
            <h2>Welcome to the Fan Area of the {teamName}</h2>
            <p>They are the number {number} team!</p>
            <button onClick={followMySpecificTeam}>I Love this team, Tell me MORE!!!</button>
            <p>They are from {city} and their stadium is {stadium.name} and it seats {stadium.capacity}</p>
        </div>
    )
}
export default FanInformation;