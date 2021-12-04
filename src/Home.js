import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {BASE_URL}  from './util'

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(BASE_URL + '/blogs')


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
