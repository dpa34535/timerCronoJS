function Timer(){
    const timer = document.querySelector(".timer");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");
    let use;
    let segundos = 0;

    function time(seconds) {
        let date = new Date( seconds * 1000 );

        return date.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "GMT"
        });
    };

    document.addEventListener("click", function(e){
        const element = e.target;

        if (element.classList.contains("iniciar")){
            clearInterval(use);

            timer.style.color = "black";
        
            iniciar.setAttribute("disabled", "disabled");
        
            use = setInterval(function(){
                segundos = segundos + 1;
                timer.innerHTML = time(segundos);
            }, 1000);
        }

        if (element.classList.contains("pausar")){
            iniciar.removeAttribute("disabled");
            timer.style.color = "red";
            clearInterval(use);
        }

        if (element.classList.contains("zerar")){
            clearInterval(use);
            iniciar.removeAttribute("disabled");
            timer.style.color = "black";
            segundos = 0;
            timer.innerHTML = time(segundos);
        }
    
    });
}

Timer();