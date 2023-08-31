input=document.getElementById('input');
weather=document.getElementById('weather');
humidity=document.getElementById("humidity");
wind=document.getElementById("wind");

const apiurl="https://api.openweathermap.org/data/2.5/weather?appid=18b6cc1b015016f7186610bf3a219b50&units=metric&q=";

async function checkWeather(){
    if(input.value==''){
        alert("Please enter city name!");
    }
    else{
        const response=await fetch(apiurl+input.value);
        var data= await response.json(); 
        //console.log(data);
        nm=data.name;
        temp=data.main.temp;
        hm=data.main.humidity;
        feeltemp=data.main.feels_like;
        wind_speed=data.wind.speed;
        weathr=data.weather[0].main;
        add()

    }
}

function add(){
    weather.style.display="block";
    document.getElementById("details").style.display="flex";
    document.getElementById("tmp").innerHTML=temp+"°C";
    document.getElementById("nm").innerHTML=nm;
    document.getElementById("feel").innerHTML="Feels like:"+feeltemp+"°C ("+weathr+")<hr>";
    document.getElementById("hmdty").innerHTML=hm+"%";
    document.getElementById("wnd").innerHTML=wind_speed+" KMPH";

    if(weathr=="Clouds"){
        document.getElementById("condition").src="Clouds.png"
    }
    else if(weathr=="Mist"){
        document.getElementById("condition").src="mist.png"
    }
    else if(weathr=="Clear"){
        document.getElementById("condition").src="clear.png"
    }
    else if(weathr=="Drizzle"){
        document.getElementById("condition").src="drizzle.png"
    }
    else if(weathr=="Rain"){
        document.getElementById("condition").src="rain.png"
    }
    else if(weathr=="Snow"){
        document.getElementById("condition").src="Snow.png"
    }
    input.value="";
}