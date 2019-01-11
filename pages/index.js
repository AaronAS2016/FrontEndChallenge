import 'isomorphic-fetch'
import Error from 'next/error'
import Home from '../components/pure/Home';

export default class extends React.Component{

    static async getInitialProps({query, res}){
        try{
            let [reqSearch, reqHome, reqDevices] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/posts/1'),
                fetch('https://jsonplaceholder.typicode.com/posts/2'),
                fetch('https://jsonplaceholder.typicode.com/posts/3')
            ])

            let dataSearch = await reqSearch.json()

            let dataHome = await reqHome.json()

            let dataDevices = await reqDevices.json()


            return {
                stats:{
                    'search': dataSearch,
                    'home': dataHome,
                    'devices': dataDevices
                  }
            };
        }catch(e){
            return {stats:null};
        }
    }
    render(){
        const {stats} = this.props;
        return (
            <Home stats={stats}/>
        )
    }
}