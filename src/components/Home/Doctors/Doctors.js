import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center mb-5"  style={{ color: '#6ACECE', fontWeight: 'bold' }}>Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;