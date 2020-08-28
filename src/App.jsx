import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles: rawArticles }) {
    const [articles, setArticles] = useState(rawArticles);

    useEffect(() => {
        let i, j, temp;
        const n = articles.length;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (new Date(articles[j].upvotes) < new Date(articles[j + 1].upvotes)) {
                    temp = articles[j];
                    articles[j] = articles[j + 1];
                    articles[j + 1] = temp;
                }
            }
        }
        setArticles([...articles]);
    }, []);

    const upvoted = () => {
        let i, j, temp;
        const n = articles.length;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (new Date(articles[j].upvotes) < new Date(articles[j + 1].upvotes)) {
                    temp = articles[j];
                    articles[j] = articles[j + 1];
                    articles[j + 1] = temp;
                }
            }
        }
        setArticles([...articles]);
    }

    const recent = () => {
        let i, j, temp;
        const n = articles.length;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (new Date(articles[j].date) < new Date(articles[j + 1].date)) {
                    temp = articles[j];
                    articles[j] = articles[j + 1];
                    articles[j + 1] = temp;
                }
            }
        }
        setArticles([...articles]);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={upvoted} >Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={recent} >Most Recent</button>
            </div>
            <Articles articles={articles} />
        </div>
    );

}

export default App;
