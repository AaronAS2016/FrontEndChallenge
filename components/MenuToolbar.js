import {device as sizeScreen} from '../breakpoints'
import Link from 'next/link'
import PropTypes from 'prop-types';

export default class MenuToolbar extends React.Component{
    render(){
        const { toolbar } = this.props;
        return(
            <section className="toolbar-container">
                <section className="toolbar-items">
                    { toolbar.map((item) =>(
                                <Link href={`/${item.action}`} key={item.iconClass}>
                                    <a className="toolbar-item"> 
                                        <span><i className={`fas fa-${item.iconClass}`}></i></span>
                                        <p>{item.title}</p>
                                    </a>
                                </Link>
                        ))
                    }
                </section>
                <style jsx>
                    {
                        `
                            .toolbar-container{
                                margin:20px 0;
                                display:flex;
                                width:100%;
                                justify-content:center;
                            }

                            .toolbar-container .toolbar-items{
                                display:flex;
                                width:80%;
                                padding:30px;
                                border-radius: 10px;
                                background: #ee6f57;
                                justify-content:space-between;
                                flex-wrap: wrap;
                            }

                            .toolbar-container .toolbar-items .toolbar-item{
                                color:#cb3737;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                flex-direction:column;
                                text-decoration: none;
                            }

                            .toolbar-container .toolbar-items .toolbar-item:hover span{
                                background:#ee6f57;
                                border: 1px solid #fafafa;
                                color: #fafafa;
                            }

                            .toolbar-container .toolbar-items .toolbar-item span{
                                padding:5px;
                                width:25px;
                                height:25px;
                                color:#cb3737;
                                display:flex;
                                box-sizing: border-box;
                                justify-content:center;
                                align-items:center;
                                transition: all .3s ease-in;
                                border-radius:50%;
                                background: #fafafa;
                            }

                            .toolbar-container .toolbar-items .toolbar-item p{
                                font-size: .5em;
                                color:#fafafa;
                                font-weight:500;
                            }

                            @media ${sizeScreen.tablet} {
                                .toolbar-container .toolbar-items{
                                    width:70%;
                                    justify-content:center;
                                }
                                .toolbar-container .toolbar-items .toolbar-item{
                                    margin: 0 10px;
                                }

                                .toolbar-container .toolbar-items .toolbar-item span{
                                    width:50px;
                                    height:50px;
                                }
                                .toolbar-container .toolbar-items .toolbar-item p{
                                    font-size: 1em;
                                }
                            }

                            @media ${sizeScreen.desktop} {
                                .toolbar-container .toolbar-items{
                                    width:60%;
                                    max-width:800px;
                                }
                            }

                        `
                    }
                </style>
            </section>
        )

    }
}

MenuToolbar.propTypes  = {
    toolbar: PropTypes.arrayOf(PropTypes.shape({
        iconClass: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        action: PropTypes.string
    }))
}