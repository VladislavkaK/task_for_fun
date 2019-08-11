import React, { useState, useEffect } from 'react';
import { Button, Modal, Table } from '../../components';
import { connect } from 'react-redux';
import { actionGetData }  from '../../actions/actionGetData';
import { actionDeleteData } from '../../actions/actionDeleteData';
import { actionCreateData } from '../../actions/actionCreateData';

import './styles/style.scss';

function App({ getData, data, lengthData, success, deleteData, isDelete, createData, editData }) {
  const [visible, setVisible] = useState(false);

  // componentDidMount
  useEffect(() => {
      getData();
  }, [])

  const onHandleModalVisible = () => {
    setVisible(true);
  }

  return (
    <div className="App">
      <main className="container">
          <section className="left-container">
              <div className="item">
                  <h1>Список задач</h1>
              </div>
          </section>
          <section className="right-container">
              <div className="item">
                  <Button name="Добавить" color="green" onClick={onHandleModalVisible} />
              </div>
          </section>
          {visible && <Modal setVisible={setVisible} createData={createData} />}
      </main>
      <div className="content__body" >
          <Table data={data} deleteData={deleteData} lengthData={lengthData} editData={editData}  />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {

    return {
        data: state.main.data,
        lengthData: state.main.length,
        success: state.main.success,
        isDelete: state.main.isDelete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actionGetData()),
        deleteData: (id) => dispatch(actionDeleteData(id)),
        createData: (title) => dispatch(actionCreateData(title)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
