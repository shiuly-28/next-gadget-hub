import Banner from "./components/shared/Banner";
import NewsCard from "./components/shared/NewsCard";
import { NewsItems } from "./types/news";


const Home = async() => {
  const data = await fetch('http://localhost:5000/api/news');
  const news = await data.json();

  return (
   <div className="py-12">
    <Banner/>
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8">latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          news.slice(0, 3).map((item: NewsItems) =>(
            <NewsCard key={item?._id} item={item}/>
          ))
        }
      </div>
    </div>
   </div>
  );
}
export default Home