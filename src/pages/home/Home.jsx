import Sidebar from '../../components/sidebar/Sidebar'
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">containers</div>
    </div>
  )
}

export default Home