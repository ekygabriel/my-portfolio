import classes from "./Loading.module.scss";

const PageLoading = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Inner}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <div className={classes.shadow}></div>
        <span>Please Wait</span>
      </div>
    </div>
  );
};

export default PageLoading;
