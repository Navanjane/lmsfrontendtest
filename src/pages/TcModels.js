import React from 'react';
import '../assets/css/tcmoels.css';
import ModelsCourseDescri from '../components/ModelsCourseDescri';
import TcOneModel from '../components/TcOneModel';

export default function TcModels() {

    return (
        <div>
            <div className="models">
                <div className="md_all_models">
                    <div className="models_en_nav">
                        <ul>
                            <li><i className="fas fa-key"></i>Generate Enrollment Keys</li>
                            <li><i className="fas fa-key"></i>Activate Enrollment Keys</li>
                            <li><i className="fas fa-key"></i>View All Enrollment Keys</li>
                        </ul>
                    </div>
                    <div className="md_models">
                        <div className="cr_models">
                            <button><i className="fas fa-plus-circle"></i>Create Model</button>
                        </div>
                        <div className="al_models">
                           <TcOneModel/>
                           <TcOneModel/>
                        </div>
                    </div>
                </div>
                <div className="md_course_desc">
                    <ModelsCourseDescri/>
                </div>
            </div>
        </div>
    )
}
