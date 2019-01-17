import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import InfoBox from '../components/InfoBox';
import Error from 'next/error'

export default class Devices extends React.Component{

    static async getInitialProps({query, res}){
        try{
            let req = await fetch('https://jsonplaceholder.typicode.com/posts/2')

            let {title, body} = await req.json()

            if(req.status >= 400){
                res.statusCode  = req.status;
                return {title:null, body:null, statusCode : req.status};
            }

            return {
                title,
                body,
                statusCode : 200
            };
        }catch(e){
            res.status = 503;
            return {title:null, body:null, statusCode : 503};
        }
    }

    render(){
        const { title, body, statusCode} = this.props;
        if(statusCode !== 200){
            return <Error statusCode={statusCode}/>
        }
        return(
            <Layout title="Devices">
                <MenuBar/>
                <InfoBox title={title} body={body}/>
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