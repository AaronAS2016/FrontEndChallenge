
import Head from 'next/head'
import { Link } from '../routes'
import NProgress from 'nprogress'
import Router from 'next/router'
import PropTypes from 'prop-types';
import {device as sizeScreen} from '../breakpoints'

Router.onRouteChangeStart = (url) => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
    render(){
        const { title , children} = this.props

        return(
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no"/>
                    <title>{title}</title>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
                    <link rel="icon" href="../static/logo.png"></link>
                </Head>

                <header className="header"><Link route="/"><a>{title}</a></Link></header>
                <main className="main">
                    { children }
                </main>
                <style jsx>
                {
                    `
                        .header{
                            font-size:2em;
                            padding:20px;
                            text-align:center;
                            user-select:none;
                            margin: 0 40px;
                            text-transform:uppercase;
                            border-bottom: 1px solid #E8E9EA;
                        }

                        header a{
                            text-decoration: none;
                            color:#fff;
                            font-weight: 500;
                        }
                        .main{
                            padding:20px;
                            margin:20px;
                        }

                        @media ${sizeScreen.tablet} {
                            .header{
                                font-size:3em;
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
                           background: #009BDD;
                       }

                        /* Make clicks pass-through */
                        #nprogress {
                            pointer-events: none;
                        }
                        #nprogress .bar {
                            background: #cb3737;
                            position: fixed;
                            z-index: 1031;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 2px;
                        }
                        /* Fancy blur effect */
                        #nprogress .peg {
                            display: block;
                            position: absolute;
                            right: 0px;
                            width: 100px;
                            height: 100%;
                            box-shadow: 0 0 10px #cb3737, 0 0 5px #cb3737;
                            opacity: 1.0;
                            -webkit-transform: rotate(3deg) translate(0px, -4px);
                                -ms-transform: rotate(3deg) translate(0px, -4px);
                                    transform: rotate(3deg) translate(0px, -4px);
                        }
                        /* Remove these to get rid of the spinner */
                        #nprogress .spinner {
                            display: block;
                            position: fixed;
                            z-index: 1031;
                            top: 15px;
                            right: 15px;
                        }
                        #nprogress .spinner-icon {
                            width: 18px;
                            height: 18px;
                            box-sizing: border-box;
                            border: solid 2px transparent;
                            border-top-color: #cb3737;
                            border-left-color: #cb3737;
                            border-radius: 50%;
                            -webkit-animation: nprogress-spinner 400ms linear infinite;
                                    animation: nprogress-spinner 400ms linear infinite;
                        }
                        .nprogress-custom-parent {
                            overflow: hidden;
                            position: relative;
                        }
                        .nprogress-custom-parent #nprogress .spinner,
                        .nprogress-custom-parent #nprogress .bar {
                            position: absolute;
                        }
                        @-webkit-keyframes nprogress-spinner {
                            0%   { -webkit-transform: rotate(0deg); }
                            100% { -webkit-transform: rotate(360deg); }
                        }
                        @keyframes nprogress-spinner {
                            0%   { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }

                        img{
                            user-select:none;
                        }

                    `

                }

                </style>
            </div>
        )
    }
}


Layout.propTypes = {
    title: PropTypes.string.isRequired
};