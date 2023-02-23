import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { BsFillPencilFill, BsFillPlusCircleFill } from "react-icons/bs";
import "./Records.css";


const Records = ({
    user,
    records,
    setRecords,
    recordList,
    setRecordList,
    currentPage,
    setCurrentPage,
    entriesPerPage,
    totalResults,
    setEntriesPerPage,
    getRecords,
    setTotalResults
}) => {
    return (
        <div className="App">
            <Container className="main-container">
                <Row>
                    <Col><img src="/images/bone.jpg" className="recordIcon" />Food(g)</Col>
                    <Col><img src="/images/water.png" className="recordIcon" />Water(ml)</Col>
                    <Col><img src="/images/poop.png" className="recordIcon" />Poop(times)</Col>
                    <Col><img src="/images/walk.png" className="recordIcon" />Walk(min)</Col>
                    <Col><img src="/images/vaccine.png" className="recordIcon" />Vaccine(y/n)</Col>
                    <Col><img src="/images/medicine.png" className="recordIcon" />Medicine(y/n)</Col>
                    <Col><img src="/images/grooming.jpg" className="recordIcon" />Grooming(y/n)</Col>
                    <Col><img src="/images/memo.png" className="recordIcon" />Other</Col>
                    <Col></Col>
                </Row>
                <Row>
                    < Link to={"/records/edit"} >
                        <BsFillPlusCircleFill /> Add
                    </Link>
                </Row>
                <Row className="recordRow">
                    {records.map((record) => {
                        return (
                            <Col key={record._id}>
                                <Card className="recordsCard">
                                    <Card.Body>
                                        <Card.Title>{record.date}</Card.Title>
                                        <Card.Text>
                                            <img src="/images/bone.jpg" className="recordIcon" />&nbsp;{record.food} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/water.png" className="recordIcon" />&nbsp;{record.water} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/poop.png" className="recordIcon" />&nbsp;{record.poop} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/walk.png" className="recordIcon" /> &nbsp;{record.walk} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/vaccine.png" className="recordIcon" /> &nbsp;{record.vaccine} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/medicine.png" className="recordIcon" />&nbsp;{record.medicine} &nbsp;&nbsp;&nbsp;&nbsp;
                                            <img src="/images/grooming.jpg" className="recordIcon" />&nbsp;{record.grooming}&nbsp;&nbsp;&nbsp;&nbsp;
                                            <br />
                                            <img src="/images/memo.png" className="recordIcon" />&nbsp;{record.other}&nbsp;&nbsp;&nbsp;&nbsp;
                                        </Card.Text>

                                        <Link to={"/records/edit"} state={{ currentRecord: record }}>
                                            <BsFillPencilFill />
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        )
                    })}
                </Row>
                <br />
                {currentPage != 0 && <Button
                    variant="link"
                    onClick={() => { setCurrentPage(currentPage - 1) }}
                >
                    Get previous {entriesPerPage} results
                </Button>}

                Showing page:{currentPage + 1}.
                {entriesPerPage * (currentPage + 1) < totalResults && <Button
                    variant="link"
                    onClick={() => { setCurrentPage(currentPage + 1) }}
                >
                    Get next {entriesPerPage} results
                </Button>}

                <div className={"attribution"}>
                    <br />
                    Attribution<br />
                https://icon-library.com/icon/meat-icon-3.html.html>Meat Icon # 20733<br />
                    <a href="https://www.clipartmax.com/middle/m2i8Z5A0i8N4N4A0_cream-ice-poo-poop-shit-icon-icon-search-engine-poop-icon/" target="_blank">Cream, Ice, Poo, Poop, Shit Icon Icon Search Engine - Poop Icon @clipartmax.com</a><br />
                    <a href="https://www.clipartmax.com/middle/m2i8Z5A0G6m2b1N4_walking-small-dog-pet-vector-dog-walking-icon-png/" target="_blank">Walking Small Dog Pet Vector - Dog Walking Icon Png @clipartmax.com</a><br />
                    <a href="https://www.freeiconspng.com/img/49373">Vaccine syringes PNG Photo</a><br />
                    https://icon-library.com/icon/grooming-icon-27.html.html>Grooming Icon # 327345
                </div>
            </Container>
        </div>
    )
}


export default Records;