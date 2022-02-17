import { Component } from "react";

export class Contact extends Component{

    render(){
        return(
            <div className="container-contact-subpage">
                <div className="address-contact-subpage">
                    <h4>Adres Parafii</h4>
                    ul. Najświętszego Jana Pawła 2<br/>
                    Rydzykowo 21-370, Wielkopolskie, Polska<br/>
                    E-mail: parafia.swWojciecha@parafie.wielkopolskie.pl<br/>
                    Telefon: +48 721 370 204<br/>

                    <a href="/log-in"><button style={{marginTop: "100px"}}>Panel Administracyjny</button></a>
                </div>
                <div className="googlemap-contact-subpage">
                    <iframe 
                    title="test"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4800.057622941981!2d18.514937721856253!3d53.01984504138689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470335d62728e327%3A0xc6e03f52dd966239!2sKo%C5%9Bci%C3%B3%C5%82%20NMP%20Gwiazdy%20Nowej%20Ewangelizacji%20i%20%C5%9Bw.%20Jana%20Paw%C5%82a%20II%20w%20Toruniu!5e0!3m2!1spl!2spl!4v1644143676818!5m2!1spl!2spl" 
                    width="700" 
                    height="450" 
                    allowfullscreen="" 
                    loading="lazy">       
                    </iframe>
                </div>
            </div> 
        );
    }
}