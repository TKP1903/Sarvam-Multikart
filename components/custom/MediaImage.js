import { Media } from "reactstrap";
const Img = ({ ref, src, alt, className, ...props }) => {
  return (
    <Media
      ref={ref}
      src={src}
      className={"img-fluid" + (className ? " " + className : "")}
      alt={alt}
      // style={{ width: "30%" }}
      {...props}
    />
  );
};

export default Img;
