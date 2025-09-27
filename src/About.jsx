
import ShopFront from './images/Centennial_Ramen_Shop_Front.png'


function About(){
    return(
        <>
        <article>
            <h2 class="stars">About Me</h2>

            <div class="image-text-row">
            <img src={ShopFront} alt="" width="300" />
            <div class="text-content">
                <p>
                We are dedicated to serving high-quality, affordable, and
                lightning-fast ramen bowls that fuel students, faculty, and staff
                through their busy days. With a focus on fresh ingredients, friendly
                service, and a fun, welcoming atmosphere.
                </p>
            </div>
            </div>

            
            <br />
            <br />
        </article>
        <br />
        <br />
        </>
    );
}

export default About