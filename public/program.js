let format = "format_12";
const twelvehour = " 12-hr ";
const twentyfour = " 24-hr ";

const displayTime = () => {

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = null;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    

    if(format == "format_12"){
        let timeCategory = "am";

        if(hours == 0){
            hours = 12;
        }

        if(hours > 12){
            hours = hours - 12;
            timeCategory = "pm";
        }
       time = hours + ":" + minutes + ":" + seconds + timeCategory;
    }
    else{
        time = hours + ":" + minutes + ":" + seconds
    }

    document.getElementById("clock").innerText = time;
    setInterval(displayTime, 1000);
}

displayTime();



const btnToggle = () => {
    if(format == "format_12"){
        format = "format_24";
        document.getElementById("hrFormat").innerText = twelvehour;
    }
    else{
        format = "format_12";
        document.getElementById("hrFormat").innerText = twentyfour;
    }
}