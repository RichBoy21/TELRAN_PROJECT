import styles from './Modal.module.css'
import white from '../../../assets/images/white.svg'


const Modal = ({ active, setActive, children }) => {
    return <div className={`${styles.modal} ${active ? styles.active : styles.modal}`} onClick={setActive}>
        <div className={`${styles.modalContent} ${active ? styles.active : styles.modalContent}`} onClick={e => e.stopPropagation()}>
            <div className={styles.children}>
                {children}
            </div>
            <div>
                <img src={white} className={styles.white} onClick={setActive} />
            </div>
        </div>
    </div>;
}

export default Modal;