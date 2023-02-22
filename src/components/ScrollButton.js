import { Link } from "react-scroll";
import Button from "./Button";

export default function ScrollButton({ to, children, ...props }) {
  return (
    <Link activeClass="active" to={to} spy={true} smooth={true} duration={500}>
      <Button {...props} onClick={(e) => e.preventDefault()}>
        {children}
      </Button>
    </Link>
  );
}
