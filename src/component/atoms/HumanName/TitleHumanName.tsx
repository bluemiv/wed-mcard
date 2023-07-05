interface TTitleHumanNameProps {
  name: string;
}
const TitleHumanName = ({ name }: TTitleHumanNameProps) => {
  return <p className="text-xl font-bold">{name}</p>;
};

export default TitleHumanName;
