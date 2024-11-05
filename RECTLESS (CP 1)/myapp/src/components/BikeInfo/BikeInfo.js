import Description from "../Description/Description";
import style from "./BikeInfo.module.css";
import imgRentBikes from "./img/bikes.png";

function BikeInfo() {
  return (
    <div className={style.Bikeinfo_wrapper}>
      <img src={imgRentBikes} />
      <Description
        isMain={true}
        title={"Прокат велосипедов"}
        classStyle={{
          blue_main: "blue_main_text",
          blue_second: "blue_second_text",
        }}
        text={
          "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!"
        }
      />
    </div>
  );
}

export default BikeInfo;
