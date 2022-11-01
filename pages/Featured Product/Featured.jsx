import React from 'react'

// product Images
import img1 from "../../Assets/head protection/Untitled-1.png";
import img2 from "../../Assets/head protection/Untitled-1.png";
import img3 from "../../Assets/head protection/Untitled-1.png";
import img4 from "../../Assets/head protection/Untitled-1.png";
import img5 from "../../Assets/head protection/Untitled-1.png";
import img6 from "../../Assets/head protection/Untitled-1.png";
import img7 from "../../Assets/head protection/Untitled-1.png";
import img8 from "../../Assets/head protection/Untitled-1.png";


export default function Featured() {
  return (
    <div>
            <section classNameName="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".oranges">Head Protection</li>
                                    <li data-filter=".fresh-meat">Head Protection</li>
                                    <li data-filter=".vegetables">Feet Protection</li>
                                    <li data-filter=".fastfood">Fire Protection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" >
                                <img src={img1} alt="" style={{width:"35%"}}/>
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" >
                                    <img src={img2} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" >
                                <img src={img3} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" >
                                <img src={img4} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg={img1}>
                                <img src={img5} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="">
                                <img src={img6} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-7.jpg">
                                <img src={img7} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-8.jpg">
                                <img src={img8} alt="" />
                                    <ul className="featured__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle</a></h6>
                                    <h5>Rs:1500</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
