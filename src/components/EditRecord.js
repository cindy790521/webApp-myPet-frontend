import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./EditRecord.css";

const EditRecord = ({
    user,
    date,
    food,
    water,
    poop,
    walk,
    medicine,
    vaccine,
    grooming,
    other,
    setDate,
    setFood,
    setWater,
    setPoop,
    setWalk,
    setMedicine,
    setVaccine,
    setGrooming,
    setOther,
    editRecord,
    postRecord,
    getRecordIdByDateAndUserId,
    getRecords,
    recordList,
    currentPage
}) => {

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date) => {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }

    let editing = false;
    let initialRecordState = "";
    let location = useLocation();
    if (location.state !== null) {
        editing = true;
        initialRecordState = location.state.currentRecord;
    }

    useEffect(() => {
        if (editing){setDate(initialRecordState.date)} 
        else{ 
        setVaccine("No");
        setDate(formatDate(new Date()));
        setMedicine("No");
        setGrooming("No");
        };

    }, []);

    useEffect(() => {
        if(initialRecordState!=""){
        setFood(initialRecordState.food);
        setWater(initialRecordState.water);
        setPoop(initialRecordState.poop);
        setWalk(initialRecordState.walk);
        setMedicine(initialRecordState.medicine);
        setVaccine(initialRecordState.vaccine);
        setGrooming(initialRecordState.grooming);
        setOther(initialRecordState.other);}
    }, [initialRecordState]);

    const onChangeDate = e => {
        const date = e.target.value;
        setDate(date);
    }

    const onChangeFood = e => {
        const food = e.target.value;
        setFood(food);
    }

    const onChangeWater = e => {
        const water = e.target.value;
        setWater(water);
    }

    const onChangePoop = e => {
        const poop = e.target.value;
        setPoop(poop);
    }

    const onChangeWalk = e => {
        const walk = e.target.value;
        setWalk(walk);
    }

    const onChangeMedicine = e => {
        const medicine = e.target.value;
        setMedicine(medicine);
    }

    const onChangeVaccine = e => {
        const vaccine = e.target.value;
        setVaccine(vaccine);
    }

    const onChangeGrooming = e => {
        const grooming = e.target.value;
        setGrooming(grooming);
    }

    const onChangeOther = e => {
        const other = e.target.value;
        setOther(other);
    }

    const saveRecord = () => {
        var data = {
            date: date,
            food: food,
            water: water,
            poop: poop,
            walk: walk,
            medicine: medicine,
            vaccine: vaccine,
            grooming: grooming,
            other: other,
            name: user.name,
            user_id: user.googleId
        }

        if (editing) {
            var recordData = {
                date: date,
                food: food,
                water: water,
                poop: poop,
                walk: walk,
                medicine: medicine,
                vaccine: vaccine,
                grooming: grooming,
                other: other,
                name: user.name,
                user_id: user.googleId,
                record_id: location.state.currentRecord._id
            }
            editRecord(recordData, recordList, currentPage);
        } else {
            postRecord(data, user, date, recordList, currentPage);
        }
    }


    return (
        <Container className="main-container">
            <Form>
                <Form.Group className="mb-3">
                    <Row className={"recordForm"}>
                        <Col className={"col-3 "}>
                            <Form.Label >Date</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                date={date}
                                onChange={onChangeDate}
                                defaultValue={editing ? initialRecordState.date : formatDate(new Date())}
                            />
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label> Food (g)</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                food={food}
                                onChange={onChangeFood}
                                defaultValue={editing ? initialRecordState.food : ""}
                            />
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Water (ml)</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                water={water}
                                onChange={onChangeWater}
                                defaultValue={editing ? initialRecordState.water : ""}
                            />
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Poop (times)</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                poop={poop}
                                onChange={onChangePoop}
                                defaultValue={editing ? initialRecordState.poop : ""}
                            />
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Walk (minutes)</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                walk={walk}
                                onChange={onChangeWalk}
                                defaultValue={editing ? initialRecordState.walk : ""}
                            />
                        </Col>
                    </Row>

                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Vaccine (yes/no)</Form.Label>
                        </Col>
                        <Col className={"col-9 select"}>
                            <select vaccine={vaccine} onChange={onChangeVaccine} defaultValue={editing ? initialRecordState.vaccine : "No"}>
                                <option vaccine="No">No</option>
                                <option vaccine="Yes">Yes</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Medicine (yes/no)</Form.Label>
                        </Col>
                        <Col className={"col-9 select"}>
                        <select value={medicine} onChange={onChangeMedicine} defaultValue={editing ? initialRecordState.medicine : "No"}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                            </select>
                        </Col>
                    </Row>
                    
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Grooming (yes/no)</Form.Label>
                        </Col>
                        <Col className={"col-9 select"}>
                            <select value={grooming} onChange={onChangeGrooming} defaultValue={editing ? initialRecordState.grooming : "No"}>
                                <option value="NO">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className={"recordForm"}>
                        <Col className={"col-3"}>
                            <Form.Label>Other</Form.Label>
                        </Col>
                        <Col className={"col-9"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                other={other}
                                onChange={onChangeOther}
                                defaultValue={editing ? initialRecordState.other : ""}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" onClick={saveRecord}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditRecord;