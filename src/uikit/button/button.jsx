import './button.css'

export default function Button(props) {
    return <a className='link' onClick={() => props.changeComponent()}>{props.text}</a>
}