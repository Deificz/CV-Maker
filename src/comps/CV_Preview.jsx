import Editor from './CV_Editor.jsx'
import '../styles/preview.css'
export default function Preview(){
    
    return (
        <>
        <section id="preview-section">
        <div id = "preview-body">
            <h1 className='lbl-name'>John <span>Doe</span></h1>
            <h2 className='lbl-contact'>Contact</h2>
            <h3 className='lbl-email'>john_doe@email.com</h3>
            <h3 className='lbl-phone'>63912345678</h3>

        <div className="line"></div>

            <div className="lbl-educ">
                <h2 className='lbl-educ'>Education</h2>
                <h3 className='lbl-school'>University of Sheesh</h3>
                <h3 className='lbl-program'>BS Computer Science</h3>
                <h3 className='lbl-graduation'>2022/01/04</h3>
            </div>

        <div className="line"></div>

            <div className="lbl-exp">
                <h2 className='lbl-exp'>Work Experience</h2>
                <h3 className='lbl-company'>Company A</h3>
                <h3 className='lbl-program'>Software Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, magna vitae auctor eleifend, massa massa pellentesque tellus, et consequat massa augue porta ipsum. Aliquam iaculis volutpat odio, eu pharetra massa elementum quis. Cras tristique aliquet erat, ac interdum enim malesuada sit amet. Cras elementum risus quis porta fringilla.</p>
                <h3 className='lbl-span'>2022/03/05 - <span>2023/02/03</span></h3>
            </div>
        </div>

        <button className='submit-btn'>Save</button>

        </section>
        </>
    )
}