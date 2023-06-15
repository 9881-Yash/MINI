import React from "react";
import Hero from "../../components/Hero";
import Collections from "../../components/Home/collections";
import Testimonials from "../../components/Home/testimonials";
import Gallery from "../../components/Home/gallery";
import Featured from "../../components/Home/featured";

const Home = () => {
    return (
        <>
        <Hero/>
        <div className="text-centre" style= {{ margin: "100px 0 50px 0" }}>
            <h2>Popular Collections</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <Collections/>
        <div className="text-centre" style= {{ margin: "100px 0 50px 0" }}>
            <h2>Featured Products</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <Featured/>
        {/* <Products/> */}
        <div className="text-centre" style= {{ margin: "100px 0 50px 0" }}>
            <h2>Love from our Customers</h2>
            <p>Explore what are customers have to say about our collections!</p>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <Testimonials/>
        <div className="text-centre" style= {{ margin: "100px 0 50px 0" }}>
            <h2>Produts Gallery</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <Gallery/>
        </>
    )
}

export default Home

