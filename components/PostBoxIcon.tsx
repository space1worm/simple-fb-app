interface Props {
  Icon: React.ElementType;
  text: string;
  onClick?: () => void;
  IconClass: string;
}

export default function PostBoxIcon(props: Props) {
  const { Icon, text, onClick, IconClass } = props;

  return (
    <div onClick={onClick} className="inputIcon xs:p-0">
      <Icon className={`h-5 sm:h-7 ${IconClass}`} />
      <p className="text-xs sm:text-sm xl:text-base">{text}</p>
    </div>
  );
}
