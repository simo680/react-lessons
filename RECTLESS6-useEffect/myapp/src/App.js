import Example from "./components/Example";
import Todos from "./components/Todos";
import User from "./components/User";
// useEffect - это функция, которая следит за каждым этапом жизненного цикла компонента и 
// выполняет побочный код
// пример смотреть в компоненте Example


function App() {
  return (
    <div>
      {/* <Todos/> */}
      <User/>
    </div>
  );
}

export default App;
