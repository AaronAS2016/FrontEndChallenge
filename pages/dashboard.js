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
        action: 'dashboard',
        src: '/static/assets/front-end_subicono_home3.png',
        key: 'share'
    },
    {
        action: '',
        src: '/static/assets/front-end_subicono_home4.png',
        key: 'comment'
    },{
        action: '',
        src: '/static/assets/front-end_subicono_home2.png',
        key: 'stars'
    },{
        action: '',
        src: '/static/assets/front-end_subicono_home1.png',
        key: 'stats'

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
        const src = 'static/assets/front-end_info_home.png'
        if(statusCode !== 200){
            return <Error statusCode={statusCode}/>
        }
        return(
            <Layout title="Dashboard">
                <MenuToolbar toolbar={items} />
                <MenuBar/>
                <InfoBox title={title} body={body} src={src}/>
                <style jsx global>
                    {
                        `
                            .buttonsContainer .button:nth-child(1){
                                position: relative;
                                top:150px;
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
                                left:61px;
                                top:-70px;
                                background-image: url('static/assets/front-end_enganche.png');
                                background-repeat: no-repeat;
                                background-size: cover;
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