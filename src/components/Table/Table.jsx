import React from 'react';
import { Button } from '../../components';

import './styles/style.scss';

const Table = ({ data, deleteData, lengthData }) => {
    
    let content;

    if (data !== undefined) {
        content = data.map((value, index) => {
            const { id, title } = value;

            const onHandleDelete = (id) => {
                deleteData(id);
            }

            return (
                <div className="table__row" key={index}>
                    <div className="col">{id}</div>
                    <div className="col">{title}</div>
                    <div className="col tools">
                        <div className="button__container" >
                            <div className="button_edit" >
                                <Button name="Редактировать" color="green" />
                            </div>
                            <div className="button_delete" >
                                <Button name="Удалить" color="red" onClick={() => onHandleDelete(id)} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    } 

    return (
        <>
            {lengthData > 0 && <section className="table">
                <header className="table__header" >
                    <div className="col colum1">№ задачи</div>
                    <div className="col column2">Описание</div>
                    <div className="col column3">Инструменты</div>
                </header>
                {content}
            </section>}
            {lengthData === 0 && <h3>н/д</h3>}
        </>
    )
}

export default Table;