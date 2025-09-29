
import Jonas from './images/Jonas.jpg'

function About(){
    return(
        <>
        <article>
            <h2 class="stars">About Me</h2>
            <div class="image-text-row">
                <img src={Jonas} alt="" width="300" />
                <div class="text-content">
                    <p>
                    I am a mechanical designer working on quality automation processes in the aerospace industry. 
                    I am enrolled in Centennial College's software engineering technology A.I program to apply what I learn to the aerospace industry.
                    </p>
                </div>
            </div> 
            <br />
        </article>
        <br />
        <br />
        </>
    );
}

export default About