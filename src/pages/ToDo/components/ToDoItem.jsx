import {Button, Space} from "antd";
import {EyeOutlined} from "@ant-design/icons";

import history from "../../../utils/history";

function ToDoItem({task}) {
    return (
        <div style={{
            paddingTop: '8vh'
        }}>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                padding: '10px 40px 15px',
                width: "60%",
                margin: '0 auto',
                borderBottom: '1px solid rgba(0, 0, 0, .2)'
            }}>
                <div>
                    <p><b>Task:</b> {task.name}</p>
                </div>
                <Space>
                    <Button type={'primary'} onClick={() => history.push(`/detail/${task.id}`)}>
                        <EyeOutlined/>
                    </Button>
                </Space>
            </div>
        </div>
    )
}

export default ToDoItem;