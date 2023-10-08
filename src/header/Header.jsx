import './Header.css'
import Button from '../uikit/button/button'

export default function Header(props) {
    return (
        <header className="header">
            <section>
                <img src="" alt="LOGO" className="logo" />
            </section>
            <section>
                <nav className="navigation">
                    <Button changeComponent={()=>props.changeComponent(true)} text={'First Page'}/>
                    <Button changeComponent={()=>props.changeComponent(false)} text={'Second Page'}/>
                </nav>
            </section>
        </header>
    )
}