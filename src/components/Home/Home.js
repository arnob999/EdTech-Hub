import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css"
const Home = () => {
    return (
        <div className="App">

            <Carousel className="w-100">
                <Carousel.Item>
                    <div className=" mb-3 container mt-5">
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-6">
                                <img
                                    src="https://appinventiv.com/wp-content/uploads/sites/1/2020/06/edtech-business-Model.png"
                                    className="w-100 carouselPic"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title my-3 fw-bolder">
                                        Ed-Tech?
                                    </h1>
                                    <p className="card-text">
                                        EdTech, short for education technology, refers to new technological implementations in the classroom. In-classroom tablets, interactive projection screens and whiteboards, online content delivery, and MOOCs are all examples of EdTech.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className=" mb-3 container mt-5">
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-6">
                                <img
                                    src="https://nces.ed.gov/resources/edtechequity/images/fwstate-1.png"
                                    className="w-100 carouselPic"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title my-3 fw-bolder">
                                        Why Ed-Tech is the future
                                    </h1>
                                    <p className="card-text">
                                        For certain types of curriculum, EdTech can facilitate professional training or more formal education, even for full-time workers. Rather than traveling to a classroom to attend a class at a set time, learners in today's virtual world often have the option of attending online classes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className=" mb-3 container mt-5">
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-6">
                                <img
                                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/e-learning_digital_education_1200x768.jpeg"
                                    className="w-100 carouselPic"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h1 className="card-title my-3 fw-bolder">
                                        Vast Resources because of Ed-tech
                                    </h1>
                                    <p className="card-text">
                                        What makes an EdTech successful?
                                        Solve a real student problem and not obsess over technology. Focus on content that is 10X of what competitors provide. Provide some human interaction to handhold them. Build a brand based on the trust that students can depend on you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;