import Personal from './Personal_info'
import Education from './Education_info'
import Experience from './Exp_info'
import '../styles/editor.css'

export default function Editor() {
    const {renderPersonal, firstName, lastName, email, phone} = Personal();
    const {renderEduc, school, program, graduation } = Education();
    const {renderExp, companyA, positionA, responsibilityA, startA, endA, 
           companyB, positionB, responsibilityB, startB, endB} = Experience();

    return{
        firstName, 
        lastName, 
        email, 
        phone,
        school,
        program,
        graduation,
        companyA, positionA, responsibilityA, startA, endA, 
        companyB, positionB, responsibilityB, startB, endB,
        renderEditor: (
        <section id='editor-section'>
            <div className='personal-info'>
                {renderPersonal}
            </div>
            <div className='educ-info'>
                {renderEduc}
            </div>
            <div className='exp-info'>
                {renderExp}
            </div>
        </section>
        )
    }
}