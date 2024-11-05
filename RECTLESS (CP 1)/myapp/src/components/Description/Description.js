import style from "../Description/Description.module.css";

function Description(props) {
  const { isMain, title, text, classStyle } = props;

  return (
    <div className={style.description_wrapper}>
      {{ isMain } ? (
        <h1 className={classStyle.blue_main}>{title}</h1>
      ) : (
        <h2 className={classStyle.white_main}>{title}</h2>
      )}
      <p className={isMain ? classStyle.blue_second : classStyle.white_second}>
        {text}
      </p>
    </div>
  );
}

export default Description;
