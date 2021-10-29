import React from 'react'
import SkillBar from 'react-skillbars';

const skills = [
    {type: "UI/UX", level: 85},
    {type: "Ideas", level: 75},
    {type: "Design", level: 55},
  ];
const Functionality = () => {
    return (
        <>
             <section id="about_progressbar" className="ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about_progressbar_content">
                        <h2>Functionality meets perfection</h2>
                        <p>In today’s day and age, one cannot underestimate the importance of design, the art of
                            creating striking visuals to move and captivate your audience. And as the world becomes more
                            and more digitized with each passing second, the importance of graphic design has been
                            rocketed to the top.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="custom-progress m-t-40">
                    <SkillBar skills={skills} height={15}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Functionality
