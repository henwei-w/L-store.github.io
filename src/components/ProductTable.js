import styled from "styled-components";
import { Table } from "antd";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const CustomTable = styled(Table)`
  margin-top: 30px;
`;

function ProductTable() {
  const dataSource = [
    {
      id: "001",
      key: "001",
      name: "長版羊毛大衣",
      price: "2490",
      size: ["S", "M", "L"],
      color: [["rgb(170,88,43)", "棕色"]],
      location: "women",
      description: "",
      img: "/image/w-coat-1.jpg",
    },

    {
      id: "002",
      key: "002",
      name: "長版羊毛大衣",
      price: "2490",
      size: ["S", "M", "L"],
      color: [["rgb(95,97,87)", "墨綠色"]],
      location: "women",
      description: "",
      img: "/image/w-coat-2.jpg",
    },

    {
      id: "003",
      key: "003",
      name: "休閒西裝外套",
      price: "1490",
      size: ["S", "M", "L"],
      color: [
        ["rgb(170,157,161)", "米色"],
        ["rgb(49,48,45)", "灰色"],
      ],
      location: "women",
      description: "",
      img: "/image/w-coat-3.jpg",
    },

    {
      id: "004",
      key: "004",
      name: "造型運動長袖",
      price: "890",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(192,214,164)", "淺綠色"]],
      location: "women",
      description: "",
      img: "/image/w-sports-1.jpg",
    },

    {
      id: "005",
      key: "005",
      name: "造型條紋短袖",
      price: "590",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(233,213,163)", "Default"]],
      location: "women",
      description: "",
      img: "/image/w-shirt-1.jpg",
    },

    {
      id: "006",
      key: "006",
      name: "純棉長袖",
      price: "590",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(180,140,116)", "棕色"]],
      location: "women",
      description: "",
      img: "/image/w-shirt-2.jpg",
    },

    {
      id: "007",
      key: "007",
      name: "短版透氣上衣",
      price: "590",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(155,157,158)", "灰色"]],
      location: "women",
      description: "",
      img: "/image/w-shirt-3.jpg",
    },

    {
      id: "008",
      key: "008",
      name: "牛仔短裙",
      price: "790",
      size: ["S", "M", "L"],
      color: [["rgb(127,157,183)", "Default"]],
      location: "women",
      description: "",
      img: "/image/w-pants-1.jpg",
    },

    {
      id: "009",
      key: "009",
      name: "休閒透氣長褲",
      price: "790",
      size: ["S", "M", "L"],
      color: [["rgb(158,151,148)", "灰色"]],
      location: "women",
      description: "",
      img: "/image/w-pants-2.jpg",
    },

    {
      id: "010",
      key: "010",
      name: "質感連身洋裝",
      price: "1290",
      size: ["S", "M"],
      color: [["rgb(10,12,13)", "黑色"]],
      location: "women",
      description: "",
      img: "/image/dress-1.jpg",
    },

    {
      id: "011",
      key: "011",
      name: "碎花連身洋裝",
      price: "1290",
      size: ["S", "M"],
      color: [["rgb(73,64,59)", "Default"]],
      location: "women",
      description: "",
      img: "/image/dress-2.jpg",
    },

    {
      id: "012",
      key: "012",
      name: "復古丹寧帽",
      price: "590",
      size: ["M"],
      color: [["rgb(38,162,202)", "Default"]],
      location: "women",
      description: "",
      img: "/image/w-hat-1.jpg",
    },

    {
      id: "013",
      key: "013",
      name: "純棉長袖",
      price: "790",
      size: ["M", "L", "XL"],
      color: [["rgb(1,5,11)", "黑色"]],
      location: "men",
      description: "",
      img: "/image/m-shirt-4.jpg",
    },

    {
      id: "014",
      key: "014",
      name: "質感西裝外套",
      price: "1990",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(26,28,31)", "黑色"]],
      location: "men",
      description: "",
      img: "/image/m-coat-3.jpg",
    },

    {
      id: "015",
      key: "015",
      name: "質感西裝外套",
      price: "1990",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(185,194,200)", "灰色"]],
      location: "men",
      description: "",
      img: "/image/m-coat-4.jpg",
    },

    {
      id: "016",
      key: "016",
      name: "西裝外套",
      price: "1490",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(66,65,68)", "灰色"]],
      location: "men",
      description: "",
      img: "/image/m-coat-1.jpg",
    },

    {
      id: "017",
      key: "017",
      name: "西裝外套",
      price: "1490",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(23,38,66)", "藍色"]],
      location: "men",
      description: "",
      img: "/image/m-coat-2.jpg",
    },

    {
      id: "018",
      key: "018",
      name: "運動套裝",
      price: "890",
      size: ["M", "L", "XL"],
      color: [["rgb(15,15,15)", "黑色"]],
      location: "men",
      description: "",
      img: "/image/m-sports-1.jpg",
    },

    {
      id: "019",
      key: "019",
      name: "造型運動套裝",
      price: "890",
      size: ["M", "L", "XL"],
      color: [["rgb(68,75,106)", "藍色"]],
      location: "men",
      description: "",
      img: "/image/m-sports-2.jpg",
    },

    {
      id: "020",
      key: "020",
      name: "涼感透氣短袖",
      price: "590",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(230,230,230)", "白色"]],
      location: "men",
      description: "",
      img: "/image/m-shirt-1.jpg",
    },

    {
      id: "021",
      key: "021",
      name: "彈性修身西裝褲",
      price: "990",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(94,92,98)", "灰色"]],
      location: "men",
      description: "",
      img: "/image/m-pants-1.jpg",
    },

    {
      id: "022",
      key: "022",
      name: "輕薄休閒襯衫",
      price: "790",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(233,216,200)", "卡其色"]],
      location: "men",
      description: "",
      img: "/image/m-shirt-2.jpg",
    },

    {
      id: "023",
      key: "023",
      name: "輕薄休閒襯衫",
      price: "790",
      size: ["S", "M", "L", "XL"],
      color: [["rgb(31,44,55)", "藍色"]],
      location: "men",
      description: "",
      img: "/image/m-shirt-3.jpg",
    },

    {
      id: "024",
      key: "024",
      name: "質感鴨舌帽",
      price: "590",
      size: ["M"],
      color: [["rgb(223,224,216)", "白色"]],
      location: "men",
      description: "",
      img: "/image/m-hat-1.jpg",
    },

    {
      id: "025",
      key: "025",
      name: "質感襯衫",
      price: "590",
      size: ["S", "M", "L"],
      color: [["rgb(149,146,151)", "灰色"]],
      location: "kids",
      description: "",
      img: "/image/k-shirt-1.jpg",
    },

    {
      id: "026",
      key: "026",
      name: "透氣短袖",
      price: "390",
      size: ["S", "M", "L"],
      color: [["rgb(231,231,233)", "白色"]],
      location: "kids",
      description: "",
      img: "/image/k-shirt-2.jpg",
    },

    {
      id: "027",
      key: "027",
      name: "彈性透氣牛仔褲",
      price: "590",
      size: ["S", "M", "L"],
      color: [["rgb(52,55,67)", "Default"]],
      location: "kids",
      description: "",
      img: "/image/k-pants-1.jpg",
    },

    {
      id: "028",
      key: "028",
      name: "質感單寧外套",
      price: "790",
      size: ["S", "M", "L"],
      color: [["rgb(31,42,41)", "Default"]],
      location: "kids",
      description: "",
      img: "/image/k-coat-1.jpg",
    },

    {
      id: "029",
      key: "029",
      name: "造型洋裝",
      price: "390",
      size: ["S", "M", "L"],
      color: [["rgb(237,215,206)", "粉色"]],
      location: "kids",
      description: "",
      img: "/image/k-dress-1.jpg",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "商品名稱",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "價格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "尺寸",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "顏色",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "類別",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "圖片",
      dataIndex: "img",
      key: "img",
    },
  ];

  return (
    <Wrap>
      商品列表
      <CustomTable dataSource={dataSource} columns={columns} />
    </Wrap>
  );
}

export default ProductTable;
