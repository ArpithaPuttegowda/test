import "./button.css"
import styles from "./btn.module.css"

export const Button = () => {
  return (
    <>
    <button className="btn">Click me</button>
    <button className={`${styles.btn} ${styles["m-t"]}`}>Click me</button>
    </>
  )
}
