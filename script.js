let stage = 0;
let Gomb01J = document.getElementById("Gomb01")
let Gomb02J = document.getElementById("Gomb02")
let Gomb03J = document.getElementById("Gomb03")
let Gomb04J = document.getElementById("Gomb04")

let fejlecJ = document.getElementById("fejlec")
let KozepszovegJ = document.getElementById("Kozepszoveg")
let KozepKepJ = document.getElementById("KozepKep")
let AlszovegJ = document.getElementById("Alszoveg")
let Alszoveg0J = document.getElementById("Alszoveg0")
let SzamlaloSzovegJ = document.getElementById("SzamlaloSzoveg")
let UzenetJ = document.getElementById("uziP")

let CsuszkaJ = document.getElementById("CsuszkaID")
let DatumJ = document.getElementById("DatumID")


KozepKepJ.style.opacity = "1"
KozepKepJ.style.transition = "opacity 800ms"

function Gomb01F(valasz){
    switch(stage){
        case 0:
            if(valasz == 0){
                Szius()
            }
            else{
                KozepszovegJ.innerHTML = "Tényleg nem?"
                Gomb01J.innerHTML = "De!"
                Gomb02J.innerHTML = "Nem :("
                KozepKepJ.src = "./Kepek/CecaPuska2.jpg"
                KozepKepJ.style.animation = "Nagyobb 0.5s forwards"
                fejlecJ.innerHTML = "Mi?"

                KozepszovegJ.style.fontSize = "12vw"
                KozepszovegJ.style.marginBottom = "7%"
                KozepszovegJ.style.transition = "margin-bottom 1s, font-size 1s"
                

                stage = 1;
            }
            break
        case 1:
            if(valasz == 0){
                Szius()
            }
            else{
                KozepszovegJ.innerHTML = "Tutii neeem? :("
                Gomb01J.innerHTML = "Deee!!"
                Gomb02J.innerHTML = "Tutiiii"
                KozepKepJ.src = "./Kepek/CecaSzomoru.jpg"
                KozepKepJ.style.animation = "Nagyobb2 0.5s forwards"
                fejlecJ.innerHTML = ":("

                KozepszovegJ.style.fontSize = "13vw"
                KozepszovegJ.style.marginBottom = "8%"
                KozepszovegJ.style.transition = "margin-bottom 1s, font-size 1s"

                stage = 2;
            }
            break
        case 2:
            if(valasz == 0){
                Szius()
            }
            else{
                KozepszovegJ.innerHTML = "Ne hazudj!"
                Gomb01J.innerHTML = "hehehe"
                Gomb02J.style.display = "none"
                KozepKepJ.src = "./Kepek/CecaKiabal.jpg"
                KozepKepJ.style.animation = "Nagyobb 0.5s forwards"
                fejlecJ.innerHTML = "Naa"

                KozepszovegJ.style.fontSize = "14vw"
                KozepszovegJ.style.marginBottom = "9%"
                KozepszovegJ.style.transition = "margin-bottom 1s, font-size 1s"

                stage = 3;
            }
            break
        case 3:
            if(valasz == 0){
                Szius()
            }
            break
        default :
            alert("C")
    }
}

function Szius(){
    KozepszovegJ.style.fontSize = "10vw"
    KozepszovegJ.style.transition = "0s"
    KozepKepJ.src = "./Kepek/CecaHappy.jpg"
    KozepKepJ.style.animation = "Entry 0.2s forwards"
    Gomb01J.style.display = "none"
    Gomb02J.style.display = "none"
    fejlecJ.innerHTML = "Fanncsiii :o"
    KozepszovegJ.innerHTML="Sziuuuuusss!"

    delay(1000).then(() => bejovo(AlszovegJ,"8vw"));
}

let szamlalo = 0

function bejovo(targetElem, meret){
    targetElem.style.display="block"
    targetElem.style.fontSize = meret
    targetElem.style.transition = "font-size 1s"
    delay(1000).then(() => bejovo2(Alszoveg0J,"4vw"));
}

function bejovo2(targetElem, meret){
    targetElem.style.display="block"
    targetElem.style.fontSize = meret
    targetElem.style.transition = "font-size 1s"
    delay(800).then(() => bejovo3());
}





function bejovo3(){
    var SliderJ = document.createElement("input")
    SliderJ.setAttribute('type','range')
    SliderJ.min = "1"
    SliderJ.max = "10"
    SliderJ.value = "5"
    SliderJ.style.width = "80%"
    SliderJ.style.height = "100px"
    SliderJ.style.outline = "none"
  
    CsuszkaJ.style.display = "block"  
    Gomb03J.style.display = "block"
}

let boldogsag = 50
let szomivisszafizetes 

function Gomb02F(){
    boldogsag = CsuszkaJ.value
    CsuszkaJ.style.display = "none"
    szomivisszafizetes = Math.round((100 - boldogsag) / 10)
    Alszoveg0J.style.display = "none"
    AlszovegJ.style.display = "none"
    Gomb03J.style.display = "none"
    if(boldogsag <= 33)
    {
        ProblemaEltuntetes(0,1,2,0)
    }
    else if(33 < boldogsag && boldogsag <= 50)
    {
        ProblemaEltuntetes(0,1,2,1)
    }
    else if(50 < boldogsag && boldogsag <= 75)
    {
        ProblemaEltuntetes(0,1,2,2)
    }
    else if(75 < boldogsag && boldogsag <= 98)
    {
        ProblemaEltuntetes(0,1,2,3)
    }
    else
    {
        ProblemaEltuntetes(0,1,2,4)
    }
}

let MindenesLista =
[
    ["./Kepek/CecaSzomoru.jpg","./Kepek/CecaSzomoru1.jpg","./Kepek/CecaDiss.png","./Kepek/CecaHappy1.jpg","./Kepek/CecaSUPERhappy.jpg"],
    ["Micsudiii?!?","Tesssék?","Hááát","Ezaz","Yipppee"],
    ["Csak ennyiii?","Ilyen szomiság?","Lehetne jobb is!","Ez már valami","♥ Ennek örülök ♥"]
]

function ProblemaEltuntetes(kepekIndex, cimIndex, szovegIndex, effekt)
{
    KozepKepJ.src = MindenesLista[kepekIndex][effekt]
    fejlecJ.innerHTML = MindenesLista[cimIndex][effekt]
    KozepszovegJ.innerHTML = MindenesLista[szovegIndex][effekt]
    KozepKepJ.style.animation = "Entry2 0.5s forwards"
    delay(1000).then(() => Boldogito());
}

function Boldogito(){
    AlszovegJ.style.display = "block"
    AlszovegJ.innerHTML = "Viszont muszáj valamin átesned.."
    delay(3000).then(() => Eltunteto());
}

function Eltunteto(){
    AlszovegJ.style.animation = "eltunik 3s forwards"
    fejlecJ.style.animation = "eltunik 3s forwards"
    KozepKepJ.style.animation = "eltunik 3s forwards"
    KozepszovegJ.style.animation = "eltunik 3s forwards"
    delay(3000).then(() => Olelo());
}

let Olelocica = false;
function Olelo(){
    AlszovegJ.style.display = "none"
    fejlecJ.style.display = "none"
    KozepszovegJ.style.display = "none"
    KozepKepJ.style.animation = "slide2"
    KozepKepJ.style.borderWidth = "0px"
    KozepKepJ.style.borderStyle = "none"
    KozepKepJ.src= "./Kepek/jumping-gatito.gif"
    Olelocica = true;
    delay(2000).then(() => OleloSzovegBeusz());
}


function OleloSzovegBeusz(){
    KozepszovegJ.innerHTML = "Ez a cica szomorúságodat veszi el tőled"
    KozepszovegJ.style.display = "block"
    KozepszovegJ.style.animation = "slide 0.5 forwards"
    AlszovegJ.innerHTML = "(Bökj rá, nem esik baja)"
    AlszovegJ.style.display = "block"
    AlszovegJ.style.animation = "slide 0s forwards"
    SzamlaloSzovegJ.style.display = "block"
    SzamlaloSzovegJ.style.animation = "slide 0.5 forwards"
    SzamlaloSzovegJ.innerHTML = "(jót tesz neki!)"

}

let kattinganim = false
let kattinhatoe = true
function KepkattingF(){
    if(Olelocica && kattinhatoe)
    {
        AlszovegJ.style.display = "none"
        KozepszovegJ.style.display = "none"
        if(szomivisszafizetes > 0){
            SzamlaloSzovegJ.innerHTML = szomivisszafizetes
            if(!kattinganim)
            {
                SzamlaloSzovegJ.style.animation = "Kattint 0.2s forwards"
                kattinganim = true
            }
            else{
                SzamlaloSzovegJ.style.animation = "Kattint2 0.2s forwards"
                kattinganim = false
            }            
            szomivisszafizetes -= 1
        }
        else{
            
            kattinhatoe = false;
            SzamlaloSzovegJ.innerHTML = "Remélem segített :>"
            SzamlaloSzovegJ.style.animation = "Entry 0.5s forwards"
            delay(4000).then(() => Oleloeltuno());
        }
    }
}

function Oleloeltuno(){
    AlszovegJ.style.animation = "eltunik 1s forwards"
    KozepKepJ.style.animation = "eltunik 1s forwards"
    KozepszovegJ.style.animation = "eltunik 1s forwards"
    SzamlaloSzovegJ.style.animation = "eltunik 1s forwards"
    delay(500).then(() => DatumMegados());
}

function DatumMegados(){
    SzamlaloSzovegJ.style.display = "none"
    AlszovegJ.style.display = "none"
    fejlecJ.style.display = "block"
    fejlecJ.style.animation = "Entry 1s forwards"
    KozepszovegJ.style.display = "inline"
    KozepKepJ.style.animation = "Entry 1s forwards"
    KozepszovegJ.style.animation = "Entry 1s forwards"

    fejlecJ.innerHTML = "Remélem boldog vagy"  
    KozepszovegJ.innerHTML = "Hiszen tudod milyen nap van ma?"
    KozepszovegJ.style.animation = "Entry2 1s forwards"
    KozepKepJ.src = "./Kepek/CecaParty.gif"
    KozepKepJ.style.borderWidth = "2px"
    KozepKepJ.style.borderStyle = "solid"

    DatumJ.style.display = "inline"
    DatumJ.style.animation = "Entry 1s forwards"

    Gomb04J.style.display = "inline"
    Gomb04J.style.animation = "Entry 1s forwards"

}

function Gomb03F(){
    let DatumValasz =  DatumJ.value.toLowerCase()
    switch(DatumValasz){
        case "szulinap":
            Szulnap(0)
            break
        case "szuletesnap":
            Szulnap(0)
            break
        case "szulnap":
            Szulnap(0)
            break
        case "szulinapom":
            Szulnap(0)
            break
        case "szuletesnapom":
            Szulnap(0)
            break
        case "a szuletesnapom":
            Szulnap(0)
            break   
        case "a szülinapom":
            Szulnap(0)
            break 
        case "a szulinapom":
            Szulnap(0)
            break 
        case "születésnapom":
            Szulnap(0)
            break
                   
        case "szülinap":
            Szulnap(0)
            break
            
        case "a születésnapom":
            Szulnap(0)
            break
        case "a szuletesnap":
            Szulnap(0)
            break
        case "a szuletésnap":
            Szulnap(0)
            break
        case "vasarnap":
            Szulnap(1)
            break
        case "vasárnap":
            Szulnap(1)
            break
        case "hatodika":
            Szulnap(1)
            break
        case "6":
            Szulnap(1)
            break
        case "06":
            Szulnap(1)
            break
        case "oktober hat":
            Szulnap(1)
            break
        case "október hat":
            Szulnap(1)
            break
        case "október 6":
            Szulnap(1)
            break
        case "oktober 6":
            Szulnap(1)
            break        
        case "október 6.":
            Szulnap(1)
            break
        case "október hatodika":
            Szulnap(1)
            break
        case "oktober hatodika":
            Szulnap(1)
            break
        case "10. 6.":
            Szulnap(1)
            break
        case "10 6":
            Szulnap(1)
            break
        case "nem tudom":
            Szulnap(1)
            break    
        default:
            Szulnap(2)
    }
}

function Szulnap(eredmeny){
    Gomb04J.style.display = "none"
    DatumJ.style.display = "none"
    if(eredmeny == 0)
    {
        fejlecJ.innerHTML = "Pontosaaaaan"
        KozepKepJ.src = "./Kepek/CecaSUPERhappy.jpg"
        KozepszovegJ.innerHTML = "hihihihi"
    }
    else if(eredmeny == 1)
    {
        fejlecJ.innerHTML = "Naa, komolyan"
        KozepKepJ.src = "./Kepek/CecaDiss.png"
        KozepszovegJ.innerHTML = "A születésnapood!"
    }
    else
    {
        fejlecJ.innerHTML = "Háát, nah"
        KozepKepJ.src = "./Kepek/CecaHappy1.jpg"
        KozepszovegJ.innerHTML = "A SZÜLINAPOOOD!!"
    }
    delay(2000).then(() => UzenetPing());
}

function UzenetPing(){
    UzenetJ.style.display = "inline-block"
    UzenetJ.style.animation = "Message 1s forwards"
}

function UziMegnyitF(){
    UzenetJ.style.display = "none"
    fejlecJ.style.display = "none"
    KozepKepJ.style.display = "none"
    KozepszovegJ.style.display = "none"
    delay(500).then(() => UziMegnyi2F());
}

let hrJ = document.getElementById("hr")
let hosszuJ = document.getElementById("Hosszuszoveg")
function UziMegnyi2F(){
    KozepKepJ.style.display = "inline"
    KozepKepJ.style.animation = "Entry2 0.4s forwards"
    KozepKepJ.src = "./Kepek/hellokittycake.png"

    KozepszovegJ.style.display = "inline"
    KozepszovegJ.innerHTML = "BOLDOG SZÜLETÉSNAPOOT!"
    KozepszovegJ.style.fontSize = "8vw"
    KozepszovegJ.style.animation = "Entry2 0.4 forwads"

    hrJ.style.display = "block"
    hrJ.style.animation = "Entry 0.4s forwards"

    hosszuJ.style.display = "block"
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
  
  