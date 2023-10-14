import './Header.css'
import Button from '../uikit/button/button'

export default function Header(props) {
    return (
        <header className="header">
            <img src="../assets/logo.png" alt="LOGO" className="logo" />
            <section className='nav'>
                <nav className="navigation">
                    <Button func={() => props.changeComponent(0)} text={'First Page'} />
                    <Button func={() => props.changeComponent(1)} text={'Second Page'} />
                </nav>
            </section>
        </header>
    )
}