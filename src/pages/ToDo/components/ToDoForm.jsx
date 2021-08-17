import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {Form, Input, Modal} from "antd";

import {createTaskAction, editTaskAction} from "../../../redux/actions";

function ModalForm({formType, setFormType, task}) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (formType === 'edit') {
            form.setFieldsValue({
                name: task.name,
                description: task.description
            })
        } else {
            form.resetFields();
        }
    }, [formType])
    const handleSubmit = (value) => {
        if (formType === 'add') {
            dispatch(createTaskAction({
                id: uuidv4(),
                ...value
            }));
        } else {
            dispatch(editTaskAction({
                id: task.id,
                ...value
            }));
        }
        setFormType('');
    }

    return (
        <Modal title={(<h3>{formType === 'add' ? 'Add task' : 'Edit Task'}</h3>)} visible={!!formType}
               onOk={() => form.submit()}
               onCancel={() => setFormType('')}>
            <Form
                form={form}
                labelCol={{span: 6}}
                wrapperCol={{span: 18}}
                onFinish={handleSubmit}
            >
                <Form.Item name="name" label="Title"
                           rules={[{required: true, message: "Vui lòng nhập tên công việc"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="description" label="Description"
                           rules={[{required: true, message: "Vui lòng nhập mô tả công việc"}]}>
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalForm;