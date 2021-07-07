import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';

function Pricing() {
    return (
        <div className="pricing-container">
            <Header/>
            <Container className="main-pricing">
                <div className="pricing-content">
                    <h2>Pricing</h2>
                </div>
            </Container>
        </div>
    )
}

export default Pricing
