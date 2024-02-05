export const Players = () => {
  return (
    <div>
      <PlayerName n="Sachin" l="Mumbai" />
      <PlayerName n="Dhoni" l="Ranchi" />
      <PlayerName n="Kohli" l="Delhi" />
    </div>
  );
};

const PlayerName = ({n,l}) => {
  return (
    <>
      <p>I'm {n},I'm from {l}</p>
    </>
  );
};
