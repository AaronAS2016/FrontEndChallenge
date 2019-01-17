import {device as sizeScreen} from '../breakpoints'
import PropTypes from 'prop-types'

export default class InfoBox extends React.Component{

    render(){
        const {title, body, src} = this.props;
        return(
            <section className="box-container">
                <div className="box-content">
                    <img src={src}></img>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <style jsx>
                    {
                        `
                            .box-container{
                                display:flex;
                                width:100%;
                                justify-content:center;
                                margin-top:150px;
                            }

                            .box-container .box-content{
                                padding:20px;
                                color:#009BDB;
                                opacity:0;
                                background: #90CCEB;
                                display:flex;
                                flex-direction:column;
                                align-items:center;
                                transition: all .3s ease-in-out;
                                animation: fadeIn 1s forwards;
                            }

                            .box-container .box-content img{
                                width:150px;
                            }

                            .box-container .box-content h3{
                                font-size:18px;
                            }
                            @media ${sizeScreen.tablet} {
                                .box-container .box-content{
                                    width:70%;
                                }
                            }

                            @media ${sizeScreen.desktop} {
                                .box-container .box-content{
                                    width:50%;
                                    max-width:800px;
                                }
                            }

                            @keyframes fadeIn{
                                0%{
                                  opacity:0;  
                                }

                                100%{
                                    opacity:1;
                                }
                            }

                        `
                    }
                </style>
            </section>
        )
    }
}

InfoBox.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};