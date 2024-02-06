export const Hero = ({ heroName, age, children }) => {
  return (
    <>
      <div>
        I'm {heroName}..my age is {age}...
      </div>
      <h1>{children}</h1>
    </>
  );
};
