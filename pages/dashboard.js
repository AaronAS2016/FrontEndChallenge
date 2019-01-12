import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import InfoBox from '../components/InfoBox';
import Error from 'next/error'
import MenuToolbar from '../components/MenuToolbar';

const items = [
    {
        action: '',
        iconClass: 'plus',
        title: 'Add device'

    },
    {
        action: '',
        iconClass: 'trash-alt',
        title: 'Remove device'
    },
    {
        action: '',
        iconClass: 'cog',
        title: 'Profile settings'
    }

]

export default class Dashboard extends React.Component{

    static async getInitialProps({query, res}){
        try{
            let req = await fetch('https://jsonplaceholder.typicode.com/posts/3')

            let {title, body} = await req.json()

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
        if(statusCode !== 200){
            return <Error statusCode={statusCode}/>
        }
        return(
            <Layout title="Dashboard">
                <MenuBar/>
                <MenuToolbar toolbar={items} />
                <InfoBox title={title} body={body}/>
            </Layout>
        )
    }
}