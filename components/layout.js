import { Layout, Menu } from "antd";
import Link from "next/link";

const { Content, Header } = Layout;

export default function LayoutComponent({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="1">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      {children}
    </Layout>
  );
}
