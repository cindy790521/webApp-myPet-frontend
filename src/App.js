import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Records from "./components/Records";
import Profile from "./components/Profile";
import EditInfo from "./components/EditInfo";
import EditRecord from "./components/EditRecord";
import './App.css';
import PersonalInfoDataService from "./services/PersonalInfo";
import RecordsDataService from "./services/Records";


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [recordList, setRecordList] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [date, setDate] = useState("");
  const [food, setFood] = useState("");
  const [water, setWater] = useState("");
  const [poop, setPoop] = useState("");
  const [walk, setWalk] = useState("");
  const [medicine, setMedicine] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [grooming, setGrooming] = useState("");
  const [other, setOther] = useState("");

  const navigate = useNavigate();

  const editRecord = useCallback((data, recordList, currentPage) => {
    RecordsDataService.editRecord(data)
      .then(response => {
        getRecords(recordList, currentPage);
        navigate("/records");
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  const postRecord = useCallback((data, user, date, recordList, currentPage) => {
    RecordsDataService.postRecord(data)
      .then(response => {
        if (user) {
          getRecordIdByDateAndUserId(user.googleId, date, recordList);
          getRecords(recordList, currentPage);
        }
        navigate("/records");
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  const getRecords = useCallback((ids, currentPage) => {
    RecordsDataService.getAll(ids.toString(), currentPage)
      .then(response => {
        setRecords(response.data.records);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
        setTotalResults(response.data.total_results);
      })
      .catch(e => {
        console.log(e);
      })
  }, [currentPage]);

  useEffect(() => {
    if (user) {
      getRecords(recordList, currentPage);
      let data = { _id: user.googleId, records: recordList }
      uploadRecordList(data);
    }
  }, [recordList]);

  useEffect(() => {
    if (user) {
      getRecords(recordList, currentPage);
    }
  }, [currentPage, date, food, water, walk, poop, medicine, vaccine, grooming, other])

  useEffect(() => {
    if (user) {
      getInfo(user);
      getRecordList(user)
    }
  }, []);

  const getRecordList = useCallback((user) => {
    var data = {
      user_id: user.googleId
    }
    PersonalInfoDataService.getRecordList(data.user_id)
      .then(response => {
        setRecordList(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const getInfo = useCallback((user) => {
    var data = {
      user_id: user.googleId
    }
    PersonalInfoDataService.getInfo(data.user_id)
      .then(response => {
        setName(response.data.name);
        setBreed(response.data.breed);
        setGender(response.data.gender);
        setBirthday(response.data.birthday);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const updateInfo = useCallback((data) => {
    PersonalInfoDataService.updateInfo(data)
      .catch(e => {
        console.log(e);
      });
  }, []);

  const getRecordIdByDateAndUserId = useCallback((userId, date, recordList) => {
    RecordsDataService.getRecordIdByDateAndUserId(userId, date)
      .then(response => {
        setRecordList([...recordList, response.data]);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const uploadRecordList = useCallback((data) => {
    PersonalInfoDataService.updateRecordList(data)
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (user) {
      getInfo(user);
      getRecordList(user)
    }
  }, [user]);

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData) {
      let loginExp = loginData.exp;
      let now = Date.now() / 1000;
      if (now < loginExp) {
        // Not expired
        setUser(loginData);
      } else {
        // Expired
        localStorage.setItem("login", null);
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Navbar className={"navbar"} expand="lg" sticky="top" variant="dark">
          <Container className="container-fluid">
            <Navbar.Brand className="brand brandType" href="/">
              <img src="/images/pngfind.com-dog-paw-png-337205.png" alt="movies logo" className="petLogo" />
              <div>MyPet</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto menu">
                {user && (<Nav.Link as={Link} to={"/info"} >
                  Profile
                </Nav.Link>)}
                {user && (<Nav.Link as={Link} to={"/records"} >
                  Records
                </Nav.Link>)}
              </Nav>
            </Navbar.Collapse>
            {user ? (
              <Logout setUser={setUser} />
            ) : (
              <Login setUser={setUser} />
            )}
          </Container>
        </Navbar>

        <Routes>
          <Route path={`/records/edit`} element={
            <EditRecord
              user={user}
              date={date}
              food={food}
              water={water}
              poop={poop}
              walk={walk}
              medicine={medicine}
              vaccine={vaccine}
              grooming={grooming}
              other={other}
              setDate={setDate}
              setFood={setFood}
              setWater={setWater}
              setPoop={setPoop}
              setWalk={setWalk}
              setMedicine={setMedicine}
              setVaccine={setVaccine}
              setGrooming={setGrooming}
              setOther={setOther}
              editRecord={editRecord}
              postRecord={postRecord}
              getRecordIdByDateAndUserId={getRecordIdByDateAndUserId}
              getRecords={getRecords}
              currentPage={currentPage}
              recordList={recordList}
            />}
          />

          <Route path={`/info/edit`} element={
            <EditInfo
              user={user}
              getInfo={getInfo}
              updateInfo={updateInfo}
              setName={setName}
              setBreed={setBreed}
              setGender={setGender}
              setBirthday={setBirthday}
              name={name}
              breed={breed}
              gender={gender}
              birthday={birthday}
            />}
          />

          <Route exact path={"/"} element={
            <Profile
              user={user}
              getInfo={getInfo}
              updateInfo={updateInfo}
              setName={setName}
              setBreed={setBreed}
              setGender={setGender}
              setBirthday={setBirthday}
              name={name}
              breed={breed}
              gender={gender}
              birthday={birthday}
            />}
          />

          <Route exact path={"/info"} element={
            <Profile
              user={user}
              getInfo={getInfo}
              updateInfo={updateInfo}
              setName={setName}
              setBreed={setBreed}
              setGender={setGender}
              setBirthday={setBirthday}
              name={name}
              breed={breed}
              gender={gender}
              birthday={birthday}
            />}
          />

          <Route exact path={"/records"} element={
            <Records
              user={user}
              records={records}
              setRecords={setRecords}
              recordList={recordList}
              setRecordList={setRecordList}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              entriesPerPage={entriesPerPage}
              totalResults={totalResults}
              setEntriesPerPage={setEntriesPerPage}
              setTotalResults={setTotalResults}
              getRecords={getRecords}
            />}
          />
        </Routes>
      </div>
    </GoogleOAuthProvider >
  );
}

export default App;
