import { Table, Badge } from "antd";

const dataSource = [
  {
    id: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    children: [
      {
        key: "1-1",
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      },
    ],
  },
  {
    id: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    children: [
      {
        key: "2-1",
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      },
    ],
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

function MyTable() {
  const expandedRowRender = (record) => {
    const nestedColumns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => <Badge status="success" text="Finished" />,
      },
    ];

    const nestedData = record.children;

    return (
      <Table
        dataSource={nestedData}
        columns={nestedColumns}
        pagination={false}
      />
    );
  };
}
export default MyTable;