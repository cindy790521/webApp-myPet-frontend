import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import "./Profile.css";
import { useSpring, animated } from '@react-spring/web';

const Profile = ({
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
    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#3525034b' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'brown' },
    })

    return (
        <div className={"allfont backgroundPic"}>
            {!user && <animated.div className={"welcomeText"} style={styles}><p>wecome to myPet!</p><p>Please log in</p></animated.div>}
            {user && <Container >
                <Row className={"grid"}>
                    <Col className={"col-4"}></Col>
                    <Col className={"col-2 "}>
                        name
                    </Col>
                    <Col className={"col-3.5"}>
                        {name}
                    </Col>
                    <Col className={"col-2.5"}></Col>
                </Row>
                <Row className={"grid"}>
                    <Col className={"col-4"}></Col>
                    <Col className={"col-2"}>
                        breed
                    </Col>
                    <Col className={"col-3.5"}>
                        {breed}
                    </Col>
                    <Col className={"col-2.5"}></Col>
                </Row>
                <Row className={"grid"}>
                    <Col className={"col-4"}></Col>
                    <Col className={"col-2"}>
                        gender
                    </Col>
                    <Col className={"col-3.5"}>
                        {gender}
                    </Col>
                    <Col className={"col-2.5"}></Col>
                </Row>
                <Row className={"grid"}>
                    <Col className={"col-4"}></Col>
                    <Col className={"col-2"}>
                        birthday
                    </Col>
                    <Col className={"col-3.5"}>
                        {birthday}
                    </Col>
                    <Col className={"col-2.5"}></Col>
                </Row>
                <Link to={"/info/edit"}>
                    Edit
                </Link>
                <br />
                <br />
            </Container>}
            <br />
            <br />
            <br />
            <div className={"ref"}>
                <a href="https://www.freepik.com/vectors/watercolor-dog">Watercolor dog vector created by rawpixel.com - www.freepik.com</a>
            </div>
        </div>
    )
}
export default Profile;