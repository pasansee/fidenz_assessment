const city=[{"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},{"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},{"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},{"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},{"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},{"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},{"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},{"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}];

const arr = city.map(i => `${i.CityCode}`);



let weather ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[0]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city").innerText =name;
        document.querySelector(".temp").innerText =temp ;
        document.querySelector(".ic").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc").innerText =description;
        document.querySelector(".id").innerText ="ID :" +id;
        document.querySelector(".dt").innerText ="DT :" +dt;
        document.querySelector(".pressure").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity").innerText ="Humidity : " +humidity;
        
        
    
}
    

};

let weather1 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather1 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[1]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city1").innerText =name;
        document.querySelector(".temp1").innerText =temp ;
        document.querySelector(".ic1").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc1").innerText =description;
        document.querySelector(".id1").innerText ="ID :" +id;
        document.querySelector(".dt1").innerText ="DT :" +dt;
        document.querySelector(".pressure1").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity1").innerText ="Humidity : " +humidity;
        
        

        
    
}
    

};

let weather2 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather2 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[2]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city2").innerText =name;
        document.querySelector(".temp2").innerText =temp ;
        document.querySelector(".ic2").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc2").innerText =description;
        document.querySelector(".id2").innerText ="ID :" +id;
        document.querySelector(".dt2").innerText ="DT :" +dt;
        document.querySelector(".pressure2").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity2").innerText ="Humidity : " +humidity;
        
        
    
}
    

};

let weather3 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather3 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[3]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city3").innerText =name;
        document.querySelector(".temp3").innerText =temp ;
        document.querySelector(".ic3").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc3").innerText =description;
        document.querySelector(".id3").innerText ="ID :" +id;
        document.querySelector(".dt3").innerText ="DT :" +dt;
        document.querySelector(".pressure3").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity3").innerText ="Humidity : " +humidity;
        
        
    
}


    

};

let weather4 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather4 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[4]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city4").innerText =name;
        document.querySelector(".temp4").innerText =temp ;
        document.querySelector(".ic4").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc4").innerText =description;
        document.querySelector(".id4").innerText ="ID :" +id;
        document.querySelector(".dt4").innerText ="DT :" +dt;
        document.querySelector(".pressure4").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity4").innerText ="Humidity : " +humidity;
        
        
    
}
};

let weather5 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather5 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[4]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city5").innerText =name;
        document.querySelector(".temp5").innerText =temp ;
        document.querySelector(".ic5").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc5").innerText =description;
        document.querySelector(".id5").innerText ="ID :" +id;
        document.querySelector(".dt5").innerText ="DT :" +dt;
        document.querySelector(".pressure5").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity5").innerText ="Humidity : " +humidity;
        
        
    
}
};

let weather6 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather6 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[6]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city6").innerText =name;
        document.querySelector(".temp6").innerText =temp ;
        document.querySelector(".ic6").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc6").innerText =description;
        document.querySelector(".id6").innerText ="ID :" +id;
        document.querySelector(".dt6").innerText ="DT :" +dt;
        document.querySelector(".pressure6").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity6").innerText ="Humidity : " +humidity;
        
        
    
}
};

let weather7 ={
    "apiKey" : "6686b080f70ac73c314d392bc891236a",
    fetchWeather7 :function(){
        for(var i=0; i<arr.length;i++){
        fetch("https://api.openweathermap.org/data/2.5/weather?id="+arr[7]+"&units=metric&appid=6686b080f70ac73c314d392bc891236a")
        .then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
            
        }
        
    },
    
    
    displayWeather : function(data){
        const {name} =data;
        const {icon, description} =data.weather[0];
        const {temp,temp_min,temp_max,pressure,humidity} =data.main;
        const {id}=data;
        const {dt}=data;
        
        console.log(name,icon,description,temp,temp_min,temp_max,id,dt,pressure,humidity);
        
        document.querySelector(".city7").innerText =name;
        document.querySelector(".temp7").innerText =temp ;
        document.querySelector(".ic7").src =" http://openweathermap.org/img/wn/" +icon+ ".png" ;
        document.querySelector(".desc7").innerText =description;
        document.querySelector(".id7").innerText ="ID :" +id;
        document.querySelector(".dt7").innerText ="DT :" +dt;
        document.querySelector(".pressure7").innerText ="Pressure :" +pressure;
        document.querySelector(".humidity7").innerText ="Humidity : " +humidity;
        
        
    
}
};

