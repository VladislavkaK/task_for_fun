import React, { useState } from 'react';
import { Button, Input } from '../../components';
import './styles/index.scss';

const Modal = ({ setVisible }) => {
    const [value, setValue] = useState('');

    const onHandleChange = (event) => {
        setValue(event.target.value)
    }

    const onHandleCLose = () => {
        setVisible(false);
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
                    <Input type="text" name="add_data" label="Краткое описание" value={value} onChange={onHandleChange} />   
                </div>
                <div className="modal__window__content__footer" >
                    <div className="back" >
                        <Button name="Вернуться в список" color="blue" onClick={onHandleCLose} />
                    </div> 
                    <div className="add" >
                        <Button name="Создать" color="blue" />
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Modal;