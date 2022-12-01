import { useState } from 'react';
// Antd imports
import {
  Card,
  Button,
  Row,
  Col,
  Table,
  PageHeader,
  Modal
} from 'antd';
import { Expense, Columns } from '../AllData/SeedDaata';
import ExpenseModal from './ExpenseModal'

export default function ExpenseList() {
  const [expense] = useState(Expense);
  const [columns] = useState(Columns);
  const [isOpenModal, setIsOpenModal] = useState(false);


  const handleaddExpense = () => {
    // console.log('hii')
    setIsOpenModal(true);
  }

  const handleCancel = () => {
    setIsOpenModal(false);

  }


  return (
    <>
      <div className='tabled'>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <PageHeader
              ghost={false}
              title="Expense"
              extra={[
                <Button key="3"
                  onClick={handleaddExpense}
                > Add Expense</Button>,
              ]}
            />


            <Card>
              <Table
                columns={columns}
                dataSource={expense}
                scroll={{
                  x: 1300,
                }}
              />
            </Card>

              {/* // For Model Show */}

            <Modal
              title="Expense"
              centered
              visible={isOpenModal}
              // onOk={handleOk}
              // confirmLoading={confirmLoading}
              onCancel={handleCancel}
              width={600}
              footer={null}
            >
              <ExpenseModal />
            </Modal>

          </Col>
        </Row>
      </div>

    </>
  );
}
