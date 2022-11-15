puntos = 0;
tiempo =  80 ;
vidaBoss= 610;
dañoXgolpe = 10;

puntosPasarNivel = 50; /* puntos */
puntosXmatarTopo = 10;

function restarTiempo(){
    if (document.getElementById("iniciarJuego").onclick){
        tiempo--;//disminuye de 1 en 1
        document.getElementById("tiempo").innerHTML = "TIEMPO " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tiempo; //

        if(tiempo == 0){
            document.getElementById("contenedorInicioNivel1").style.display = "none";
            document.getElementById("fondo_perdistes").style.display = "block";
        }
    }
}
function reiniciarNivel(){
    if (document.getElementById("reiniciarNivel").onclick){
        window.location.replace("../niveles_topoSmash/nivel1.html");
        /* document.getElementById("contenedorInicioJuego").style.display = "none";
        document.getElementById("contenedorInicioNivel1").style.display = "block";
        document.getElementById("contenedorPerdistesJuego").style.display = "none"; */
    }
}
function salir(){
    if (document.getElementById("salir").onclick){
        window.location.replace("../HISTORIA.html");/* falta definir */ 
    }
}
/********************************************************************************************************************** */

///////////////////////                  REPRODUCCION DE MUSICA                                  
///////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var music1 = new Audio("../sonidos/Tunnel.mp3"); /* sonido de fondo */
var count1 = 0;

function iniciarJuego(){
    if (document.getElementById("iniciarJuego").onclick){
        document.getElementById("contenedorInicioJuego").style.display = "none";
        document.getElementById("contenedorInicioNivel1").style.display = "block";
        restarTiempo();
        setInterval(restarTiempo, 1000);
        if(count1 == 0){
            count1 = 1;
            music1.play();
            music1. loop = true;
            /* music1.playbackRate = 1.5; */ /* para aumentar la velocidad de reproduccion 1 por defecto*/
        }else{
            count1 = 0;
            music1.pause();
        }
    }
}
function stop(){
    musicaFondo();
    music1.pause();
    music1.currentTime = 0;
}

function optionMusica(){
    if (document.getElementById("musica").onclick){
        document.getElementById("musica").style.display = "none";
        document.getElementById("pausa-play").style.display = "block";
        document.getElementById("stop").style.display = "block";
    }
}


function musicaFondo(){

if (document.getElementById("pausa-play").onclick){
        if(count1 == 0){
            count1 = 1;
            music1.play();
            music1.loop = true;
            document.getElementById("pausa-play").innerHTML = "PAUSE";
            
        }else{
            count1 = 0;
            music1.pause();
            document.getElementById("pausa-play").innerHTML = "PLAY";
        }
    } 
} 
function stop(){
    musicaFondo();
    music1.pause();
    music1.currentTime = 0;
    
} 
// CREDITOS
var creditos = new Audio("../sonidos/final.mp3"); /* sonido de fondo creditos */
var cre = 0;
function musicaFondo2(){

    if (window.onload = creditos.play()){
            if(cre == 0){
                cre = 1;
                creditos.play();
                creditos.volume = 0.5;
                creditos.loop = true;
               
            }else{
                count1 = 0;
                creditos.pause();
                
            }
        } 
    } 
    function creditosStop(){
        musicaFondo2();
        creditos.pause();
        creditos.currentTime = 0;
        
    } 
//  INTRO
var intro = new Audio("../sonidos/intro.mp3"); /* sonido de fondo creditos */
var intr = 0;
function intro1(){

    if (window.onload = intro.play()){
            if(intr == 0){
                intr = 1;
                intro.play();
                intro.volume = 0.5;
                intro.loop = true;
               
            }else{
                intr = 0;
                intro.pause();
                
            }
        } 
    } 
    function introStop(){
        intro1();
        intro.pause();
        intro.currentTime = 0;
        
    } 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                           EFECTOS DE SONIDO

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var efecto1 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect1 = 0;
function fx1(){
    if (document.getElementById("boss").onclick){
            if(efect1 == 0){
                efect1 = 1;
                efecto1.play();
                efecto1.playbackRate = 1;
                efecto1.volume = 0.3; /* volumen efecto 0= mute 1=maximo volumen */
                
                /* setTimeout(stop, Math.random()*50); */

            /* }if(efect1 == 1){
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1; */
            }else{
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1;
            }
        } 
    } 
    function stop(){
        fx1();
        efecto1.pause();
        efecto1.currentTime = 0;
        
    }
//
//                                    BALA
//
var efecto2 = new Audio("../sonidos/9mm.mp3"); /* sonido bala */
var efect2 = 0;
function fx2(){
    if (document.getElementById("boss").onclick){
            if(efect2 == 0){
                efect2 = 1;
                efecto2.play();
                efecto2.playbackRate = 1;
                efecto2.volume = 0.5; /* volumen efecto 0= mute 1=maximo volumen */
                
                /* setTimeout(stop, Math.random()*50); */

            /* }if(efect1 == 1){
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1; */
            }else{
                efect2 = 0;
                efecto2.play();
                efecto2.playbackRate = 1;
            }
        } 
    } 
    function stop(){
        fx2();
        efecto2.pause();
        efecto2.currentTime = 0;
        
    }
    //
//                                    BALA x 2
//
var efecto3 = new Audio("../sonidos/9mmx2.mp3"); /* sonido bala */
var efect3 = 0;
function fx3(){
    if (document.getElementById("boss").onclick){
            if(efect3 == 0){
                efect3 = 1;
                efecto3.play();
                efecto3.playbackRate = 1;
                efecto3.volume = 0.5; /* volumen efecto 0= mute 1=maximo volumen */
                
                /* setTimeout(stop, Math.random()*50); */

            /* }if(efect1 == 1){
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1; */
            }else{
                efect3 = 0;
                efecto3.play();
                efecto3.playbackRate = 1;
            }
        } 
    } 
    function stop(){
        fx3();
        efecto3.pause();
        efecto3.currentTime = 0;
        
    }
/////////////////////////////////////////
function boss(){
    if (document.getElementById("boss").onclick){
        fx1() ;
        document.getElementById("boss").style.display = "none";
        setTimeout(aparecerBoss,Math.round(Math.random()* 1000));
        vidaBoss-= 10;
        score += 1;
        hpBoss = vidaBoss - dañoXgolpe;
        document.getElementById("hp").textContent = hpBoss + " " + "/";
        document.getElementById("hp").style = "color:white", "font-size: 0.7vw;";
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        if (hpBoss <= 500){
            fx1();
            document.getElementById("hp-boss").style.backgroundColor = "purple";
            /* document.getElementById("boss").style = "width: 3vw", "height: 3vw"; */
            
        }if (hpBoss <= 450){
            fx3();
            document.getElementById("hp-boss").style.backgroundColor = "purple";
            /* document.getElementById("boss").style = "width: 3vw", "height: 3vw"; */
            
        }if (hpBoss <= 400){
            fx2();
            document.getElementById("hp-boss").style.backgroundColor = "darkviolet";
            /* document.getElementById("boss").style = "width: 7vw", "height: 7vw"; */
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"     
            document.getElementById("fondo-de-pantalla").style.backgroundImage = "url(../imagenes/arena7.png)" 
            
        }if (hpBoss <= 350){
            fx3();
            document.getElementById("hp-boss").style.backgroundColor = "violet";  
            /* document.getElementById("boss").style = "width: 8vw", "height: 8vw"; */
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"     
        }if (hpBoss <= 300){
            document.getElementById("hp-boss").style.backgroundColor = "darkgreen";  
            /* document.getElementById("boss").style = "width: 9vw", "height: 9vw";   */
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"   
        }if (hpBoss <= 250){
            document.getElementById("hp-boss").style.backgroundColor = "green"; 
            /* document.getElementById("boss").style = "width: 10vw", "height: 10vw";  */
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"
                
        }if (hpBoss <= 200){
            document.getElementById("hp-boss").style.backgroundColor = "lightgreen";  
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"     
        }if (hpBoss <= 150){
            document.getElementById("hp-boss").style.backgroundColor = "darkblue";  
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"    
        }if (hpBoss <= 100){
            document.getElementById("hp-boss").style.backgroundColor = "blue"; 
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"      
        }if (hpBoss <= 90){
            document.getElementById("hp-boss").style.backgroundColor = "lightblue"; 
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"      
        }if (hpBoss <= 80){
            document.getElementById("hp-boss").style.backgroundColor = "darkorange";   
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"    
        }if (hpBoss <= 70){
            document.getElementById("hp-boss").style.backgroundColor = "orange"; 
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"      
        }if (hpBoss <= 60){
            document.getElementById("hp-boss").style.backgroundColor = "lightcoral";  
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"     
        }if (hpBoss <= 50){
            document.getElementById("hp-boss").style.backgroundColor = "yellowgreen";     
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"  
        }if (hpBoss <= 40){
            document.getElementById("hp-boss").style.backgroundColor = "yellow"; 
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"      
        }if (hpBoss <= 30){
            document.getElementById("hp-boss").style.backgroundColor = "lightyellow";   
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"    
        }if (hpBoss <= 20){
            document.getElementById("hp-boss").style.backgroundColor = "pink";       
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"
        }if (hpBoss <= 10){
            document.getElementById("hp-boss").style.backgroundColor = "darkred";   
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)"    
        }if (hpBoss <= 5){
            document.getElementById("hp-boss").style.backgroundColor = "red";      
            document.getElementById("boss").style.backgroundImage = "url(../imagenes/topo-.gif)" 
        }
        if (hpBoss <= 0){
            document.getElementById("hp-boss").style.backgroundColor = "transparent";
            document.getElementById("boss").style.display = "none";
            document.getElementById("hp").style = "color:transparent";
            window.location.replace("../niveles_topoSmash/Creditos.html")
        }
    }
}
function aparecerBoss(){
function aparecerBoss(){
    
    if (document.getElementById("boss").onclick){
        ejeY = Math.round(Math.random()*443);
        ejeX = Math.round(Math.random()*443);

        document.getElementById("boss").style.marginTop = ejeY + "px";
        document.getElementById("boss").style.marginLeft = ejeX + "px";
        
        document.getElementById("boss").style.display = "block";  
        /* document.getElementById("hp-topo1").style.display = "block";  */    
    }
}
 
function golpear(){
    if (document.getElementById("boss").onclick){
        vidaBoss--;
        score += 1;
        hpBoss = vidaBoss - dañoXgolpe;
        document.getElementById("hp").textContent = hpBoss + " hp";
        
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
    }
}
function general(){
    boss();
    
}
//
//           RELOJ
//
momentoActual = new Date()
hora = momentoActual.getHours()
minuto = momentoActual.getMinutes()
segundo = momentoActual.getSeconds()
var horaImprimible = hora + " : " + minuto + " : " + segundo
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible
}
setTimeout("mueveReloj()",1000)
