import imgLogo from '../assets/logo.png'

export default function Header() {

    return(
        <section id="header">
            <div className="logo">
                <img className="img-logo" src={imgLogo} alt="" />
                <h1>Resume Builder<span> by Deificz</span></h1>
            </div>
        </section>
    )
}