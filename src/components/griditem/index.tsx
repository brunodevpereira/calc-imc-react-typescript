import { level } from "../../helpers/imc";
import styles from './griditem.module.css';
import upImage from '../../imagens/up.png';
import downImage from '../../imagens/down.png';

type Props = {
    item: level
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30" /> }
                {item.icon === 'down' && <img src={downImage} alt="" width="30" /> }
            </div>
            <div className={styles.gridTitle}>
                { item.title }
            </div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }    
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}