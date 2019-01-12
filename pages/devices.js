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
            </Layout>
        )
    }
}