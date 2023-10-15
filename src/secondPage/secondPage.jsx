import { useState, useEffect } from 'react';
import Button from '../uikit/button/button';
import './secondPage.css'


export default function SecondPage(props) {

    const [array, setArray] = useState([]);

    const arr = ['холодос', 'condёr', 'pylesos'];

    const changeArr = (data, status) => {
        if (array.map(el => el.id).includes(data.id)) {
            if (status) {
                setArray(array => [...array.filter(item => item.id !== data.id), data])
            } else {
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
                            return <li className='item' key={index}><ListItem dataName={item} id={index} changeArr={changeArr} /></li>
                        })
                    }
                </ul>
            </section>

            <section className='button'>
                {
                    array.length > 0 ? <Button text={'Расчитать'} func={() => props.changeComponent(3)} /> : <Button text={'Расчитать'} />
                }
            </section>
        </>
    )
}

function ListItem({ dataName, changeArr, id }) {

    const [field, setField] = useState(false);
    const [kVat, setKvat] = useState('');
    const [time, setTime] = useState('');


    useEffect(() => {
        if (kVat.match(/^\d+$/) && time.match(/^\d+$/)) {
            changeArr({ id, dataName , kVat: Number(kVat), time: Number(time)}, field)
        }
    }, [kVat, time, field])

    const change = () => {
        setField((field) => !field);
    }

    return (
        <article className='article'>
            <section>
                <input type="checkbox" id={dataName} className='custom-checkbox' onClick={() => change()} />
                <label htmlFor={dataName}>{dataName}</label>
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