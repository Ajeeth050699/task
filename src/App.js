import logo from './logo.svg';
import img1 from "./images/icons8-male-user-50.png"
import img3 from "./images/icons8-shopping-cart-50.png"
import img2 from "./images/icons8-wallet-50.png"
import img4 from "./images/opensea.svg"
import img5 from "./images/img1.avif"
import img6 from "./images/img2.avif"
import img7 from "./images/icons8-grid-2-50.png"
import img8 from "./images/icons8-data-grid-50.png"
import img9 from "./images/icons8-bar-chart-50.png"
import img10 from "./images/icons8-menu-rounded-50.png"
import toy1 from "./images/toy1.avif"
import toy2 from "./images/toy2.avif"



// import img7 from "./images/img3.avif"




import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Navbar'>
        <div className='logoname'>
          <img src={img4} className="logo1"></img>
          <div className='logo'>
            OpenSea</div></div>
        <div className=''>
          <input type='search' className='search' placeholder='Search items,collections and accounts'></input>
        </div>
        <div className='titles'>
          <a className='title1'>Drops</a>
          <a className='title1'>stats</a>
          <a className='title1'>Resources</a>
          <img src={img1} className='img1'></img>
          <img src={img2} className='img1'></img>
          <img src={img3} className='img1'></img>
        </div>
      </div>

      <div className='bg-img'>
        {/* <div className='square'></div> */}
        <img src={img6} className='bg-img2'></img>
        <img src={img5} className='bg-img1'></img>
      </div>
      <div className='description'>
        <div className='head1'>BEANZ Official</div>
        <div className='head2'>By
          <span className="desp">TeamAzuki</span> 
        </div>
        <div className='head2'>Items
          <span className='desp'>19.9K </span>
          <span className='dot'></span>· 
          Created
          <span className='desp'>Mar 2022</span>
          <span className='dot'></span>·
          Creator earnings
          <span className='desp'>5%</span>
          <span className='dot'></span>·
          Chain
          <span className='desp'>Ethereum</span>
          <span className='dot'></span>·
          Category
          <span className='desp'>PFPs</span>
        </div>
        <div className='head2'>BEANZ are a small species that sprouts from the dirt in the garden. They make for a great sidekick to an Azuki...</div>
        <div className='head2'>See More</div>

<div className='follows'>
<div className='h1'>
  <div className='t1'>114,973E</div>
  <div className='t2'>total volume</div>
  </div>
  <div className='h1'>

  <div className='t1'>1.6198 ETH</div>
  <div className='t2'>floor price</div>
  </div>
  <div className='h1'>

  <div className='t1'>1.5252 WETH</div>
  <div className='t2'>best offer</div>
  </div>
  <div className='h1'>

  <div className='t1'>3%</div>
  <div className='t2'>listed</div>
  </div>
  <div className='h1'>

  <div className='t1'>7,389</div>
  <div className='t2'>owners</div>
  </div>
  <div className='h1'>

  <div className='t1'>37%</div>
  <div className='t2'>unique words</div>
  </div>
</div>

<div className='h2'>
  <div className='t3'>Items</div>
  <div className='t3'>Analytics</div>
  <div className='t3'>Activity</div>
</div>
<div className='line'></div>

<div className="h4">

  <div className=''>
    <img src={img10} className='img1'></img>  </div>
  <div className='dot1'></div>
  <div className='live'>Live</div>
  <div className='beta'>BETA</div>
  <div className=''>19,950 results</div>
  <div className=''><input type="search" className='search1' placeholder='Search by name or attribute'></input></div>
  <div className=''><input type="text" className='search2' placeholder='Price low to high'></input></div>
  <div className='box'>
  <img src={img10} className='img2'></img>
    <div className='line1'></div>
    <img src={img7} className='img2'></img>
    <div className='line1'></div>
    <img src={img8} className='img2'></img>
    <div className='line1'></div>
    <img src={img9} className='img2'></img>
  </div>
</div>
<div className='container-box'>
    <div className='card-1'>
      <img src={toy1} className='poster1'></img>
      <div className='text1'>Bean #18259</div>
      <div className='text2'>1,606 ETH</div>
      <div className='text3'>Last sale: 1,380 ETH</div>
    </div>
    <div className='card-1'>
      <img src={toy2} className='poster1'></img>
      <div className='text1'>Bean #40059</div>
      <div className='text2'>1,289 ETH</div>
      <div className='text3'>Last sale: 1,380 ETH</div>
    </div>
    <div className='card-1'>
      <img src={toy1} className='poster1'></img>
      <div className='text1'>Bean #25659</div>
      <div className='text2'>1,296 ETH</div>
      <div className='text3'>Last sale: 1,380 ETH</div>
    </div>
    <div className='card-1'>
      <img src={toy2} className='poster1'></img>
      <div className='text1'>Bean #11959</div>
      <div className='text2'>1,606 ETH</div>
      <div className='text3'>Last sale: 1,280 ETH</div>
    </div>
    <div className='card-1'>
      <img src={toy1} className='poster1'></img>
      <div className='text1'>Bean #14059</div>
      <div className='text2'>1,226 ETH</div>
      <div className='text3'>Last sale: 1,380 ETH</div>
    </div>
    <div className='card-1'>
      <img src={toy2} className='poster1'></img>
      <div className='text1'>Bean #18209</div>
      <div className='text2'>1,266 ETH</div>
      <div className='text3'>Last sale: 1,580 ETH</div>
    </div>

  </div>

      </div>
      

    </div>
  );
}

export default App;
