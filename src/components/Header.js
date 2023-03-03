import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
const Header = (props) => {
    const listUsers= useSelector(state=>state?.user?.listUsers)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown
                         style={{marginLeft:"50px"}}
                          title={`(${listUsers.length}) Users`}
                          id="basic-nav-dropdown">
                            {listUsers&&listUsers.length>0 &&
                            listUsers.map((a,index)=>{
                                return(
                                    <NavDropdown.Item 
                                    key={`user-${index}`}
                                    // href="#action/3.1"
                                    >{a.email}</NavDropdown.Item> 

                                )
                            })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header