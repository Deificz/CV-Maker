import Editor from '../Editor/CV_Editor.jsx'
import '../../styles/preview.css'
import Personal from '../Editor/Personal_info.jsx'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
    
export default function Preview({firstName, lastName, email, phone,school, program, graduation,
                                companyA, positionA, responsibilityA, startA, endA, 
                                companyB, positionB, responsibilityB, startB, endB}){

    const downloadPDF = () => {
        const container = document.getElementById('preview-body');

        const clientWidth = container.clientWidth;
        const computedStyles = getComputedStyle(container);
        const paddingLeft = parseFloat(computedStyles.paddingLeft);
        const paddingRight = parseFloat(computedStyles.paddingRight);
        const width = clientWidth + paddingLeft + paddingRight;
        
        
        let pdf = new jsPDF('p', 'pt', 'letter');
        let pWidth = pdf.internal.pageSize.width;
        let margin = -2; 
        let scale = (pWidth - margin * 2) / (width - 135);
        pdf.setFont('Helvetica');
        pdf.html(document.getElementById('preview-body'), {
            x: margin,
            y: margin,
            html2canvas: {
                scale: scale,
            },
            callback: function () {
                pdf.save('Resume.pdf');
            }
        });
    }
    return (
        <>
        <section id="preview-section">
        <div id = "preview-body">
        
            {(firstName)? <h1 className='lbl-name'>{firstName} <span>{lastName}</span></h1> : <h1 className='tip'>Enter your Name</h1>}
            <h2 className='lbl-contact'>Contact</h2>
            {(email) ? <h3 className='lbl-email'>{email}</h3> : <h3 className='tip'>Enter Email Address</h3>}
            {(phone) ? <h3 className='lbl-phone'>{phone}</h3> : <h3 className='tip'>Enter Phone Number</h3>}

            <div className="line"></div>

            <div className="lbl-educ">
                <h2 className='lbl-educ'>Education</h2>
                {(school) ?
                <>
                <h3 className='lbl-school'>{school}</h3>
                <h3 className='lbl-program'>{program}</h3>
                <h3 className='lbl-graduation'>{graduation}</h3> 
                </> 
                          : 
                <h3 className='tip'>Add Education</h3>}
            </div>

            <div className="line"></div>

            <h2 className='lbl-exp'>Work Experience</h2>
            {(companyA) ? 
                <>
                <h3 className='lbl-company'>{companyA}</h3>
                <h3 className='lbl-program'>{positionA}</h3>
                <p>{responsibilityA}</p>
                { (startA) ? <h3 className='lbl-span'>{startA} - <span>{endA}</span></h3> : <h3></h3>}
                </>
                       :
                 <h3 className='tip'>Add Work Experience</h3>
           }

            <div className="lbl-exp">
                <h3 className='lbl-company'>{companyB}</h3>
                <h3 className='lbl-program'>{positionB}</h3>
                <p>{responsibilityB}</p>
               { (startB) ? <h3 className='lbl-span'>{startB} - <span>{endB}</span></h3> : <h3></h3>}
            </div>

        </div>
        
        <button className='submit-btn' onClick={downloadPDF}>Download PDF</button>

        </section>
        </>
    )
}