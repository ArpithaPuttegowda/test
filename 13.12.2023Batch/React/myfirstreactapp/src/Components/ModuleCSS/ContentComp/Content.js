import styles from "./content.module.css"
export const Content = () => {
  return (
    <div>
      <p>
        In this example, Button is a styled component created using the
        styled.button syntax, where you can write CSS directly inside the
        backticks (template literals). This Button component can now be used
        like any other React component.
      </p>
      <button className={styles.btn}>Click me</button>
      <h1 id={styles.react}>React</h1>
    </div>
  );
};


// content_btn__QYu1U

// btn_btn__CN5e6 
