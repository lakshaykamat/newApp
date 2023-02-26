import Navbar from "./Components/Common/Navbar";
import NewsItem from "./Components/Common/NewsItem";
import newsData from './assets/sample.json'
import TopHeadlineContainer from "./Components/Pages/Home/TopHeadlineContainer";
import SearchBox from "./Components/Pages/Home/SearchBox";
function App() {
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
