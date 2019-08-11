import React, { useState } from 'react';
import { Button, Input } from '../../components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionDeleteData } from '../../actions/actionDeleteData';
import { actionEditData } from '../../actions/actionEditData';

import './styles/style.scss';

const EditPage = (props) => {
    
    const { id, title } = props.location.state;
    const [value, setValue] = useState(title);

    const onHandleDelete = () => {
        props.deleteData(id)
    }

    const onHandleChange = (event) => {
        setValue(event.target.value)
    }

    const onHandleEdit = () => {
        props.editData(id, value);
    }

    return (
        <div className="page__edit" >
            <div className="page__edit__header">
                <section className="left__container">
                    <div className="item">
                        <h1>Задача №{id}</h1>
                    </div>
                </section>
                <section className="right__container">
                    <div className="item">
                        <Link to={{pathname: '/'}}>
                            <Button name="Удалить" color="red" onClick={onHandleDelete} />
                        </Link>
                    </div>
                </section>
            </div>
            <div className="page__edit__content" >
                <Input type="text" name="edit_data" label="Краткое описание" value={value} onChange={onHandleChange}  />
            </div>
            <div className="page__edit__footer" >
                <section className="left__container">
                    <div className="item">
                        <Link to={{pathname: '/'}} >
                            <Button name="Вернуться к списку" color="blue" />
                        </Link>
                    </div>
                </section>
                <section className="right__container">
                    <div className="item">
                        <Link to={{pathname: '/'}}>
                            <Button name="Сохранить" color="blue" onClick={onHandleEdit} />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteData: (id) => dispatch(actionDeleteData(id)),
        editData: (id, title) => dispatch(actionEditData(id, title))
    }
}

export default connect(null, mapDispatchToProps)(EditPage);