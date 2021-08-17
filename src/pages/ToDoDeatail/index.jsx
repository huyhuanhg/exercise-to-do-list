import {useDispatch, useSelector} from "react-redux";

import {Redirect} from "react-router-dom";
import {Button, Popover, Space} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

import history from "../../utils/history";

import ModalForm from "../ToDo/components/ToDoForm";

import {deleteTaskAction} from "../../redux/actions";

function ToDoDetailPage({match, formType, setFormType}) {

    const dispatch = useDispatch();

    const {taskList} = useSelector(state => state.todoReducer)
    const {id} = match.params;

    const taskDetail = taskList.find(task => task.id === id);

    if (!taskDetail) {
        return <Redirect to='/'/>
    } else {
        return (
            <>
                <Button type='primary'
                        onClick={() => history.push('/')}
                        style={{
                            margin: '50px 0 0 50px'
                        }}
                >
                    Back
                </Button>
                <div style={{
                    paddingTop: '8vh',
                    position: "relative"
                }}>
                    <div style={{
                        padding: '10px 40px 15px',
                        width: "60%",
                        margin: '0 auto',
                    }}>
                        <div>
                            <p><b>Task:</b> {taskDetail.name}</p>
                        </div>
                        <div>
                            <p><b>Description:</b> {taskDetail.description}</p>
                        </div>
                    </div>
                    <Space style={{
                        position: "absolute",
                        right: '150px',
                        top: '45%'
                    }}>
                        <Button onClick={() => setFormType('edit')}>
                            <EditOutlined/>
                        </Button>
                        <Popover title={`Bạn muốn xóa ${taskDetail.name}?`}
                                 trigger="click"
                                 content={
                                     (<Button danger
                                              style={{width: '50%', margin: '0 25%'}}
                                              onClick={() => {
                                                  dispatch(deleteTaskAction({
                                                      id: taskDetail.id
                                                  }))
                                                  history.push('/');
                                              }}>
                                         Xóa
                                     </Button>)}
                        >
                            <Button danger>
                                <DeleteOutlined/>
                            </Button>
                        </Popover>
                        <ModalForm task={taskDetail} formType={formType} setFormType={setFormType}/>
                    </Space>
                </div>
            </>
        );
    }
}

export default ToDoDetailPage;
