import './Header.css'
import Button from '../uikit/button/button'

export default function Header(props) {
    return (
        <header className="header">
            <div className='Logo'>
                <img src="../assets/logo.png" alt="LOGO" className="logo" />
                <p>Сила энергии в гармонии с природой.</p>
            </div>

            <section className='nav'>
                <nav className="navigation">
                    <Button func={() => props.changeComponent(0)} text={'О нас'} />
                    <Button func={() => props.changeComponent(1)} text={'Рассчитать'} />
                </nav>
            </section>
        </header>
    )
}