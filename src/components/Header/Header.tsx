import "./Header.scss";

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <>
      <div id="header">
        <div>{title}</div>
      </div>
    </>
  );
}