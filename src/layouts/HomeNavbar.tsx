import { FireTwoTone } from "@ant-design/icons";
import { Menu } from "antd";
import { Col, Row } from "antd/lib/grid";
import { Header } from "antd/lib/layout/layout";
import { FunctionComponent } from "react";

interface HomeNavbarProps {}

const HomeNavbar: FunctionComponent<HomeNavbarProps> = () => {
  return (
    <>
      <Header style={{ backgroundColor: "#efefef", padding: 5 }}>
        <Row justify="space-between">
          <Col span={8} style={{ padding: 10 }}>
            <div
              style={{
                width: "50%",
                padding: 2,
                textAlign: "center",
              }}
            >
              <FireTwoTone style={{ fontSize: 22 }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Website Name
              </span>
            </div>
          </Col>
          <Col span={16}>
            <Row justify="end">
              <Col>
                <Menu
                  mode="horizontal"
                  style={{ border: "none", backgroundColor: "#efefef" }}
                  defaultSelectedKeys={["1"]}
                  items={new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                      key,
                      label: `Home ${key}`,
                      style: {
                        float: "right",
                      },
                    };
                  })}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default HomeNavbar;
