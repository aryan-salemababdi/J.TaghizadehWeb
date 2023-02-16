import AboutMe from '../module/AboutMe';
import Banner from '../module/Banner';
import Featured from '../module/Featured';
import WorkProject from '../module/WorkProject';
import Blog from './../module/Blog';

const HomePage = () => {
  return (
    <div>
        <Banner />
        <AboutMe />
        <WorkProject />
        <Featured />
        <Blog />
    </div>
  )
}

export default HomePage;