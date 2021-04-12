import React from 'react';
import features from '../../../images/features.png';
import './FeaturedService.css';

const FeaturedService = () => {
    return (
        <div className="features-services pb- pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid d-flex justify-content-center" src={features} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center ">
                        <h1>Exceptional Dental <br/>Care, on Your Terms</h1>
                        <p className='mt-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas neque sequi est, maxime animi. Rem, voluptatibus quasi! Sapiente, minus! Deleniti sequi, nostrum vero ducimus repudiandae pariatur. Illo cum mollitia beatae, harum unde consequuntur cupiditate expedita officiis non suscipit voluptates architecto illum natus repellat minima enim nesciunt, dolorum quis vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus qui provident vel deserunt recusandae, enim nostrum modi officia vero impedit animi dolore exercitationem aliquid tenetur perferendis neque. Iusto ratione quod eum consectetur nesciunt reiciendis nisi iste illum cum, incidunt, magni possimus! Quisquam minima rem quaerat. Quis tenetur officia laboriosam libero!</p>
                        <button className='btn btn-success mt-5'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;