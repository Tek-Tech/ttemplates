<body style="h1,h2,h2,h4,h5{
    box-shadow: 0 5px 5px red;
    border-bottom: 15px solid white;
    background: red;
    color: white;
    font-weight: bolder;
}
body{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
header{
    position: sticky;
    top: 0;
    background: white;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: red;
}
header h1{
    background: white;
    box-shadow: 0 5px 5px white;
    border-bottom: 15px solid red;
    color: red;
}
header a{
    transition: 0.4s;
    background: red;
    color: white;
    transform: rotate(-5deg);
    box-shadow: 0 5px 5px red;
    border-bottom: 15px solid white;
    margin-right: 2%;
}
header a:hover{
    box-shadow: 0 -5px 5px white;
    border-top: 15px solid red;
    border-bottom: 15px solid red;
    transform: none;
    background: white;
    color: red;
    transition: 0.5s;
}
header > *{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
header nav{
    justify-content:center ;
    display: flex;
    flex-direction: row;
    min-width: 50%;
}
header nav > *{
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.view{
    min-height: 60vh;
    margin: 0;
    background: red;
    color: white;
    padding: 10%;
    padding-top: 5%;
    width: 80%;
    display: flex;
    flex-direction: column;
}
@media screen and (max-width:997px){
    header{
        display: flex;
        flex-direction: column;
    }
    header nav{
        overflow-x: scroll;
        justify-content: flex-start;
        padding: 2%;
    }
}">
    <header>
        <h1>
            SIMPLY
        </h1>
        <nav>
            <a href="#main">
                ACCUEUIL
            </a>
            <a href="#services">
                NOS SERVICES
            </a>
            <a href="#about">
                A PROPOS
            </a>
            <a href="#contact">
                CONTACT
            </a>
        </nav>
    </header>
    <section class='view' id="main">
        <h1>
            Accueil - Simply
        </h1>
    </section>
    <section class='view' id="services">
        <h1>
            NOS SERVICES - Simply
        </h1>
    </section>
    <section class='view' id="about">
        <h1>
            A PROPOS - Simply
        </h1>
    </section>
    <section class='view' id="contact">
        <h1>
            CONTACTEZ NOUS - Simply
        </h1>
    </section>
</body>