export function Footer() {
    return (
        <footer>
            <div className="footport" >
            <div className="contact" id="info">
                <div className="footport-head">
                    <h4>Our Info</h4>   
                </div>
                <div className="email">
                    <p className="port-text"><i className="far fa-envelope"></i> Email: drinkshop@gmail.com</p>
                </div>
                <div className="phone">
                    <p className="port-text"><i className="fas fa-mobile"></i> Phone:(123)-456-7891</p>
                </div>
                <div className="whatsapp">
                    <p className="port-text"><i className="fa-brands fa-whatsapp"></i> Whatsapp:(123)-456-7891</p>
                </div>
                <div className="viber">
                    <p className="port-text"><i className="fa-brands fa-whatsapp"></i> (123)-456-7891</p>
                </div>
           </div>
           <div className="shops" id="liquor">
              <div className="footport-head">
                   <h4>Liquor Shops</h4>
               </div>
               <div className="liquor-shops">
                   <a href="https://www.totalwine.com/" target="_blank"><p className="port-text">Total Wine</p></a>
                </div>
                <div className="liquor-shops">
                   <a href="https://twinliquors.com/" target="_blank"><p className="port-text">Twin Liqours</p></a>
                </div>
               <div className="liquor-shops">
                  <a href="https://drizly.com/" target="_blank"><p className="port-text">Drizly</p></a>
                </div>
                <div className="liquor-shops">
                   <a href="https://specsonline.com/location/round-rock/" target="_blank"><p className="port-text">Spec's</p></a>
                </div> 
            </div>
            <div className="helpful-websites">
               <div className="footport-head">
                   <h4>Helpful Websites</h4>
                </div>
                <div className="websites">
                   <a href="https://vinepair.com/world-top-30-liquors/" target="_blank"><p className="port-text">Vine Pair</p></a>
                </div> 
               <div className="websites">
                   <a href="https://punchdrink.com/articles/best-well-liquors-bartenders/" target="_blank"><p className="port-text">Puncher</p></a>
                </div> 
                <div className="websites">
                   <a href="https://mybartender.com/articles/american-liquors/"><p className="port-text">My Bartender</p></a>
                </div>  
               <div className="websites">
                   <a href="https://tastersclub.com/blogs/articles/best-liquors-for-home-bar"><p className="port-text">Taster's Club</p></a>
               </div> 
            </div>     
        </div>
        <div className="copyright">
             &copy; 2023 Liquor Shop
        </div> 
     
    </footer>     
        
    
    )
}