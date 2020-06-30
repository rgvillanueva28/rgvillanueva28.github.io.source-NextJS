import Head from "next/head";
import { Typography, Layout, Menu } from "antd";
import LayoutComponent from "../components/layout";

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>
      <Content>
        <Title>RANE GILLIAN</Title>
      </Content>
    </LayoutComponent>
  );
}
