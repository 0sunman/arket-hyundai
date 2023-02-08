import base from "./base.module.scss";

/*

          

*/

const SimpleBanner = ({ ...props }) => {
  const { icon, clsName, text } = props;
  return (
    <div
      className={
        (clsName === undefined ? "" : clsName + " ") +
        "u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 " +
        base.modalPopup
      }
    >
      <p>{text}</p>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SimpleBanner;
