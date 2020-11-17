

const navSlide = () => {

    //selection de la div qui contient le menu burger
    const burger = document.querySelector(".burger");
    //selection de la ul(nav) qui est en display none pour le moment
    const nav = document.querySelector("header ul");

    //ajout d'un ecouteur "au click" sur le burger
    burger.addEventListener("click", () => {
        //ajout de la classe "navActive" a la ul pour faire apparaitre "la nav"
        nav.classList.toggle("navActive")
        //changement de l'apparence du burger
        burger.classList.toggle('toggle');
    });  
}

//appel de la fonction
navSlide();