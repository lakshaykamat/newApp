import React from "react";
import NewsItem from "../../Common/NewsItem";
export default function TopHeadlineContainer(props) {
  return (
    <div className="m-3 sm:m-auto md:max-w-7xl">
      <div className="flex justify-center sm:justify-between flex-wrap items-ceneter mx-6 mb-14">
        <div className="text-start">
          <h1 className="my-3 md:max-w-7xl text-4xl font-bold text-start">
            Top Headlines
          </h1>
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          <div>
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Category</option>
              <option 
              value="US">Bussiness</option>
              <option value="entertainment">Entertainment</option>
              <option value="general">General</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div>
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>

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
