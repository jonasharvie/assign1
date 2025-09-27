import CentennialRamenLogo from './images/Centennial_Ramen_Logo3V2.png'
import star from './images/star.png'
import ShopFront from './images/Centennial_Ramen_Shop_Front.png'


function Home(){
    return(
        <>
        <article>
            <h2 class="stars">Home</h2>

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
            <hr />
            <nav class="stars">
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            </nav>
            <nav>
            <b class="paragraph">
                The spicy miso is amazing, and the portions are perfect for the
                student budget. Highly recommend!
                <br />
                We couldn’t be happier with their service!
            </b>
            <b class="paragraph"> - Fiona and Shrek </b>
            </nav>

            <hr />
            <nav class="stars">
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            </nav>
            <nav>
            <b class="paragraph">
                Centannial Ramen makes campus life so much better.
                <br />
                It's the perfect place to hang out with friends or grab a bowl to go.
                <br />Can't wait to try every flavor!
            </b>
            <b class="paragraph"> - Nick Fury </b>
            </nav>
            <hr />
            <nav class="stars">
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            <img src={star} width="20" height="20" alt="star" />
            </nav>
            <nav>
            <b class="paragraph">
                Centannial Ramen is my go-to spot for a quick, satisfying meal.
                <br />
            </b>
            <b class="paragraph"> - Ed </b>
            </nav>
            <br />
            <br />
        </article>
        <br />
        <br />
        </>
    )
}

export default Home