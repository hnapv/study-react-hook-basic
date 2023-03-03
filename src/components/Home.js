import FormAddNew from './FormAddUser';
import Header from './Header';
import TableUser from './TableUser';

const Home = (props) => {
    return (
        <div>
            <Header />
            <FormAddNew/>
            <TableUser/>
        </div>
    );
}

export default Home