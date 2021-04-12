import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5 text-white" style={{zIndex: '1'}}>
                        <h5>APPOINTMENT</h5>
                        <h1 className='my-4'>Make an appointment <br/>Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, harum modi mollitia eaque earum consequatur explicabo reprehenderit aspernatur eius assumenda?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;