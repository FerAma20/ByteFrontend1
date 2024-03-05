
let contador = 1;
        for (let i = 2; contador <=10; i++){
            if(asd(i)){
                contador ++;
                const ul = document.querySelector("#lista");
                const li = document.createElement("li");
                li.textContent  = "Número - " + i;
                ul.appendChild(li);
            }
        }

 function asd( number){
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}