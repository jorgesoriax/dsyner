import { Link } from "react-scroll";
import RoundedButton from "./RoundedButton";

export default function RoundedScrollButton({ to, children, ...props }) {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={500}>
      <RoundedButton {...props} onClick={(e) => e.preventDefault()}>
        {children}
      </RoundedButton>
    </Link>
  );
}
