import {device as sizeScreen} from '../breakpoints'

export default class InfoBox extends React.Component{

    render(){
        const {title, body} = this.props;
        return(
            <section className="box-container">
                <div className="box-content">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <style jsx>
                    {
                        `
                            .box-container{
                                margin:20px 0;
                                display:flex;
                                width:100%;
                                justify-content:center;
                            }

                            .box-container .box-content{
                                background: #ee6f57;
                                width: 80%;
                                padding:30px;
                                color:#fafafa;
                                transition: all .3s ease-in-out;
                            }

                            .box-container .box-content h3{
                                font-size:18px;
                            }
                            .box-container .box-content:hover{
                                box-shadow: 10px 10px 3px  #cb3737;
                            }
                            @media ${sizeScreen.tablet} {
                                .box-container .box-content{
                                    width:70%;
                                }
                            }

                            @media ${sizeScreen.desktop} {
                                .box-container .box-content{
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