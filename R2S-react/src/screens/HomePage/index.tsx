import React from "react";
import "./home.css";
import { Container, Row, Col, Image } from 'react-bootstrap';
import background from "../../assets/img/background.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HomeLeftForm } from "../../components/HomeLeft";
import { HomeRightForm } from "../../components/HomeRight";
import { HomeContentForm } from "../../components/HomeContent";


export const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="row g4">
                    <HomeLeftForm />
                    <HomeContentForm />
                    <HomeRightForm />
                </div>
            </div>
        </>
    )
}