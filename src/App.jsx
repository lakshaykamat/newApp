import Navbar from "./Components/Common/Navbar";
import NewsItem from "./Components/Common/NewsItem";
import newsData from './assets/sample.json'
import TopHeadlineContainer from "./Components/Pages/Home/TopHeadlineContainer";
import SearchBox from "./Components/Pages/Home/SearchBox";
import { useEffect, useState } from "react";
function App() {
  // const [TOP_HEADLINES, setTOP_HEADLINES] = useState([]);
  // const [country, setCountry] = useState('us')
  // const API_KEY = "a921d5eb7a554c5cbd0fb747fbe10d61"
  // // const API_KEY = "a921d5eb7a554c5cbd0fb747fbe10d610"
  // const fetchData = async (country,API_KEY) => {
  //   const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`);
  //   const data = await response.json();
  //   console.log(data)
  //   return TOP_HEADLINES(data);
  // }

  // useEffect(() => {
  //   fetchData(country,API_KEY);
  // },[])
  // // console.log(TOP_HEADLINES)
  return (
    <>
    <Navbar/>
    <SearchBox/>
    <TopHeadlineContainer
    newsArticles={newsData.articles}/>
    
    </>
  );
}

export default App;
