import React from "react";

function UrlList(props) {
    const BACKEND_URI = '//localhost:4000'
  return (
    <div className="UrlList">
      {props.urls.map((urlObject) => {
          const { url, slug } = urlObject
          return (
            <div className="Url">
              <h2><a href={`${BACKEND_URI}/${slug}`} target="_blank">{`${slug}`}</a></h2>
              <p>
                <b>Original: </b>
                <a href>{url}</a>
              </p>
              <p>
                <b>Shortened: </b>
                <a href={`${BACKEND_URI}/${slug}`} target="_blank">{`${BACKEND_URI}/${slug}`}</a>
              </p>
            </div>
          )
      })}
    </div>
  );
}

export default UrlList;
