import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const TopBar = ({topClass}) => {
    return (
        <div  id="topHeader" className={`top-header ${topClass? topClass: ''}`}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>Sarvam Safety Equipment(p) Ltd</li>
                                <li><i className="fa fa-phone text-white" aria-hidden="true"></i>{('Call Us')}:  </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-end">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist compare-mobile">
                                <Link href={`/page/compare`}>
                                    <a><i className="fa fa-random" aria-hidden="true"></i>{'compare'}</a>
                                </Link>
                            </li>
                            <li className="mobile-wishlist">
                                <Link href={`/page/account/wishlist`}>
                                    <a><i className="fa fa-heart" aria-hidden="true"></i>{('wishlist')}</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {('My account')}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link href={`/page/account/login`} >
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`/page/account/register`} >
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopBar;