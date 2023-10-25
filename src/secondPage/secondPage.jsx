import { useState, useEffect } from 'react';
import Button from '../uikit/button/button';
import './secondPage.css'
import { getDataFromApi } from '../service/functions'


export default function SecondPage(props) {

    const [array, setArray] = useState([]);

    const [arr, setArr] = useState([])


    const getData = () => {
        getDataFromApi().then(response => {
            return response.json()
        }).then((data) => {
            setArr(data)
        })
    }

    const postData = (data) => {
        props.getDat(data)
        props.changeComponent(3)
    }

    useEffect(() => getData(), [])

    const changeArr = (data, status) => {
        if (status) {
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
    }

    return (
        <>
            <section className='section' >
                <h2>Список электротехники</h2>
                <ul className='list'>
                    {
                        arr.map((item, index) => {
                            return <li className='item' key={index}><ListItem name={item.name} volt_in_hour={item.volt_in_hour} time={item.time} id={index} changeArr={changeArr} /></li>
                        })
                    }
                </ul>
            </section>

            <section className='button'>
                {
                    array.length > 0 ? <Button text={'Расчитать'} func={() => postData(array)} /> : <Button text={'Рассчитать'} />
                }
            </section>
        </>
    )
}

function ListItem({ name, changeArr, volt_in_hour, time, id }) {

    const [field, setField] = useState(false);
    const [kVat, setKvat] = useState(`${volt_in_hour}`);
    const [postTime, setTime] = useState(`${time}`);


    useEffect(() => {
        if (kVat.match(/^\d+$/) && postTime.match(/^\d+$/)) {
            changeArr({ id, name, volt_in_hour: Number(kVat), time: Number(postTime) }, field)
        }
    }, [kVat, postTime, field])

    const change = () => {
        setField((field) => !field);
    }

    return (
        <article className='article'>
            <section>
                <input type="checkbox" id={name} className='custom-checkbox' onClick={() => change()} />
                <label htmlFor={name}>{name}</label>
            </section>

            {field ?
                <section className='fields'>
                    <label htmlFor="potreb" >Потребление в ваттах</label>
                    <input type="text" placeholder='Ватт' id='potreb' value={kVat} onChange={(e) => setKvat(e.target.value)} />
                    <label htmlFor="time">Часы работы устройства</label>
                    <input type="text" placeholder='Время' id='time' value={postTime} onChange={(e) => setTime(e.target.value)} />
                </section> : null}
        </article>
    )
}