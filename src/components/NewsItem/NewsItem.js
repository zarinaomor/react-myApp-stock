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
            <a href={url}> <h6>{ headline }</h6> </a>
            <div>
                Source: <em>{ source }</em>, 
                { datetime.substring(0,10) }
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