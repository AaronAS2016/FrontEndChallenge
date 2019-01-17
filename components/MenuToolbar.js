
import Link from 'next/link'
import PropTypes from 'prop-types';

export default class MenuToolbar extends React.Component{
    render(){
        const { toolbar } = this.props;
        return(
            <section className="toolbar-container">
                <section className="toolbar-items">
                    { toolbar.map((item) =>(
                                <Link href={`/${item.action}`} key={item.key}>
                                    <a className="toolbar-item"> 
                                        <img src={item.src}></img>
                                    </a>
                                </Link>
                        ))
                    }
                </section>
                <style jsx>
                    {
                        `
                            .toolbar-container{
                                display:flex;
                                width:100%;
                                justify-content:center;
                            }

                            .toolbar-container .toolbar-items{
                                display:flex;
                                justify-content:space-between;
                                flex-wrap: wrap;
                                position:relative;
                                left:70px;
                                top:25px;
                                cursor:pointer;
                            }

                            .toolbar-container .toolbar-items .toolbar-item img{
                                width:35px;
                                transform:scale(0);
                                animation:scaleIn .5s forwards;
                            }

                            .toolbar-container .toolbar-items .toolbar-item:nth-child(1) {
                                position:relative;
                                top:50px;
                                transform:rotate(-45deg);
                            }
                            
                            .toolbar-container .toolbar-items .toolbar-item:nth-child(2) {
                                position:relative;
                                top:25px;
                                right:2px;
                                transform:rotate(-40deg);
                            }

                            .toolbar-container .toolbar-items .toolbar-item:nth-child(3) {
                                position:relative;
                                top:10px;
                                right:0;
                                
                            }

                            .toolbar-container .toolbar-items .toolbar-item:nth-child(4) {
                                position:relative;
                                top:10px;
                                left:5px;
                                transform:rotate(15deg);
                            }

                            @keyframes scaleIn{
                                0%{
                                    transform:scale(0);
                                }
                                100%{
                                    transform:scale(1);
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
        src: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        action: PropTypes.string
    }))
}