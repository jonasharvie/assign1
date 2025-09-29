
import star from './images/star.png'
import Jonas from './images/Jonas.jpg'


function Home(){
    return(
        <>
        <article>
            <h2 class="stars">Home</h2>

            <div class="image-text-row">
            <img src={Jonas} alt="" width="300" />
            <div class="text-content">
                <h2 class="stars">Mission Statement</h2>
                <p>
                Mechanical designer with focus on developing automation processes in the aerospace industry. 
                My goal is to gain more knowledge if software and A.I development and apply what I learn to the aerospace industry.
                </p>
            </div>
            </div>

            
            <br />
        </article>
        <br />
        <br />
        </>
    )
}

export default Home