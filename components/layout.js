import { Layout } from "antd";

const { Content } = Layout;

export default function LayoutComponent({ children }) {
  return <Content>{children}</Content>;
}
