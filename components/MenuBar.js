import { device } from '../breakpoints'
import { Link } from '../routes'

export default class MenuBar extends React.Component{
    render(){
        return(
            <div className="buttonsContainer">
                    <Link route="/search" prefetch>
                        <div className="button">
                            <div className="button-info">
                                <p>File finder</p>
                                <span className="info-title">Search</span>
                                <span className="info-desc">Search files stored on your device</span>
                            </div>
                            <div className="button-action">
                                <span><i className="fas fa-search"></i></span>
                                <p>Search</p>
                            </div>
                        </div>
                    </Link>

                    <Link route="/dashboard" prefetch>
                        <div className="button">
                            <div className="button-info">
                                <p>User Stats</p>
                                <span className="info-title">Dashboard</span>
                                <span className="info-desc">Username</span>
                            </div>

                            <div className="button-action">
                                <span><i className="fas fa-home"></i></span>
                                <p>Dashboard</p>
                            </div>
                        </div>
                    </Link>

                    <Link route="/devices" prefetch>
                        <div className="button">
                            <div className="button-info">
                                <p>Connected devices</p>
                                <span className="info-title">Devices Connected: 3</span>
                                <span className="info-desc">Chek info of all your phones connected to DeviApp</span>
                            </div>

                            <div className="button-action">
                                <span><i className="fas fa-mobile-alt"></i></span>
                                <p>Devices</p>
                            </div>
                        </div>
                    </Link>





                <style jsx>
                    {
                        `
                            .buttonsContainer{
                                display:flex;
                                flex-direction:column;
                                align-items:center;
                                flex-wrap:no-wrap;
                                justify-content:center;
                            }
                            .button{
                                margin:25px 50px;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                flex-direction:column;
                            }
                            .button .button-action{
                                width:150px;
                                height:150px;
                                background: #ee6f57;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                cursor:pointer;
                                flex-direction:column;
                                border-radius:50%;
                                border: 1px solid #ee6f57;
                                margin:20px 0;
                                color:#fafafa;
                                transition: all .3s ease-in;
                            }
                            .button .button-action:hover{
                                background: #cb3737;
                                transform: scale(1.1);
                            }
                            .button .button-action p{
                                font-size:.6em;
                                font-weight:600;
                                text-transform:uppercase;
                                margin:5px 0;
                            }

                            .button .button-action span{
                                margin:0;
                                font-size:3em;
                                transition: transform .3s ease-in;
                            }



                            .button .button-info {
                                border-left:1px solid #364e68;
                                padding:0 15px;
                                box-sizing:border-box;
                                display:flex;
                                flex-direction:column;
                                align-items:flex-start;
                                position:relative;
                            }

                            .button .button-info:before{
                                content: "\f111";
                                font-family: "Font Awesome 5 Free";
                                position:absolute;
                                font-size:.3em;
                                color:#132238;
                                font-weight:bold;
                                left:-3px;
                                top:0;
                            }

                            .button .button-info:after{
                                content: "\f111";
                                font-family: "Font Awesome 5 Free";
                                position:absolute;
                                font-size:.3em;
                                left:-3px;
                                color:#132238;
                                font-weight:bold;
                                bottom:0;
                            }


                            .button .button-info p{
                                font-size:.9em;
                                margin:0;
                                margin:2px 0;
                                font-weight:bold;
                                text-transform:uppercase;
                            }

                            .button .button-info .info-title{
                                font-size:.7em;
                                text-transform:uppercase;
                                font-weight:500;
                                margin-bottom: 3px;
                            }

                            .button .button-info .info-desc{
                                font-size:.5em;
                                font-weight:400;
                                min-width:50%;
                                text-transform:uppercase;
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

                                .button .button-info p  {
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