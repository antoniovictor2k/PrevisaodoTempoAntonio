let pesquisarCidade = document.getElementById("pesquisarCidade");

async function getTempo(){
    let localizarCidades = pesquisarCidade.value;
    
    if(localizarCidades==""){
        localizarCidades="Rio largo, al";
    }
    
    
    
    const uri = ("https://api.hgbrasil.com/weather?format=json-cors&key=c29bcc80&city_name="+localizarCidades+"");
    const encodedURI = encodeURI(uri);
    const resposta = await fetch (encodedURI);
    const json = await resposta.json();
    console.log(json);

// comecar aqui



// document.getElementById(".divImgNuvem").innerHTML =  json.results.date;

let divImagemLog = document.querySelector(".divImgNuvem");
divImagemLog.innerHTML = `<img src="IMG/Icones/${json.results.condition_slug}.png" alt="" class="imgNuvem" >`;

    document.getElementById("temperatura").innerHTML = json.results.temp + "ºC";
    document.getElementById("cidade").innerHTML = json.results.city;
    document.getElementById("data").innerHTML = json.results.date;

    // descrição
    document.getElementById("categoria4").innerHTML = json.results.currently;
    document.getElementById("categoria3").innerHTML = json.results.humidity+"%";
    document.getElementById("categoria2").innerHTML = json.results.rain+" mm";
    document.getElementById("categoria1").innerHTML = json.results.description;

    const divContainerDias = document.querySelector('.rectanglecontainer');

    let htmlDias = '';


    // for(let i=0; i< json.results.forecast.length; i++){
    //     json.results.forecast[i]
    // }

    // json.results.forecast.forEach(e => { //arrow function
    //     let divDia = `
    //         <div class="divday0">
    //         <span id="dia1">${e.weekday} ${e.date}</span>
    //         <div class="rectangle20">
    //             <div class="dayImg1">
    //                 <img id="dayImg1" src="IMG/Icones/${e.condition}.png" alt="gg">
    //             </div>
    //             <span id="dayGrau1">Max: ${e.max}ºC</span>
    //         </div>
    //         </div>`;
        
    //     htmlDias += divDia;
    // });

    for (let i = 1; i < json.results.forecast.length; i++) {
        console.log(json.results.forecast[i]);

        let divDia = `
            <div class="divday0">
            <span id="dia1">${json.results.forecast[i].weekday} ${json.results.forecast[i].date}</span>
            <div class="rectangle20">
                <div class="dayImg1">
                    <img id="dayImg1" src="IMG/Icones/${json.results.forecast[i].condition}.png" alt="gg">
                </div>
                <span id="dayGrau1">Max: ${json.results.forecast[i].max}ºC</span>
            </div>
            </div>`;
        
        htmlDias += divDia;


    }

    divContainerDias.innerHTML = htmlDias;

}

pesquisarCidade.addEventListener("keypress" , function(event)
  {if (event.keyCode == 13){
   
      getTempo();
   
} })
