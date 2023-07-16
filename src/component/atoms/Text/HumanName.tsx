interface THumanNameProps extends TCommonReactNode {
  name: string;
}
const HumanName = ({ name, className }: THumanNameProps) => {
  return <p className={['text-xl font-bold', className].filter((d) => !!d).join(' ')}>{name}</p>;
};

export default HumanName;
