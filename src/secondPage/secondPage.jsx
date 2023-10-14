import { useState ,useEffect } from 'react';
import Button from '../uikit/button/button';
import './secondPage.css'


export default function SecondPage(props) {

    const [array, setArray] = useState([]);
    const [state, setState] = useState(false);

    const arr = ['холодос', 'condёr', 'pylesos'];

    const func = () => setState(state => !state);
    const changeArr = (data, status) => {
        if (array.map(el => el.id).includes(data.id)) {
            if (status) {
                setArray(array => [...array.filter(item => item.id !== data.id), data])
            }else{
                setArray(array => [...array.filter(item => item.id !== data.id)])
            }
        } else {
            setArray(array => [...array, data])
        }
    }

    useEffect(() => console.log(array), [array])
    return (
        <>
            <section>
                <p>List of apparats</p>
                <ul className='list'>
                    {
                        arr.map((item, index) => {
                            return <li className='item' key={index}><ListItem dataItem={item} id={index} changeArr={changeArr} status={state} /></li>
                        })
                    }
                </ul>
            </section>

            <section className='button'>
                <Button text={'Расчитать'} func={()=>props.changeComponent(3)}/>
            </section>
        </>
    )
}

function ListItem({ dataItem, changeArr, id}) {

    const [field, setField] = useState(false);
    const [kVat, setKvat] = useState('');
    const [time, setTime] = useState('');


    useEffect(() => {
        console.log(field);
        if (kVat.length > 0 && time.length > 0) {
            changeArr({ id, kVat, time }, field)
        }
    }, [kVat, time, field])

    const change = () => {
        setField((field) => !field);
    }

    return (
        <article className='article'>
            <section>
                <input type="checkbox" id={dataItem} className='custom-checkbox' onClick={() => change()} />
                <label htmlFor={dataItem}>{dataItem}</label>
            </section>

            {field ?
                <section className='fields'>
                    <label htmlFor="potreb" >Потребление в киловатах</label>
                    <input type="text" placeholder='кВват' id='potreb' onChange={(e) => setKvat(e.target.value)} />
                    <label htmlFor="time">Часы работы устройства</label>
                    <input type="text" placeholder='Время' id='time' onChange={(e) => setTime(e.target.value)} />
                </section> : null}
        </article>
    )
}