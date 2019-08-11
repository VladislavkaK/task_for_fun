import React, { useState } from 'react';
import { Button, Input } from '../../components';
import { Link } from 'react-router-dom';

import './styles/index.scss';

const Modal = ({ setVisible, createData }) => {
    const [value, setValue] = useState('');
    const [showError, setShowError] = useState(false);

    const onHandleChange = (event) => {
        setValue(event.target.value)
    }

    const onHandleCLose = () => {
        setVisible(false);
    }

    const onHandleCreate = () => {
        if (value !== '')  {
            createData(value);
            setVisible(false);
        } else if (value === '') {
            setShowError(true);
        }
        
    }

    return (
        <div className="modal__window">
            <div className="modal__window__content" >
                <div className="modal__window__content__header" >
                    <div></div>
                    <div className="close" >
                        <Button name="Закрыть" color="red" onClick={onHandleCLose} />
                    </div>
                </div>
                <div className="modal__window__content__body" >
                    <Input type="text" name="add_data" label="Краткое описание" value={value} onChange={onHandleChange} showError={showError} />
                </div>
                <div className="modal__window__content__footer" >
                    <div className="back" >
                        <Button name="Вернуться в список" color="blue" onClick={onHandleCLose} />
                    </div> 
                    <div className="add" >
                        <Link to={{pathname: '/'}} >
                            <Button name="Создать" color="blue" onClick={onHandleCreate} />
                        </Link>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Modal;