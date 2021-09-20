//Trabajo con módulos (() => {})();
//FETCH con promesas.
//Declaro las variables.

(() => {
    const $fetch = document.getElementById("fetchUsuarios"),
    $fragmento = document.createDocumentFragment();

//Implemento FETCH con .then

fetch("http://jsonplaceholder.typicode.com/users")

    .then((res) => {
        
        //console.log(res)

        return res.ok?res.json():Promise.reject(res);

    })

    .then((data) => {

        //console.log(data)
        
        data.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML=`${element.name}--${element.email}--${element.phone}--${element.username} <br><br>`
            $fragmento.appendChild($li) 
            
        });
        //Realiza una inserción en el DOM
        $fetch.appendChild($fragmento);

    })

    //Error 
    .catch(err => {
        console.log("Manipulando el error",err);
        //persozonalizo el error
        let mensaje = err.statusText || "Ocurrido un Error";
        $fetch.innerHTML=`ERROR ${err.status}:${mensaje}`
    })

    .finally(()=>
        console.log("Esta línea se imprime")
    )

})();

//FETCH con Async Await.

(() => {

//Declaración de constantes.

    const $fetchAsync = document.getElementById("fechUsuarios-AsyncAwait"),
    $fragmento = document.createDocumentFragment();

//Implemento FETCH con función Asíncrona.

async function getData() {
    try{
        let res = await fetch ("http://jsonplaceholder.typicode.com/users"),
        data = await res.json();
        //console.log(res,data);

        if (!res.ok){
            throw new Error("Error al solicitar los datos");
        }

        data.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML=`${element.name}--${element.email}--${element.phone}--${element.username} <br><br>`
            $fragmento.appendChild($li);

        });
        //Realiza una inserción en el DOM
        $fetchAsync.appendChild($fragmento);
    
    }
    catch(err) {
        //console.log ("Gestionando el Error, err")
        let mensaje = err.statusText || "Ocurrio un error";
        $fetchAsync.innerHTML=`ERROR ${err.status}:${mensaje}`;

    }
    finally{
        console.log("Este código se ejecuta de igual manera, independientente del try..catch");
    }

    //LLamar a la función.
    
}
getData();

})();

//Consumo de libreria Externa mediante la libreria Axios.

(() => {

    //Declaro las variables.

    const $requestAxios=document.getElementById("requestAxios"),
    $fragmento=document.createDocumentFragment();

    //Implemento Axios. Objeto Axios

    axios.get("http://jsonplaceholder.typicode.com/users")

    //Implemento Axios con .then . catch . finalli

    .then ((res)=>{
    console.log(res);
        let jsondata = res.data;
        jsondata.forEach(element =>{
            const $li=document.createElement("li");
            $li.innerHTML=`${element.name}--${element.email}--${element.phone}--${element.website}<br><br>`
            $fragmento.appendChild($li);
            //console.log($fragmento)
        });

        //Realiza una inserción en el DOM
        $requestAxios.appendChild($fragmento)

    })
    .catch((err)=>{
        //console.log ("Gestionando el Error, err")
        let mensaje = err.statusText || "Ocurrio un error";
        $fetchAsync.innerHTML=`ERROR ${err.status}:${mensaje}`;
    })
    .finally()
        console.log("Este código se ejecuta de igual manera, independientente del try..catch");

})();
