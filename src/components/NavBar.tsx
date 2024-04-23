import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";

const trainingItems: MenuProps["items"] = [
  {
    label: <a href="/training/max-hangs">Max hangs</a>,
    key: "0",
  },
  {
    label: <a href="/training/strength-calc">Strength Calculator</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Endurance protocol",
    key: "2",
    disabled: true,
  },
];

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          paddingTop: "5px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a href="/">Shop</a>
        <Dropdown
          menu={{ items: trainingItems }}
          placement="bottom"
          trigger={["click"]}
        >
          <a style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
            <Space>
              Training
              <IoMdArrowDropdown
                style={{ position: "relative", left: "-5px" }}
              />
            </Space>
          </a>
        </Dropdown>
        <a href="#">Grade Converter</a>
        <a href="#">Login</a>
      </nav>
    </>
  );
}
