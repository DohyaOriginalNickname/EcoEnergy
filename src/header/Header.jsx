import './Header.css'

export default function Header(props) {
    return (
        <header className="header">
            <section>
                <img src="" alt="LOGO" className="logo" />
            </section>
            <section>
                <nav className="navigation">
                    <a className='link' onClick={()=> props.changeComponent(true)}>First page</a>
                    <a className='link' onClick={()=> props.changeComponent(false)}>Second page</a>
                </nav>
            </section>
        </header>
    )
}