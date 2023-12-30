import styles from "./AppHeader.module.css";

const AppHeader = ({ name }) => {
  return (
    <header className={styles.heading}>
      <h2>{name}</h2>
    </header>
  );
};

export default AppHeader;
