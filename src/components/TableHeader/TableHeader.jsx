import React from 'react';

const TableHeader = () => {
    return (
        <header className="table__header" >
            <div className="col colum1">№ задачи</div>
            <div className="col column2">Описание</div>
            <div className="col column3">Инструменты</div>
        </header>
    )
}

export default TableHeader;