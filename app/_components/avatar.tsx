import DateFormatter from "./date-formatter";

type Props = {
  name: string;
  picture: string;
  dateString: string;
};

const Avatar = ({ name, picture, dateString }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-16 h-16 rounded-full mr-4" alt={name} />
      <div>
        <div className="text-xl font-bold">{name}</div>
        <DateFormatter dateString={dateString} />
      </div>
    </div>
  );
};

export default Avatar;
