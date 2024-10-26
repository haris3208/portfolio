const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component
        className={"size-10 text-sky-400  fill-[url(#tech-icon-gradient)]"}
      />
      <svg className={"size-0 absolute"}>
        <linearGradient id={"tech-icon-gradient"}>
          <stop stopColor={"rgb(110 231 183)"} offset={"0%"} />
          <stop stopColor={"rgb(56 189 248)"} offset={"100%"} />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
