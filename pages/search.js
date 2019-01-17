import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import InfoBox from '../components/InfoBox';
import Error from 'next/error'

export default class Search extends React.Component{

    static async getInitialProps({query, res}){
        try{
            let req = await fetch('https://jsonplaceholder.typicode.com/posts/1')

            let {title, body} = await req.json()

            if(req.status >= 400){
                res.status = req.status;
                return {title:null, body:null, statusCode : req.status};
            }

            return {
                title,
                body,
                statusCode : 200
            };
        }catch(e){
            res.statusCode = 503;
            return {title:null, body:null, statusCode : 503};
        }
    }

    render(){
        const { title, body, statusCode} = this.props;
        const src = 'static/assets/front-end_info_celus.png'
        if(statusCode !== 200){
            return <Error statusCode={statusCode}/>
        }
        return(
            <Layout title="Search">
                <MenuBar/>
                <InfoBox title={title} body={body} src={src}/>
                <style jsx global>
                    {
                        `
                            .buttonsContainer .button:nth-child(1){
                                position: relative;
                                top:-45px;
                                left:110px;
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
                                left:5px;
                                top:20px;
                                background-image: url('static/assets/front-end_enganche.png');
                                background-repeat: no-repeat;
                                background-size: cover;
                                transform:rotate(140deg);
                            }

                            .buttonsContainer .button:nth-child(1) img{
                                width:100px;
                            }

                            .buttonsContainer .button:nth-child(2){
                                position: relative;
                                top:75px;
                            }

                            .buttonsContainer .button:nth-child(3){
                                position: relative;
                                left:-15px;
                                top:150px;
                            }

                            
                            .buttonsContainer .button:nth-child(2):before{
                                position: absolute;
                                content: " ";
                                z-index: -1;
                                width:100px;
                                height:100px;
                                left:50px;
                                top:20px;
                                background-image: url('static/assets/front-end_enganche.png');
                                background-repeat: no-repeat;
                                background-size: cover;
                                transform:rotate(90deg);
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