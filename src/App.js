import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
function App() {

  return (
    <div className="App">
       <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
     <h1>good job</h1>
      <Button>test</Button>
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.grandtheftauto5.fr/telechargements/uploads/f0f426-picgta5840x472.png"
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>gta 5 rp mafia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://techviral.net/wp-content/uploads/2020/11/Thanos-Mod.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>gta 5 mode.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kazyoo.com/wp-content/uploads/2020/05/meilleurs-mods-GTA-5-678x370.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            gta 5 mode fight
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<img src="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2Fjeux-video.2Fdefault_2021-07-05_24a8fc19-4379-4c39-ba46-303a781d118e.2Ejpeg/640x360/quality/80/gta-5-mod-les-10-meilleurs-mods-a-tester-absolument-top-10-des-mods-pc.jpg" alt="tst" />
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">

      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
  
      </Tab>
    </Tabs>
    <h1>
        los santos <Badge bg="secondary">Franklin</Badge>
       
      </h1>
      <h2>
      Downtown Los Santos <Badge bg="secondary">trevor</Badge>
      </h2>
      <h3>
      Rockford Hills <Badge bg="secondary">Michael</Badge>
      </h3>
      <h4>
      Alamo Sea <Badge bg="secondary">lester</Badge>
      </h4>
      <h5>
      Grapeseed <Badge bg="secondary">devin weston</Badge>
      </h5>
      <h6>
        grove street <Badge bg="secondary">ballas gang</Badge>
      </h6>
    </div>

       )
}


export default App;
