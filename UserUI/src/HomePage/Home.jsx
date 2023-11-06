import './Home.css';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1 className='quote'>天上天下唯我独尊</h1>
      </header>
      <main>
        <p className='nameGojo'>Satoru Gojo</p>
        <img  className='imgGojo' src="https://steamuserimages-a.akamaihd.net/ugc/2047492630802687754/AB9A925B18C0870409F32B1A0BAB4DB729D7F654/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Placeholder" />
      </main>
    </div>
  );
}

export default HomePage;