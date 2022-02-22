import React, {Component} from 'react';

class SectionAbout extends Component {
    render() {
        return (
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    {/* About Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-white">Về chúng tôi</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* About Section Content*/}
                    <div className="row">
                        <div className="col-md-4 ml-auto"></div>
                        <div className="col-md-4 mr-auto">
                            <div className="row">
                            <div className='col-md-6 ml-auto'>
                                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                                <p>Tiến</p>
                            </div>
                            <div className='col-md-6 ml-auto'>
                                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mr-auto"></div>
                    </div>
                    {/* About Section Button*/}
                    
                </div>
            </section>
        );
    }
}

export default SectionAbout;