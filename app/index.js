import "./scss/index.scss";

const vodic = 	[
    {
     naslov : "Početna",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/Pocetna.png"	
    },
    {
     naslov : "Dodavanje mjerenja",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/dodaj-mjerenje.png"	
    },
    {
     naslov : "Meni",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/Meni.png"	
    },
    {
     naslov : "Dnevni izvještaj",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/dnevni.png"	
    },
    {
     naslov : "Nedeljni izvještaj",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/nedeljni.png"	
    },
    {
     naslov : "Mjesečni izvještaj",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/mjesecni.png"	
    },
    {
     naslov : "Dnevnik",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/dnevnik.png"	
    },
    {
     naslov : "Podešavanja",
     tekst : "Ovaj tekst je probni tekst, i može se iskoristiti isključivo za probu. Ne bi trebao da bude uključen u produkcionoj verziji, već bi do tada trebao biti zamijenjen", 
     src : "img/Podesavanja.png"	
    }
];


const dugmadi = document.querySelectorAll('.lista li');

const slika = document.querySelector('.demo-slika');
const naslov = document.querySelector('.demo-naslov');
const tekst = document.querySelector('.demo-tekst');

let selektovan = 1;

dugmadi.forEach(dugme =>{
    dugme.addEventListener('click', ()=>{
        selektovan = dugme.innerHTML;

        const trenutni = vodic[dugme.innerHTML-1]
        slika.src = trenutni.src;
        naslov.innerHTML = trenutni.naslov;
        tekst.innerHTML = trenutni.tekst;

        // dugme.classList.add('selektovan');
        console.log(dugme.innerHTML);

        dugmadi.forEach(pileDugme =>{
            if(pileDugme.innerHTML<= selektovan){
                pileDugme.classList.add('selektovan');
            }
            else{
                pileDugme.classList.remove('selektovan');                
            }
        })
    });
});