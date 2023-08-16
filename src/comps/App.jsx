import Header from './Header.jsx'
import Editor from './CV_Editor.jsx'
import Preview from './CV_Preview.jsx'

export default function App() {
    const {renderEditor, firstName, lastName, email, phone, 
           school, program, graduation, companyA, positionA, 
           responsibilityA, startA, endA, companyB, positionB, 
           responsibilityB, startB, endB} = Editor();

    return(
        <>
        <Header/>
        <section id='main-body'>
            {renderEditor}
            <Preview {...{firstName,lastName,email,phone,school, program, graduation, 
                          companyA, positionA, responsibilityA, startA, endA, 
                          companyB, positionB, responsibilityB, startB, endB}} />
        </section>
        </>
    )
}