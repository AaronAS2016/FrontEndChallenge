import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import InfoBox from '../components/InfoBox';
import Error from 'next/error'
import MenuToolbar from '../components/MenuToolbar';


/** Parametros necesarios en la Toolbar
 * @param action: Es el parametro que va a indicar la ruta del enlace del boton del elemento del toolbar
 * @param iconClass: es la clase del icono para mostrar el elemento, se utiliza las clases provistas por fontAwesome sin el prefijo `fa`
 * @param title: Titulo de la acción que realiza el elemento
 */

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
            res.statusCode  = 503;
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