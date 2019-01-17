import {device as sizeScreen} from '../breakpoints'

export default class InfoBar extends React.Component{
    render(){
        return(
            <div className="info-container">

                <div className="button-info">
                    <p>File finder</p>
                    <span className="info-title">Search</span>
                    <span className="info-desc">Search files stored on your device</span>
                </div>

                <div className="button-info">
                    <p>Dashboard</p>
                    <span className="info-title">User stats</span>
                    <span className="info-desc">Username</span>
                </div>

                <div className="button-info">
                    <p>Connected devices</p>
                    <span className="info-title">Devices Connected: 3</span>
                    <span className="info-desc">Chek info of all your phones connected to DeviApp</span>
                </div>

                <style jsx>
                    {
                        `
                            .info-container{
                                width:100%;
                                display:flex;
                                position:relative;
                                align-items:center;
                                justify-content:center;
                            }
                            .button-info {
                                border-left:1px solid #fff;
                                padding:0 15px;
                                box-sizing:border-box;
                                display:flex;
                                flex-direction:column;
                                justify-content:center;
                                position:relative;
                                align-items:center;
                                color:#fff;
                                font-size:10px;
                                align-items:flex-start;
                                transform:scaleY(0);
                                transform-origin:top left;
                                animation: dropDown 1s forwards;
                            }

                            .info-container .button-info:nth-child(1){
                                top:50px;
                            }

                            .info-container .button-info:nth-child(2){
                                top:320px;
                            }

                            .info-container .button-info:nth-child(3){
                                top:260px;
                                left:10px;
                                border:none;
                                border-right:1px solid #fff;
                            }

                            .info-container .button-info:nth-child(3):after,
                            .info-container .button-info:nth-child(3):before{
                                right:-3px;
                                left:initial;
                            }


                             .button-info:before{
                                content: "\f111";
                                font-family: "Font Awesome 5 Free";
                                position:absolute;
                                font-size:.3em;
                                color:#fff;
                                font-weight:bold;
                                left:-3px;
                                top:0;
                            }

                            .button-info:after{
                                content: "\f111";
                                font-family: "Font Awesome 5 Free";
                                position:absolute;
                                font-size:.3em;
                                left:-3px;
                                color:#fff;
                                font-weight:bold;
                                bottom:0;
                            }
                            
                            .button-info > *{
                                transform:scaleX(0);
                                transform-origin: 0 50%;
                                animation: dropRight .5s forwards;
                                animation-delay:.5s;
                            }

                             .button-info p{
                                font-size:.9em;
                                margin:0;
                                margin:2px 0;
                                font-weight:300;
                                text-transform:uppercase;
                            }

                             .button-info .info-title{
                                font-size:.7em;
                                text-transform:uppercase;
                                font-weight:300;
                                margin-bottom: 3px;
                            }

                            .button-info .info-desc{
                                font-size:.5em;
                                font-weight:400;
                                min-width:50%;
                                text-transform:uppercase;
                            }

                            @media ${sizeScreen.tablet} {
                                .info-container .button-info:nth-child(1){
                                    top:50px;
                                }

                                .info-container .button-info:nth-child(2){
                                    top:300px;
                                }

                                .info-container .button-info:nth-child(3){
                                    top:230px;
                                    left:10px;
                                    border:none;
                                    border-right:1px solid #fff;
                                }
                            }

                            @keyframes dropDown{
                                0%{
                                    transform:scaleY(0);
                                }

                                100%{
                                    transform:scaleY(1);
                                }
                            }

                            @keyframes dropRight{
                                0%{
                                    transform:scaleX(0);
                                }

                                100%{
                                    transform:scaleX(1);
                                }
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}