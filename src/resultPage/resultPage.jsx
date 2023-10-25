import { useState, useEffect } from 'react'
import { postDataToApi } from '../service/functions'
import './resultPage.css'




export default function ResultPage(props) {

    const [data, setData] = useState([])

    const postData = () => {
        postDataToApi(props.data)
            .then(res => {
                return res.json()
            })
            .then(data => setData(data))
    }

    useEffect(() => {
        postData()
    }, [])

    useEffect(() => console.log(data), [data])

    return (
        <>
            <table>
                <caption>
                    Таблица вашего энергопотребления
                </caption>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Название</th>
                        <th scope='col'>Потребление Вват в час</th>
                        <th scope='col'>Часы работы устройства</th>
                        <th scope='col'>Потребление Вват в день</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            if (item.name !== null) {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.volt_in_hour}</td>
                                        <td>{item.time}</td>
                                        <td>{item.volt_in_day}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="1">Общий результат</td>
                        <td colSpan="4">{data.map(el => {
                            if (el.name === null) {
                                return el.resultwatt
                            }
                        })}</td>
                    </tr>
                </tfoot>
            </table>


            <section className='result-text'>
                {data.map(el => {
                    if (el.name === null) {
                        return el.text
                    }
                })}

                
            </section>
        </>
    )
}