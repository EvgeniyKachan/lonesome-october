import clsses from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={clsses.loading_spinner__overlay}>
      <div className={clsses.lds_dual_ring}></div>
    </div>
  );
};

export default LoadingSpinner;
