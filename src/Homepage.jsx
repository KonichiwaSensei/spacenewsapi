import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'

import Article from "./Article";
import ArticleDetail from "./ArticleDetail";

export default function Homepage() {

    const [news, setNews] = useState('');

    const [offset, setOffset] = useState(0)

    const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${offset}`

    const loadNews = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setNews(data)
        // console.log(data);
    }

    useEffect(() => {
        loadNews()
    }, [offset])

    return (
        <main className="main">
            <h1>Space News</h1>
            <Routes>
                <Route path='/' element={ <Article news={news} offset={offset} setOffset={setOffset} /> } />
                <Route path='articles/:id' element={ <ArticleDetail /> } />
            </Routes>
            
        </main>
    )

}   