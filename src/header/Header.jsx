import './Header.css'
import Button from '../uikit/button/button'

export default function Header(props) {
    return (
        <header className="header">
            <img src="../assets/logo.png" alt="LOGO" className="logo" />
            <section className='nav'>
                <nav className="navigation">
                    <Button func={() => props.changeComponent(true)} text={'First Page'} />
                    <Button func={() => props.changeComponent(false)} text={'Second Page'} />
                </nav>
            </section>
        </header>
    )
}