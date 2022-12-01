// Antd imports
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Col
} from 'antd';
import CountrySelector from '../components/CountrySelector';
function onChange(value) {
  // console.log(`selected ${value}`);
}
function onSearch(val) {
  // console.log('search:', val);
}

function Client() {
  return (
    <>
      <Card bordered={false} className="criclebox mb-24">
        <Form name="clientform" className="ClientForm Cform">
          <Row gutter={[32, 24]}>

            {/* Client Name */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Enter Client Name"><Input size="large" placeholder="Client Name" /></Form.Item>
            </Col>

            {/* Project Kick Off Date */}
            <Col xs={24} md={12} xl={8} className="datepicker">
              <Form.Item label="Project Kick Off Date">
                <DatePicker size="large" />
              </Form.Item>
            </Col>

            {/* Client Country */}
            <Col xs={24} md={12} xl={8} >
              <Form.Item label="Client Country">
                <CountrySelector />
              </Form.Item>
            </Col>

            {/* Account Name */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Account Name">
                <Select size="large" showSearch placeholder="Select Your Account" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value='ExhiByte'>ExhiByte</Select.Option>
                  <Select.Option value='Neelam'>Neelam</Select.Option>
                  <Select.Option value='Dipti'>Dipti</Select.Option>
                  <Select.Option value='Ruta'>Ruta</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Select Platform */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Select Platform">
                <Select size="large" showSearch placeholder="Select Platform" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value='upwork'>Upwork</Select.Option>
                  <Select.Option value='linkedIn'>LinkedIn</Select.Option>
                  <Select.Option value='job_portal'>Job Portal</Select.Option>
                  <Select.Option value='direct_email'>Direct Email</Select.Option>
                  <Select.Option value='the_dots'>The Dots</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Bid Type */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Bid Type">
                <Select size="large" showSearch placeholder="Bid Type" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="connection">Connection</Select.Option>
                  <Select.Option value="inmail">InMail</Select.Option>
                  <Select.Option value="comments">Comments</Select.Option>
                  <Select.Option value="job_applied">Job Applied</Select.Option>
                  <Select.Option value="email">Email</Select.Option>
                  <Select.Option value="direct_contract">Direct Contract</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Project Duration */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Project Duration">
                <Select size="large" showSearch placeholder="Project Duration" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="1_3months">1 - 3 Months</Select.Option>
                  <Select.Option value="4_6months">4 - 6 Months</Select.Option>
                  <Select.Option value="1year">1 Year</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Payment Type */}
            <Col xs={24} md={12} xl={8}>
              <Form.Item label="Payment Type">
                <Select size="large" showSearch placeholder="Payment Type" optionFilterProp="children" onChange={onChange} onSearch={onSearch}>
                  <Select.Option value="mode1">Mode 1 (Hourly)</Select.Option>
                  <Select.Option value="mode2">Mode 2 (Fixed)</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Form Button */}
            <Col span={24}>
              <Button className='ButtonStyle1' type="submit" size='large'>Submit</Button>
            </Col>

          </Row>
        </Form>
      </Card>
    </>
  );
}

export default Client;