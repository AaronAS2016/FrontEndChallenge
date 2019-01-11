
import Head from 'next/head'
import {device} from '../../device'

export default class Home extends React.Component {
    render(){
        const {devices, search, home} = this.props.stats


        return(
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no"/>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                </Head>
                <header>Challenge</header>

                <div className="buttonsContainer">
                    <div className="button" key={devices.id}>
                        <div className="button-info">
                            <p>Connected devices</p>
                            <span className="info-title">{devices.title}</span>
                            <span className="info-desc">{devices.body}</span>
                        </div>

                        <div className="button-action">
                            <span><i class="fas fa-mobile-alt"></i></span>
                            <p>Devices</p>
                        </div>
                    </div>
                    <div className="button" key={search.id}>
                        <div className="button-info">
                            <p>Recent searches</p>
                            <span className="info-title">{search.title}</span>
                            <span className="info-desc">{search.body}</span>
                        </div>
                        <div className="button-action">
                            <span><i class="fas fa-search"></i></span>
                            <p>Search</p>
                        </div>
                    </div>

                    <div className="button" key={home.id}>
                        <div className="button-info">
                            <p>User Stats</p>
                            <span className="info-title">{home.title}</span>
                            <span className="info-desc">{home.body}</span>
                        </div>

                        <div className="button-action">
                            <span ><i class="fas fa-home"></i></span>
                            <p>Home</p>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {
                        `
                            header{
                                color:#132238;
                                font-size:3em;
                                padding:20px;
                                text-align:center;
                                text-transform:uppercase;
                                border-bottom: 1px solid #ccc;
                            }
                            .buttonsContainer{
                                padding:20px;
                                display:flex;
                                flex-direction:column;
                                align-items:center;
                                flex-wrap:no-wrap;
                                justify-content:center;
                                margin:20px;
                            }
                            .button{
                                margin:20px;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                flex-direction:column;
                            }
                            .button .button-action{
                                width:150px;
                                height:150px;
                                background: #98ccd3;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                cursor:pointer;
                                flex-direction:column;
                                border-radius:50%;
                                margin:20px 0;
                                box-shadow: inset 1px 1px 5px 3px rgba(54,78,104,1);
                                transition: all .3s ease-in;
                            }
                            .button .button-action:hover{
                                    font-size:22px;
                                    box-shadow: inset 1px 1px 5px 5px rgba(54,78,104,1);
                            }

                            .button .button-action p{
                                font-size:.6em;
                                font-weight:600;
                                text-transform:uppercase;
                                margin:5px 0;
                            }

                            .button .button-action span{
                                margin:0;
                                color:#132238;
                                font-size:3em;
                            }



                            .button .button-info {
                                border-left:1px solid #364e68;
                                padding:0 5px;
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
                                font-weight:400;
                            }

                            .button .button-info .info-desc{
                                font-size:.5em;
                                font-weight:300;
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
                            }

                        
                        `
                    }
                </style>
                <style jsx global>
                {
                    `
                       body{
                           font-family: system-ui;
                           margin:0;
                           background: #ebf0f6;
                       }


                    `

                }

                </style>
            </div>
        )
    }
}