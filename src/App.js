import logo from './logo.svg';
import './App.css';
import {Acceseries_cards,Gadgets,Phonecards,Smallcards} from './Components/index-1';
import { acceseries, gadgets, phones, smallcards,ear_phones} from './data/data';
//console.log(gadgets);



function App() {
  return (
    <div>
      <nav className="nav-bar">
      <i className="fas fa-bars" id="nav-triple"></i>
        <svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
        </svg>
        <p >Store</p>
        <p >Mac</p>
        <p>iPad</p>
        <p >iPhone</p>
        <p >Watch</p>
        <p >AirPods</p>
        <p>Tv & Home</p>
        <p >Only on Aplle</p>
        <p>Accessories</p>
        <p >Support</p>
        <svg  className="nav-icons" id="nav-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        
        <svg className="nav-icons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>

        
      </nav>
      
      <div className="main-background">
          <div className="text-center">
            <p className="top-head-para">
            Get No Cost EMI for 3, 6 or 12 months with qualifying Credit Cards from most leading banks.§ <span style={{color:"dodgerblue"}}>Learn more</span>
            </p>
          </div>
          <div className="introduction-name">
            <h1 className="introduction-heading">
              <span style={{color:"black"}}>Store.</span>The best way to buy the products you love.
            </h1>
            <div className="introduction-sub">
              <img className="introduction-heading-image" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon?wid=72&hei=72&fmt=jpeg&qlt=80&.v=1638914056000"/>
              <div>
                <p>Need Shooping help ?<br/>
                <a style={{color:"dodgerblue"}} href="">Ask a Specialist</a>
                </p>
              </div>
            </div>
          </div>
          <div className="cardCont-1">
              <button id="b-3"><i className="fas fa-angle-left btn-icons"></i></button>
              <button id="b-4"><i className="fas fa-angle-right btn-icons"></i></button>
              <div className="card_1">
                {acceseries.map(element=>(
                  <Acceseries_cards acc={element} key={element.id}/>
                ))}
            </div>
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>The latest.</span> Take a look at what's new right now.</p>
          <div className="cardCont">
            <button  id="b-1"><i className="fas fa-angle-left btn-icons"></i></button>
            <button  id="b-2"><i className="fas fa-angle-right btn-icons"></i></button>
            <div className="card_2">
            {gadgets.map(element=>(
                <Gadgets gcc={element} key={element.id}/>
              ))}
            </div>
            
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>Help is here.</span> Whenever however you need it.</p>
          <div className="card_3">
              <div className="card_3_1">
                <p> Shop one on one with a Specialist online.</p>
              </div>
              <div className="card_3_2__">
                <div className="card_3_2">
                  <p> Get to know your device with a free Personal Session</p>
                </div>
                <div className="card_3_2_">
                  <p>Service and suppport we are here to help.</p>
                </div>

              </div>   
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>The Apple difference.</span> Even more reasons to shop with us.</p>
          <div className="cardCont-2">
            <button  id="b-5"><i className="fas fa-angle-left btn-icons"></i></button>
            <button  id="b-6"><i className="fas fa-angle-right btn-icons"></i></button>
            <div className="card_11">
              {smallcards.map(element=>(
                    <Smallcards smcc={element} key={element.id}/>
                  ))}
            </div>
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>Accessories. </span>Essentials that pair perfectly with your favourite devices.</p>
          <div className="cardCont-3">
            <button  id="b-7"><i className="fas fa-angle-left btn-icons"></i></button>
            <button  id="b-8"><i className="fas fa-angle-right btn-icons"></i></button>

              <div className="card_4">
                <div className="card_4_1">
                  <h1> In with the new.</h1>
                  <p>Discover fresh new colours for your favourite accessories.</p>
                </div>
                {phones.map(element=>(
                      <Phonecards pmcc={element} key={element.id}/>
                    ))}
                <div className="card_4_2">
                  <h1>Explore all accesories</h1>
                </div>
              </div>
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>Loud and clear. </span>Unparalleled choices for rich, high-quality sound.</p>
          <div className="cardCont-4">
              <button  id="b-9"><i className="fas fa-angle-left btn-icons"></i></button>
                <button  id="b-10"><i className="fas fa-angle-right btn-icons"></i></button>
            <div className="card_111">
              {ear_phones.map(element=>(
                      <Phonecards pmcc={element} key={element.id}/>
                    ))}

            </div>
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>Do more with Apple products. </span> Here's where the fun begins.</p>
          <div className="card_5">
              <div className="card_5_1">
                <h1>Four Apple Services. One easy subsription</h1>
              </div>
              <div className="card_5_2">
                <p>HOME</p>
                <h1>See how one app can cont </h1>
              </div>
          </div>
          <p className="card_1_blw_para"><span style={{color:"black"}}>Shop by group.</span> Get specially designed pricing.</p>
          <div className="card_6">
            <p>EDUCATION</p>
            <h1>Save on Mac or iPad with education pricing</h1>
          </div>
          <h1 className="down-des">Quick Links</h1>
          <button className="buttons">
            Order Status
          </button>
          <button className="buttons">
            Shooping Help
          </button>
          <p className="des">
          Listed pricing is Maximum Retail Price (inclusive of all taxes).
          <br/>

          * Offer is available to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later, for a limited time only. Offer valid for three months after eligible device pairing. Plan automatically renews at your region’s price per month until cancelled. No purchase necessary for current owners of eligible devices. Service availability varies by region. Restrictions and other terms apply.
          <br/>

          1. Trade-in values will vary based on the condition, year and configuration of your trade-in device and is computed on Maximum Retail Price. You must be at least 18 years old to be eligible to trade in for credit. Not all devices are eligible for credit. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. Credit applied towards your new iPhone will be based on the received device matching the description you provided when your estimate was made and upon validation by the courier. Apple reserves the right to refuse or limit the quantity of any device for any reason.
              <br/>
          2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.
          <br/>

          § No Cost EMI available for purchases made using qualifying credit cards on 3, 6 or 12 month tenures only. Offer available on qualifying purchases made after 1:30 PM IST on January 20, 2022 and before 11:59 PM IST on March 24, 2022. Minimum order spend applies as per your credit card’s issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Credit card eligibility is subject to terms and conditions between you and your credit card issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Offer valid for limited period. Terms & Conditions apply.
          <br/>
          <br/>

          Representative example: Based off a 12 month tenure. ₹69900 total cost includes 15% pa and No Cost EMI savings of ₹5363, paid over 12 months as 12 monthly payments of ₹5825.
          <br/>
          <br/>
          ‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).
          <br/>

          †† We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple
          </p>
          <hr/>
          <div className="down-icon">
              <i class="fab fa-apple icon_"></i>
              <p>Apple Store Online</p>
          </div>
          
          <div className="end_des">

                
                  <div>
                    <div>
                      <ul className="li">
                      <p>Shop and learn</p>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV & Home</li>
                        <li>Music</li>
                        <li>AirPods</li>
                        <li>HomePod</li>
                        <li>iPod touch</li>
                        <li>Accessories</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      
                      <ul className="li">
                      <p>Apple Store</p>
                        <li>Shop Online</li>
                        <li>Ways to Buy</li>
                        <li>Apple Trade in</li>
                        <li>Recycling Programme</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>
                      </ul>
                    </div>
                    <div>
                      
                      <ul className="li">
                        <p>Services</p>
                        <li>Apple Music</li>
                        <li>Apple TV+</li>
                        <li>Apple Arcade</li>
                        <li>Apple Books</li>
                        <li>iCloud</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                     
                      <ul className="li">
                        <p>For Education</p>
                        <li>Apple and Education</li>
                        <li>Shop for University</li>
                      </ul>
                    </div>
                    <div> 
                      <ul className="li">
                      <p>For Business</p>
                        <li>Apple and Business</li>
                      </ul>
                    </div>
                    <div>       
                      <ul className="li">
                        <p>For Healthcare</p>
                        <li>Apple in Healthcare</li>
                        <li>Health on Apple Watch</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                     
                      <ul className="li">
                        <p>Account</p>
                        <li>Manage Your Apple ID</li>
                        <li>Apple Store Account</li>
                        <li>ICloud.com</li>
                      </ul>
                    </div>
                    <div>
                      
                      <ul className="li">
                        <p>Apple Values</p>
                        <li>Suplier Responsibility</li>
                        <li>Environment</li>
                        <li>Accessibility</li>
                        <li>Privacy</li>
                        <li>Legal Metrology Declaration</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      
                      <ul className="li">
                      <p>About Apple</p>
                        <li>Newsroom</li>
                        <li>Apple Leadership</li>
                        <li>Job Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics & Compiliance</li>
                        <li>Events</li>
                        <li>Contact Apple</li>

                      </ul>
                    </div>
                  </div>


          </div>
          <p className="last-para">
            More ways to shop <span style={{color:"dodgerblue"}}>Find a retailer</span> near you Or call 000800 040 1966
          </p>
          <hr/>
          <div className="last-card">
            <div className="last-card_">
              <p>Copyright@ 2022 Apple Inc. All rights reserved</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Sales Policy</p>
              <p>Legal</p>
              <p>Site Map</p>
            </div>
            <p className="inida">India</p>

          </div>









      </div>
    
    </div>
   
  );
}

export default App;


