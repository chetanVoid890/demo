// Antd imports
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Row,
  Col
} from 'antd';
const { RangePicker } = DatePicker;
function onChange(value) {
  // console.log(`selected ${value}`);
}
function onSearch(val) {
  // console.log('search:', val);
}

function Income() {
  return (
    <>
      <Card bordered={false} className="criclebox">
        <Form name="expenseform" className="ExpenseForm Cform" style={{ marginBottom: "50px" }}>
          <Row gutter={[32, 24]}>

            {/* Select a Payment Mode */}
            <Col xs={24} md={12} xl={8} >
              <Form.Item name="payment_mode" label="Select a Payment Mode">
                <Radio.Group onChange={onChange} defaultValue="Mode1">
                  <Radio value='Mode1'>Mode 1</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            {/* Select a Client */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item name="client" label="Select Client">
                <Select size="large" showSearch placeholder="Select Client" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="Mehboob_kiler">Mehboob kiler</Select.Option>
                  <Select.Option value="Smart_boy">Smart boy</Select.Option>
                  <Select.Option value="Nassim">Nassim</Select.Option>
                  <Select.Option value="Aditya_Raj">Aditya Raj</Select.Option>
                  <Select.Option value="Black_spider">Black spider</Select.Option>
                  <Select.Option value="Gainshi">Gainshi</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={0} md={0} xl={8}></Col>

            {/* Week DatePicker */}
            <Col xs={24} md={12} xl={8} className="datepicker">
              <Form.Item label="Select Your Weekly">
                <RangePicker size="large" renderExtraFooter={() => 'extra footer'} />
              </Form.Item>
            </Col >
            <Col xs={0} md={12} xl={16}></Col>

            {/* Week Hours */}
            <Col xs={24} md={8} xl={6}><Form.Item label="Sunday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Monday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Tuesday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Wednesday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Thursday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Friday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Saturday"><Input size="large" placeholder="Enter Hours" /></Form.Item></Col>
            <Col xs={24} md={8} xl={6}><Form.Item label="Week Total Hours"><Input size="large" placeholder="Week Total Hours" disabled /></Form.Item></Col>

            {/* Currency */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item name="currency" label="Currency">
                <Select size="large" showSearch defaultValue="INR" placeholder="Currency" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="INR">INR</Select.Option>
                  <Select.Option value="Dollar">Dollar</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Hourly Rate */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Hourly Rate" name="hourly_rate"><Input size="large" /></Form.Item>
            </Col>

            {/* Form Button */}
            <Col xs={24}>
              <Button className='ButtonStyle1' type="submit" size='large' >Submit</Button>
            </Col>

            {/* This Week Total Income $ */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="This Week Total Income ($)"><Input size="large" placeholder="Total Income" disabled /></Form.Item>
            </Col>

            {/* This Week Total Income ₹ */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="This Week Total Income (₹)"><Input size="large" placeholder="Total Income" disabled /></Form.Item>
            </Col>

          </Row>
        </Form>
      </Card>
      <br></br>
      <Card bordered={false} className="criclebox">
        <Form name="expenseform" className="ExpenseForm Cform" style={{ marginBottom: "50px" }}>
          <Row gutter={[32, 24]}>

            {/* Select a Payment Mode */}
            <Col xs={24} md={12} xl={8} >
              <Form.Item name="payment_mode" label="Select a Payment Mode">
                <Radio.Group onChange={onChange} defaultValue="Mode2">
                  <Radio value='Mode2'>Mode 2</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            {/* Select a Client */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item name="client" label="Select Client">
                <Select size="large" showSearch placeholder="Select Client" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="Mehboob_kiler">Mehboob kiler</Select.Option>
                  <Select.Option value="Smart_boy">Smart boy</Select.Option>
                  <Select.Option value="Nassim">Nassim</Select.Option>
                  <Select.Option value="Aditya_Raj">Aditya Raj</Select.Option>
                  <Select.Option value="Black_spider">Black spider</Select.Option>
                  <Select.Option value="Gainshi">Gainshi</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={0} md={0} xl={8}></Col>

            {/* Week DatePicker */}
            <Col xs={24} md={12} xl={8} className="datepicker">
              <Form.Item label="Select Your Weekly">
                <DatePicker size="large" picker="week" />
              </Form.Item>
            </Col >

            {/* Enter Amount in $ */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Enter Amount in ($)"><Input size="large" placeholder="Income" /></Form.Item>
            </Col>

            {/* Enter Amount in ₹ */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Enter Amount in (₹)"><Input size="large" placeholder="Income" /></Form.Item>
            </Col>

            {/* Form Button */}
            <Col xs={24}>
              <Button className='ButtonStyle1' type="submit" size='large'>Submit</Button>
            </Col>

          </Row>
        </Form>
      </Card>
    </>
  );
}

export default Income;