import { device } from '../breakpoints'
import { Link } from '../routes'
export default class MenuBar extends React.Component{


    render(){
        return(
            <div className="buttonsContainer">

                <div className="button">

                    <Link route="/search">
                        <div className="button-action">
                            <img src="../static/assets/front-end_icono_buscar.png"/>
                        </div>
                    </Link>
                </div>


                <div className="button">
                    <Link route="/devices" prefetch>
                        <div className="button-action">
                            <img src="../static/assets/front-end_icono_celus.png"/>
                        </div>
                    </Link>
                </div>

                <div className="button">
                    <Link route="/dashboard" prefetch>
                        <div className="button-action">
                            <img src="../static/assets/front-end_icono_home.png"/>
                        </div>
                    </Link>

                </div>
                
                <style jsx>
                    {
                        `
                            .buttonsContainer{
                                position:relative;
                                display:flex;
                                flex-direction:row;
                                margin-top:40px;
                                align-items:center;
                                flex-wrap:no-wrap;
                                justify-content:center;
                            }
                            .button{
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                flex-direction:column;
                                position:relative;
                            }

                            .buttonsContainer .button{
                                transition: transform .3s ease-in;
                                
                            }

                            .buttonsContainer .button:hover{
                                transform: scale(1.03);
                            }

                            .button .button-action img{
                                max-width: 150px;

                            }


                            @media ${device.tablet} {
                                .buttonsContainer{
                                    flex-direction:row;
                                }
                            }

                            @media ${device.desktop} {
                                .buttonsContainer{
                                    font-size:20px;
                                }

                                .button-info p  {
                                    font-size:1.5em;
                                }

                                .button-action p{
                                    font-size:.8em;
                                }

                            }
                           

                        `
                    }
                </style>
    
                
               
            </div>
        )
    }
}