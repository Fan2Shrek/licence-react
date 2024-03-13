import { useState } from 'react';
import styles from './categoryCard.module.scss';

const CategoryCard = ({category, selected: selectedProps = false}) => {
    const [selected, setSelected] = useState(selectedProps);
    const classes = [styles.card];

    if(selected) {
        classes.push(styles['selected']);
    }

    return <div className={classes.join(' ')} onClick={() => setSelected(selected => !selected)}>
            <h2>{category.name}</h2>
    </div>
}

export default CategoryCard;
