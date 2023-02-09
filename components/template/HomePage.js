import AboutMe from '../module/AboutMe';
import Banner from '../module/Banner';
import Featured from '../module/Featured';
import WorkProject from '../module/WorkProject';

const HomePage = () => {
  return (
    <div>
        <Banner />
        <AboutMe />
        <WorkProject />
        <Featured />
    </div>
  )
}

export default HomePage;