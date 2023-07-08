import { Table } from "antd";
import { Excel } from "antd-table-saveas-excel";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    align:'center',
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    align:'center',
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
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

function Fake() {
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'customerId',
        dataIndex: 'customerId',
        key: 'customerId',
      },
      {
        title: 'custName',
        dataIndex: 'custName',
        key: 'custName',
      },
      {
        title: 'price',
        key: 'price',
        dataIndex: 'price',
      },
    ];
    const data = [
    {
      key:1,
      customerId:12345,
      custName:"ramesh",  
      price:345
    },
    {
      key:2,
      customerId:67890,
      custName:"rajesh",  
      price:345
    },
    {
      key:3,
      customerId:635645,
      custName:"dinesh",  
      price:345
    },
  ];
    // for (let i = 1; i < 4; ++i) {
    //   data.push({
    //     key: i.toString(),
    //     date: '2014-12-24 23:12:00',
    //     name: 'This is production name',
    //     upgradeNum: 'Upgraded: 56',
    //   });
    // }
    if (data && data.length) {
      return <Table columns={columns} dataSource={data} pagination={false} />;
    } else {
      return null;
    }

  };

    // combine parent and nested data into a new array

  const handleClick = () => {

  const expandedData = expandedRowRender && expandedRowRender();
  const tableProps = expandedData?.props;
  const expandedColumns = tableProps?.columns || [];
  const expandedDataSource = tableProps?.dataSource || [];
  console.log(tableProps?.dataSource);
  console.log(tableProps?.columns);
  const dataObj = expandedDataSource ? expandedDataSource.reduce((obj, item) => {
    obj[item.key] = item;
    return obj;
  }, {}) : {};

  const newData = Object.values(dataObj);
  const allColumns = columns.concat(expandedColumns);
  const combinedData = [];
  newData.forEach((item) => {
    const nestedItem = expandedDataSource.find((nestedItem) => nestedItem.key === item.key);
    if (nestedItem) {
      combinedData.push({ ...item, ...nestedItem });
    } else {
      combinedData.push(item);
    }
  });
  console.log('newdata',newData);
  const excel = new Excel();
  excel
  .addSheet("test")
  .addColumns(columns)
  .addDataSource(dataSource, {
    str2Percent: true,
  })
  .addColumns(allColumns)
  .addDataSource(combinedData);
  excel.saveAs("Excel.xlsx");

}

  return (
    <div className="App">
      <button onClick={handleClick}>Export</button>
      <Table
        dataSource={dataSource}
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
      />
      ;
    </div>
  );
}
export default Fake;