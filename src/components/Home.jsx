import React from "react";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techstar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to your tech problems you face
            every day. We are a hiring tech company whose aim is to increase the
            problem-solving abilities in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>  <h1>WHO WE ARE  ? </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi voluptatem reprehenderit qui, ea fuga quidem! Voluptatem aut saepe totam numquam, delectus quasi sed ratione enim deleniti distinctio
             eveniet co
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem cum, et nemo iusto nisi commodi earum eveniet aut minus 
            corporis fuga explicabo ut, modi rerum
            </p></div> 
       
        
      </div>
      <div className="home4" id ="brands">
            <div><h1>Brands</h1>
            <article><div style={{
                animationDelay:"0.3s"
            }}>
           < AiFillGoogleCircle/>
           <p>Google</p>
                </div>
                <div style={{
                animationDelay:"0.3s"
            }}>
           < AiFillAmazonCircle/>
           <p>Amazon</p>
                </div>
                <div style={{
                animationDelay:"0.3s"
            }}>
           < AiFillYoutube/>
           <p>Youtube</p>
                </div>
                <div style={{
                animationDelay:"0.3s"
            }}>
           < AiFillInstagram/>
           <p>Instagram</p>
                </div>
                </article>
                </div>
        </div>
    </>
  );
}

export default Home;
