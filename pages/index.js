import 'isomorphic-fetch'
import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';

export default class extends React.Component{
    render(){
        return (
            <Layout title="DeviApp">
                <MenuBar/>
            </Layout>
        )
    }
}