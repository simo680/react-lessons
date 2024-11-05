import style from "./About.module.css";

function About() {
  return (
    <div className={style.about_wrapper}>
      <p className="blue_second_text">
        Приехав к нам однажды, многие наши клиенты становятся постоянными, а
        часть из них даже друзьями.
      </p>
      <p className="blue_second_text">
        А также в нашей мастерской можно отремонтировать электросамокат и
        электровелосипед.
      </p>
    </div>
  );
}

export default About;
