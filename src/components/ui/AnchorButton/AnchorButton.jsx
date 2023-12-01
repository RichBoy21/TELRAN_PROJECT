import styles from './AnchorButton.module.css'


const AnchorButton = ({ path, className, title }) => {
    return (
      <a href={path} className={styles[className]}>
        {title}
      </a>
    );
  };

  export default AnchorButton