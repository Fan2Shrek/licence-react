import { useEffect, useState } from "react";

import styles from "./category.module.scss";
import filmApi from "../../lib/filmApi";
import CategoryCard from "../../components/Card/category/categoryCard";
import FilmContainer from "../../components/Container/filmContainer";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        filmApi.getCategories()
        .then(res => res.json())
        .then(data => setCategories(data.genres))
    }, [])

    useEffect(() =>{
        const ids = selectedCategories.reduce((acc, cur) => acc.push(cur.id) && acc, []);

        filmApi.advancedSearch({with_genres: ids.join('|')})
        .then(res => res.json())
        .then(data => setResults(data.results))
    }, [selectedCategories])

    const handleClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    return <div className={styles.content}>
            <h1>Nos catégories :</h1>
            <div className={styles['category--container']}>
                {categories.map((category) =>
                    <div key={category.id} onClick={() => handleClick(category)}>
                        <CategoryCard category={category} selected={selectedCategories.includes(category)}/>
                    </div>
                )}
            </div>
            <FilmContainer films={results} detailed/>
    </div>;
}

export default Category;
