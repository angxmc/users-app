import { useState } from "react";
import styles from "./Counter.module.css";

function Counter(props) {
  //hook is built-in function that contains some functionality. we have to call it

  //declare a new state variable
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    // setCounter(counter + 1);
    // - even if we use this three time, it will always increase one because it will look at the initial stat of State, which is 0, within the same rendering
    //=if we want to increase it 3 at a time:
    setCounter(prevState => prevState +1);
    setCounter(prevState => prevState +1);
    setCounter(prevState => prevState +1);
  };
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <h3>{counter}</h3>
      <button onClick={handleClick}>Increase</button>
      <button onClick={()=> setCounter(counter -1)}>Decrease</button>
    </div>
  );
}

export default Counter;
