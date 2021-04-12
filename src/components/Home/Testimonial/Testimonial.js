import React from 'react';

const Testimonial = (props) => {
    const { quote, name, live, img } = props.testimonial;
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4 d-flex justify-content-center">
        //             <div className="card shadow-sm" style={{ border: '1px solid black', margin: '10px' }}>
        //                 <div className="card-body">
        //                     <p className="card-text text-center">{quote}</p>
        //                 </div>
        //                 <div className="card-footer d-flex align-items-center">
        //                     <img className="mx-3" src={img} alt="" width="60" />
        //                     <div>
        //                         <h6 style={{ color: '#6ACECE', fontWeight: 'bold' }}>{name}</h6>
        //                         <p className="m-0 text-secondary">{live}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4">
        //             <div className="card">
        //                 <div className="card-body">
        //                     <p>{quote}</p>
        //                 </div>
        //                 <div className="card-text"></div>
        //                 <div className="card-footer"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="card d-flex p-3 m-3 shadow">
            <div className="card-text text-secondary">{quote}</div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 ">
                        <img src={img} alt=""/>
                    </div>
                    <div className="col-md-8 align-self-center">
                        <div className="card-title" style={{ color: '#6ACECE', fontWeight: 'bold' }}>{name}</div>
                        <div className="card-text text-secondary">{live}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;