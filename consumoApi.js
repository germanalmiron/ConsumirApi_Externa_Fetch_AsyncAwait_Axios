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

    //Error 404
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