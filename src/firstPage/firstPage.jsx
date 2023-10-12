import Button from '../uikit/button/button'
import './firstPage.css'

export default function FirstPage(props) {
    return (
        <>
            <section className='title-text'>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
                <p>dsfsdfsdsfdsfsfd</p>
            </section>

            <section className='button'>
                <Button func={() => props.changeComponent(false)} text={'Start calculate'} />
            </section>
        </>
    )
}