import './resultPage.css'

export default function ResultPage() {


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
                        <th scope='col'>Потребление Вват</th>
                        <th scope='col'>Часы работы устройства</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="1">Общий результат</td>
                        <td colSpan="3">Ты пидор</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}