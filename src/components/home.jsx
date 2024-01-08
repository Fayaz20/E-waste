
import './Home.css';

function Home() {
  return (
      <div>
        <main className="home_main">
          <div>
          <section className="home_1">
            <h2>TOGETHER, LET'S POWER UP<br/>RECYCLING FOR A< br />BETTER TOMORROW</h2>
            <p>Join us to turn trash into treasure</p>
            <div className="home_button">
            <a href="#">Explore Now</a>
            </div>
            
          </section>
          </div>
          <div className='home_img'>
            <img src="https://www.e-wastesolution.com/assets/images/resources/leading-waste-img-1.jpg"/>
          </div>

        </main>
        {/* <footer>
          <p>&copy; 2023 E-Revive</p>
        </footer> */}
      </div>
    );
}

export default Home;