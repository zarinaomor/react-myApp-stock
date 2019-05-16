import React from 'react';

const NewsItem = ({
    datetime,
    headline,
    source,
    url,
    summary
}) => {
    
    return (
        <div className="news">
            <a href={url}> <h4>{ headline }</h4> </a>
            <div>
                <h5>Source: <em>{ source }</em>, 
                { datetime.substring(0,10) }</h5>
            </div>
            <div>
                <p>
                    { summary }
                </p>
            </div>
        </div>
    )
}


export default NewsItem;