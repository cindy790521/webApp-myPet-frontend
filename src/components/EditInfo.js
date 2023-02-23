import React, { useState } from 'react';
import RecordsDataService from "../services/Records";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./EditInfo.css";

const EditInfo = ({
    user,
    getInfo,
    updateInfo,
    setName,
    setBreed,
    setGender,
    setBirthday,
    name,
    breed,
    gender,
    birthday
}) => {
    const navigate = useNavigate();
    const onChangeName = e => {
        const name = e.target.value;
        setName(name);
    }

    const onChangeBreed = e => {
        const breed = e.target.value;
        setBreed(breed);
    }

    const onChangeGender = e => {
        const gender = e.target.value;
        setGender(gender);
    }

    const onChangeBirthday = e => {
        const birthday = e.target.value;
        setBirthday(birthday);
    }

    const saveProfile = () => {
        var data = {
            name: name,
            _id: user.googleId,
            breed: breed,
            gender: gender,
            birthday: birthday
        }
        updateInfo(data);
        navigate("/info");
    }

    return (
        <Container >
            <Form >
                <Form.Group className="mb-3">
                    {/* <Form.Row style={{width: "100%", marginBottom: "20px"}}> */}
                    <Row className={"formAlign"}>
                        <Col className={"col-2"}>
                            <Form.Label >name</Form.Label>
                        </Col>
                        <Col className={"col-10"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                name={name}
                                onChange={onChangeName}
                                defaultValue={name}
                            />
                        </Col>
                    </Row>
                    <Row className={"formAlign"}>
                        <Col className={"col-2"}>
                            <Form.Label >breed</Form.Label>
                        </Col>
                        <Col className={"col-10"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                breed={breed}
                                onChange={onChangeBreed}
                                defaultValue={breed}
                            />
                        </Col>
                    </Row>
                    <Row className={"formAlign"}>
                        <Col className={"col-2"}>
                            <Form.Label>gender</Form.Label>
                        </Col>
                        <Col className={"col-10"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                gender={gender}
                                onChange={onChangeGender}
                                defaultValue={gender}
                            />
                        </Col>
                    </Row>
                    <Row className={"formAlign"}>
                        <Col className={"col-2"}>
                            <Form.Label >birthday</Form.Label>
                        </Col>
                        <Col className={"col-10"}>
                            <Form.Control
                                as="textarea"
                                type="text"
                                required
                                birthday={birthday}
                                onChange={onChangeBirthday}
                                defaultValue={birthday}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" onClick={saveProfile}>
                    Save
                </Button>
            </Form>
        </Container>
    )
}

export default EditInfo;

