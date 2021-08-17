import {useSelector} from "react-redux";

import {Button} from "antd";
import {PlusOutlined} from '@ant-design/icons';

import ToDoItem from "./components/ToDoItem";
import ModalForm from "./components/ToDoForm";

function ToDoPage({formType, setFormType}) {
    const {taskList} = useSelector(state => state.todoReducer)
    const rederTaskList = () => {
        return taskList.map((task, index) => {
            return (<ToDoItem key={index} task={task} toggleModal={setFormType}/>)
        });
    }

    return (
        <div>
            <Button type="primary" style={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "fixed",
                top: '5vh',
                right: '5vh'
            }}
                    onClick={() => setFormType('add')}>
                <PlusOutlined style={{fontSize: '32px'}}/>
            </Button>
            <div className="task-list">
                {rederTaskList()}
            </div>
            <ModalForm formType={formType} setFormType={setFormType}/>
        </div>
    );
}

export default ToDoPage;
