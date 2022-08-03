import React, { useEffect, useState } from "react";

import "./Home.css";

import myImg1 from "../../Images/1BelowNavbar/7e8fb3481025c3fc.webp";
import myImg2 from "../../Images/1BelowNavbar/16d6bf1b4bfd5570.webp";
import newIMg from "../../Images/3productssliding/c2178c3e3990081c.webp";
import myImg3 from "../../Images/1BelowNavbar/0039bc2a6ee6f11c.webp";
import myImg4 from "../../Images/1BelowNavbar/49c59f05f883ba88.webp";
import myImg5 from "../../Images/1BelowNavbar/51cf23e225361de8.webp";
import myImg6 from "../../Images/1BelowNavbar/877f10c96a1a1167.webp";
import myImg7 from "../../Images/1BelowNavbar/1686808e362b885c.webp";
import myImg8 from "../../Images/1BelowNavbar/a36df627a145c22a.webp";
import myImg9 from "../../Images/1BelowNavbar/e25f6846955ac543.webp";

import mobileImg from "../../Images/4offers/D51029920_WL_PD_2022_MSO_CCPC_CategoryCard_379X304._SY304_CB631806232_.jpg";
import bannerImg1 from "../../Images/6offers/D51472544_PD22_WLA_Uber_Page_Tile_1245x450.jpg";

import bannerImg2 from "../../Images/6offers/D51616348_WLD_PD_22_OnePlus_Ovaltine_5G_1242x450.jpg";
import bannerImg3 from "../../Images/6offers/xcm_banners_a-5mw1m_1500x550_in-en.jpg";
import bannerImg4 from "../../Images/6offers/xcm_banners_a-5mw1m-lbja7_pc_750x275_in-en.jpg";
import bannerImg5 from "../../Images/6offers/xcm_banners_a-5mw1m-mid-range_1500x550_in-en.jpg";
import bannerImg6 from "../../Images/6offers/xcm_banners_a-ku597-8s99e_1242x550_in-en.jpg";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Carousel from "react-elastic-carousel"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


export const Home = () => {


    const banners = [bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6]
     const [ind, setIndex] = useState(0);

        useEffect(() => {
       const intervalId = setInterval(() => {
         setIndex((imgSource) => {
           if (imgSource < banners.length - 1) {
             return imgSource + 1;
           }
           return 0;
         });
       }, 3000);
       return () => clearInterval(intervalId);
        }, []);

        const decrementCount = ()=>{
            setIndex((index) =>{
                if (index < 0) return 0;
                return index - 1
            })
        }
        const incrementCount = ()=>{
            setIndex((index) =>{
                if (index > banners.length - 1){
                    return 0
                }
                return index + 1
            })
        }
  return (
    <div id="mainhomehead">
      <div id="contenthead">
        <div>
          <img className="headimg" src={myImg1} alt="" srcset="" />
          <p>Mobiles</p>
        </div>
        <div>
          <img className="headimg" src={myImg2} alt="" srcset="" />
          <p>Fashion</p>
        </div>{" "}
        <div>
          <img src={myImg3} alt="" className="headimg" srcset="" />
          <p>Electronics</p>
        </div>{" "}
        <div>
          <img src={myImg4} alt="" srcset="" className="headimg" />
          <p>Beauty</p>
        </div>{" "}
        <div>
          <img src={myImg5} alt="" srcset="" className="headimg" />
          <p>Home</p>
        </div>{" "}
        <div>
          <img src={myImg6} alt="" srcset="" className="headimg" />
          <p>Large</p>
        </div>{" "}
        <div>
          <img src={myImg7} alt="" srcset="" className="headimg" />
          <p>Furniture</p>
        </div>{" "}
        <div>
          <img src={myImg8} alt="" srcset="" className="headimg" />
          <p>Travel</p>
        </div>
        <div>
          <img src={myImg9} alt="" srcset="" className="headimg" />
          <p>Grocery</p>
        </div>
      </div>
      <div id="secondhalf">
        <div>
          <img id="imgstyling" src={banners[ind]} alt="" srcset="" />
        </div>
        <button className="leftbtncount" onClick={decrementCount}>
          <ChevronLeftIcon />
        </button>
        <button className="btncount" onClick={incrementCount}>
          <ChevronRightIcon />
        </button>
      </div>
      <div id="thirdbox">
        <img
          className="banklogo"
          src="https://static.theprint.in/wp-content/uploads/2021/06/axis-bank-makes-banking-conversational-enables-secured-communication-over-whatsapp.jpg"
          alt=""
          srcset=""
        />

        <img
          className="banklogo"
          src="https://zerocreativity0.files.wordpress.com/2016/05/kotak-logo.jpg?w=736"
          alt=""
          srcset=""
        />

        <img
          className="banklogo"
          id="banklogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/RBL_Bank_SVG_Logo.svg/2560px-RBL_Bank_SVG_Logo.svg.png"
          alt=""
          srcset=""
        />
        <p id="offerpara">
          10% Instant
          <br />
          Discount*
        </p>
      </div>
      <div id="fourthbox">
        <div id="topoffers">
          <h1>Top Offers </h1>
          <button>VIEW ALL</button>
        </div>
        <div id="productsoffer">
          <Carousel id="carousel" breakPoints={breakPoints}>
            <div className="offerbox">j</div>
            <div className="offerbox">k</div>
            <div className="offerbox">l</div>
            <div className="offerbox">m</div>
            <div className="offerbox">n</div>
            <div className="offerbox">o</div>
            <div className="offerbox">p</div>
            <div className="offerbox">q</div>
          </Carousel>
        </div>
        <div id="adproduct">
          <img id="adimg" src={newIMg} alt="" srcset="" />
        </div>
      </div>
      <div id="fifthbox">
        <div className="fifthbox1">
          <h3>Get the best offers on mobiles and accessiories</h3>
          <img src={mobileImg} alt="" srcset="" />
        </div>
        <div className="fifthbox1">
          <h3>Get the best offers on mobiles and accessiories</h3>
          <img src={mobileImg} alt="" srcset="" />
        </div>
        <div className="fifthbox1" id="lastbox">
          <h3>Get the best offers on mobiles and accessiories</h3>
          <img src={mobileImg} alt="" srcset="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
