import { Table } from "antd";
import { Excel } from "antd-table-saveas-excel";

const SAMEXL = () => {
  const ParentCOlumns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
  ];
  const Parentdata = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      children: [
        {
          id: 11,
          name: "raghava",
          username: "Raghava 1",
          email: "Raghava1@example.com",
        },
        {
          id: 12,
          name: "Raghava 2",
          username: "Raghava 2",
          email: "child2@example.com",
        },
      ],
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      children: [
        {
          id: 13,
          name: "Rajesh",
          username: "Rajesh1",
          email: "rajesh11@example.com",
        },
        {
          id: 14,
          name: "Rajesh2",
          username: "Rajesh 2",
          email: "child2@example.com",
        },
      ],
    },
  ];

  const handleClick = () => {

    const nestedData = [];
    Parentdata.forEach((record) => {
        const data = record.children;
        data.forEach((nestedRecord) => {
          nestedData.push({
            Name: record.name,
            Age: record.username,
            Address: record.email,
            ...nestedRecord
          });
        });
      });
    const excel = new Excel();
    excel
    .addSheet("test")
    .addColumns(ParentCOlumns)
    .addDataSource(nestedData, {
      str2Percent: true,
    })

    excel.saveAs("Excel.xlsx");
  }  
  return (
    <>
    <button onClick={handleClick}>export to excel</button>
      <Table columns={ParentCOlumns} dataSource={Parentdata}/>
    </>
  );
};

export default SAMEXL;
