import React from "react";
import NewsItem from "../../Common/NewsItem";
export default function TopHeadlineContainer(props) {
  return (
    <div className="m-3 sm:m-auto md:max-w-7xl">
      <h1 className="my-3 md:max-w-7xl text-3xl font-bold">Top Headlines</h1>
    <div className="m-3 flex justify-start items-center flex-wrap gap-4">
      {props.newsArticles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            image={news.urlToImage}
            description={news.description}
            author={news.author}
            url={news.url}
            publishedAt={news.publishedAt}
          />
        );
      })}
    </div>
    </div>
  );
}
