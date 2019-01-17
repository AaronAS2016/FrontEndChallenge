import 'isomorphic-fetch'
import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import InfoBar from '../components/InfoBar';

export default class extends React.Component{
    render(){
        return (
            <Layout title="DeviApp">
                <InfoBar/>
                <MenuBar/>
                <style jsx global>
                    {
                        `
                            .buttonsContainer .button:nth-child(1){
                                position: relative;
                                top:0;
                                left:20px;
                                }

                            .buttonsContainer .button:nth-child(3){
                                position: relative;
                                right:15px;
                            }

                            .buttonsContainer .button:nth-child(1):before{
                                position: absolute;
                                content: " ";
                                z-index: -1;
                                width:100px;
                                height:100px;
                                left:50px;
                                top:50px;
                                background-image: url('static/assets/front-end_enganche.png');
                                background-repeat: no-repeat;
                                background-size: cover;
                                transform:rotate(90deg);
                            }

                            .buttonsContainer .button:nth-child(1) img{
                                width:100px;
                            }

                            .buttonsContainer .button:nth-child(2){
                                position: relative;
                                top:75px;
                            }

                            
                            .buttonsContainer .button:nth-child(2):before{
                                position: absolute;
                                content: " ";
                                z-index: -1;
                                width:100px;
                                height:100px;
                                left:50px;
                                top:0;
                                background-image: url('static/assets/front-end_enganche.png');
                                background-repeat: no-repeat;
                                background-size: cover;
                            }

                            .buttonsContainer .button:nth-child(2) img{
                                width:125px;
                            }
                        
                        `
                    }
                </style>
            </Layout>
        )
    }
}