import styles from './resultContainer.module.scss';
import ResultCard from '../Card/poster/resultCard';

const ResultContainer = ({ result }) => {
    return <div className={styles.container}>
        {result.map((item, index) =>
            <ResultCard key={index} result={item} detailed/>
        )}
    </div>
}

export default ResultContainer;
