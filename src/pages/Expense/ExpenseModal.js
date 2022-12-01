import React from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    DatePicker,
    Select,
    Input,
    Button
} from 'antd';

//  For model

export default function ExpenseModal() {
    const { TextArea } = Input;

    function onChange(value) {
        // console.log(`selected ${value}`);
    }
    function onSearch(val) {
        // console.log('search:', val);
    }

    return (
        <Card bordered={false} className="mb-24">
            <Form name="expenseform" className="ExpenseForm Cform">
                <Row gutter={[32, 0]} >
                    <Col xs={24} md={12} xl={12} className="datepicker">
                        <Form.Item label="Select Your Payment Date">
                            <DatePicker size="large" />
                        </Form.Item>
                    </Col>
                    {/* <Col xs={0} md={12} xl={16}></Col> */}
                    <Col xs={24} md={12} xl={12} >
                        <Form.Item label="Whom I Made Payment">
                            <Select size="large" showSearch placeholder="Select a person" optionFilterProp="children"
                                onChange={onChange} onSearch={onSearch}
                            >
                                <Select.Option value='Arpita'>Arpita</Select.Option>
                                <Select.Option value='Bhavika'>Bhavika</Select.Option>
                                <Select.Option value='Chirag'>Chirag</Select.Option>
                                <Select.Option value='Harshad'>Harshad</Select.Option>
                                <Select.Option value='Hetika'>Hetika</Select.Option>
                                <Select.Option value='Mayuri'>Mayuri</Select.Option>
                                <Select.Option value='Rahul'>Rahul</Select.Option>
                                <Select.Option value='Ronak'>Ronak</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item label="Purpose of the Payment">
                            <Select size="large" showSearch placeholder="Select a person" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                                <Select.Option value='Salary'>Salary</Select.Option>
                                <Select.Option value='ExhiByte_Assets'>ExhiByte_Assets</Select.Option>
                                <Select.Option value='Office_Party'>Office_Party</Select.Option>
                                <Select.Option value='Lightbill'>Lightbill</Select.Option>
                                <Select.Option value='Rent'>Rent</Select.Option>
                                <Select.Option value='Maintanance'>Maintanance</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item label="Paid BY">
                            <Select size="large" showSearch placeholder="Select a person" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                                <Select.Option value='ExhiByte'>ExhiByte</Select.Option>
                                <Select.Option value='Neelam'>Neelam</Select.Option>
                                <Select.Option value='Dipti'>Dipti</Select.Option>
                                <Select.Option value='Ruta'>Ruta</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="payment_mode" label="Payment Mode">
                            <Select size="large" showSearch defaultValue="Cash" placeholder="Payment Mode" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                                <Select.Option value="Cash">Cash</Select.Option>
                                <Select.Option value="G-Pay">G-Pay</Select.Option>
                                <Select.Option value="Bank Transfer">Bank Transfer</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="currency" label="Currency">
                            <Select size="large" showSearch defaultValue="INR" placeholder="Currency" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                                <Select.Option value="INR">INR</Select.Option>
                                <Select.Option value="Dollar">Dollar</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="money" label="Amout">
                            <Input size="large" type={'number'} min={1} placeholder="₹100" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name={['user', 'notes']} label="Special Notes">
                            <TextArea rows={2} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Button className='ButtonStyle1' type="submit" size='large'>Submit</Button>
                    </Col>

                </Row>
            </Form>
        </Card>
    )
}
