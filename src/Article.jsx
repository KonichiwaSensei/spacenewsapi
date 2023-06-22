import { Routes, Route, Link } from 'react-router-dom'

export default function Article({ news, offset, setOffset }) {

    const changeOffset = (change) => {
        setOffset(Math.max(offset + change, 0))
        // console.log(offset);
    }

    return (
        <>{news === ''
            ? ''
            :
            <>
                <button onClick={() => changeOffset(-10)}>Previous</button>
                <span>  Page: {Number(offset / 10 + 1)}  </span>
                <button onClick={() => changeOffset(+10)}>Next</button>
            </>}
            <>
                {news === ''
                    ?
                    <div>Loading..</div>
                    :
                    news.map(news =>
                        <div key={news.id}>
                        <Link to={'/articles/' + news.id}>
                            <h3>{news.title}</h3>
                            <hr />
                        </Link>
                        </div>
                    )}
            </>
        </>
    )
}