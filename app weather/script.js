
const id_Api='700f16b0dfd9b6bfa1f303aa2a524b7b'
 document.getElementById('button').addEventListener('click',()=>{
    let input=document.getElementById('text').value;
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${id_Api}&units=metric&lang=vi`)
             .then( async (Response)=>{
                const data=await Response.json();
                console.log(data)
                 document.getElementById('map').innerText=data.name
                 document.getElementById('temperature').innerText=Math.round(data.main.temp)+'C';
                 document.getElementById('thong_tin').innerText=data.weather[0].description;
                 if(data.main.temp>=30){
                    document.getElementById('img').src='./ảnh/anh1.png'
                 }
                 if(data.main.temp<=20){
                    document.getElementById('img').src='./ảnh/anh3.png'
                 }
                 if(data.main.temp<20&&data.main.temp>30){
                    document.getElementById('img').src='./ảnh/anh2.png'
                 };
                
             })
           
            
 })
 document.getElementById('text').addEventListener('click',()=>{
   document.getElementById('text').value=""
 })
