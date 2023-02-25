import Navbar from "./Components/Common/Navbar";
import NewsItem from "./Components/Common/NewsItem";
import newsData from './assets/sample.json'
import TopHeadlineContainer from "./Components/Pages/Home/TopHeadlineContainer";
function App() {
  return (
    <>
    <Navbar/>
    <TopHeadlineContainer
    newsArticles={newsData.articles}/>
    {/* <NewsItem
    newsData={newsData}/> */}
    
    </>
  );
}

export default App;
