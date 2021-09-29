import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

///////////////////DESKTOP RESULÇAO 1024p///////////////////
@media only screen and (min-width: 1024px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 73%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 105%;
        margin-left: -150px;        
    }   

    .svg {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -200px;
        margin-top: 30px;
    }

    .selection {        
        margin-left: -200px;
        margin-top: 70px;  
    }
}

///////////////////DESKTOP RESULÇAO 1360p///////////////////
@media only screen and (min-width: 1360px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 75%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 105%;
        margin-left: -150px;        
    }   

    .svg {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -180px;
        margin-top: -15px;
    }

    .selection {        
        margin-left: -170px;
        margin-top: 70px;  
    }

}

@media only screen and (min-width: 1600px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 80%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -150px;        
    }   

    .svg {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -80px;
        margin-top: -120px;
    }

    .selection {        
        margin-left: -70px;
        margin-top: -100px;  
    }
}

///////////////////DESKTOP RESULÇAO 1720p///////////////////
@media only screen and (min-width: 1720px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 100%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -150px;        
    }   

    .svg {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -120px;
        margin-top: -390px;
    }

    .selection {        
        margin-left: -100px;
        margin-top: -270px;  
    }
}

`;
