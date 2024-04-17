import "./Score.css"
import trophy from "../../assets/icons/trophy.png"
import confetti from "../../assets/background/confetti.png"


function Score({ correctAnswers, totalAnswers }){
    let message;

    if(correctAnswers >= 8){
        message = "Well done !"
    }else if(correctAnswers >= 4){
        message = "You can do better"
    }else if(correctAnswers >=0 ){
        message = "Ask ChatGPT next time"
    }else{
        message = "U are autistic and ur dad should have left you over some milk, maybe you should kill yourself fucking autistic prick. The most important thing for everyone is to play, but for you is doing wheelie on your autistic wheelchair, another time : kill yourself, i won't say the nword here but if i could i would have said it. Is your favorite number 21? cause ur fucking disabled, poor ahh autistic fella"
    }

    return (
        <div className="container">
            <div className="confettis">
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
            </div>
            <h1>{correctAnswers}/{totalAnswers}</h1>
            <img src={trophy} className="trophy"/>
            <h3>{message}</h3>
            <button className="homebtn">Home</button>
        </div>

    )
}

export default Score