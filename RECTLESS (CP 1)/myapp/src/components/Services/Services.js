import Description from "../Description/Description";
import style from "./Services.module.css";
import imgBikes from "./img/bikes.png";

function Services() {
  return (
    <div className={style.services_wrapper}>
      <Description
        isMain={false}
        title={"Что мы предлагаем"}
        classStyle={{
          white_main: "white_main_text",
          white_second: "white_second_text",
        }}
        text={
          "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. "
        }
      />
      <img src={imgBikes} />
    </div>
  );
}

export default Services;
