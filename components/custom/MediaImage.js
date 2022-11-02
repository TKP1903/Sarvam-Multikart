
import { Media } from "reactstrap";
const Img = ({ src, alt, className, ...props }) => {
  return (
    <Media
      src={src}
      className={"img-fluid" + (className ? " " + className : "")}
      alt={alt}
      // style={{ width: "30%" }}
      {...props}
    />
  );
};

export default Img;