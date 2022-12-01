import { DownOutlined } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table } from 'antd';


export const Expense = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
    },

]


export const Columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
    },

    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () =>  
        <Space size="middle">       
        {/* <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            More <DownOutlined />
          </a>
        </Dropdown> */}
      </Space>
    },
]