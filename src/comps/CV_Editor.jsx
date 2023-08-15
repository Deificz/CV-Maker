import Personal from './Personal_info'
import Education from './Education_info'
import Experience from './Exp_info'
import '../styles/editor.css'

export default function Editor() {

    return(
        <section id='editor-section'>
            <div className='personal-info'>
                <Personal />
            </div>
            <div className='educ-info'>
                <Education />
            </div>
            <div className='exp-info'>
                <Experience />
            </div>
        </section>
    )
}