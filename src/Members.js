
import alexafun from "./images/bandmembers/alexafun.jpeg";
import delaneyfun from "./images/bandmembers/delaneyfun.jpeg";
import "./Members.css"

const Members = () => {
    return (
    <div className="members">
        
        <h1>Welcome</h1>

        <p class="intro"> Welcome. Glad to have you here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, 
            massa sit amet egestas gravida, lorem leo gravida libero, eu mollis purus nisl hendrerit erat. Quisque id sodales ex. 
             Aenean efficitur molestie vulputate. Nulla tempor dolor ut diam elementum maximus. Proin purus felis, dictum sit amet 
             tristique vitae, sagittis ac arcu. In sit amet ligula nunc. Quisque eu imperdiet dolor. Nullam et sagittis enim, non 
             mollis metus. Vivamus a orci sollicitudin, pellentesque libero ac, mattis tellus. Duis non iaculis leo, in blandit enim.
              Vestibulum odio leo, vestibulum eget purus at, blandit congue turpis.</p>

          <div class="slideshow-container">

            <div class="myslides-fade">
              <div class="numbertext">1 / 6</div>
              <img src={alexafun} alt="alexafun"></img>
              <div class="text"><strong> ALEXA  </strong></div>
              <div class="text"><strong> AQUARIUS </strong></div>
              <div class="text"><strong> VOCALS  </strong></div>
            </div>
            
            <div class="myslides-fade">
              <div class="numbertext">2 / 6</div>
              <img src={delaneyfun} alt="alexafun"></img>
              <div class="text"><strong> DELANEY </strong></div>
              <div class="text"><strong> LIBRA </strong></div>
              <div class="text"><strong> VOCALS  </strong></div>
            </div>
            
        </div>
        </div>

    );
}

export default Members;