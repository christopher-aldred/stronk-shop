import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

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

const socialItems: MenuProps["items"] = [
  {
    label: <a href="/training/max-hangs">Instagram</a>,
    key: "0",
    disabled: true,
  },
  {
    label: <a href="/training/strength-calc">Youtube</a>,
    key: "1",
    disabled: true,
  },
];

const shopItems: MenuProps["items"] = [
  {
    label: <a href="/training/max-hangs">Finger training</a>,
    key: "0",
    disabled: true,
  },
  {
    label: <a href="/training/strength-calc">Clothing</a>,
    key: "1",
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
        <Dropdown menu={{ items: shopItems }} placement="bottom">
          <a style={{ cursor: "pointer" }} href="/">
            <Space>Shop</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items: trainingItems }} placement="bottom">
          <a style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
            <Space>Training</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items: socialItems }} placement="bottom">
          <a style={{ cursor: "pointer" }} onClick={(e) => e.preventDefault()}>
            <Space>Socials</Space>
          </a>
        </Dropdown>
        <a href="#">Login</a>
      </nav>
    </>
  );
}
