import Header from './Header.jsx'
import Editor from './CV_Editor.jsx'
import Preview from './CV_Preview.jsx'

export default function App() {

    return(
        <>
        <Header/>
        <section id='main-body'>
            <Editor />
            <Preview />
        </section>
        </>
    )
}