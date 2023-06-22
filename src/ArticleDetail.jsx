import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArticleDetail() {

    const {id} = useParams();
    console.log(id); 

    const [article, setArticle] = useState('');

    const url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`

    const loadNews = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setArticle(data)
        console.log(data);
    }

    useEffect(() => {
        loadNews()
    }, [])



    return (
        <>
            {article === ''
                ?
                <div>Loading..</div>
                :
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        {/* <p>{news.publishedAt}</p> */}
                        <img src={article.imageUrl} alt={article.id} />
                        <p>{article.summary} | <a href={article.url} target="_blank">Link to full article</a></p>
                        <hr />
                        <Link to='/'>Back</Link>
                    </div>
                    
                }
        </>
    )
}