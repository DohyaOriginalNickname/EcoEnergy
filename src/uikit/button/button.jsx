import './button.css'

export default function Button(props) {
    return <a className='link' onClick={() => props.func()}>{props.text}</a>
}