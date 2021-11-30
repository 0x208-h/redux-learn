import React, { ChangeEvent, FC } from "react";
import { Button, Input, List, Typography } from "antd";

interface UIProps {
  value: {
    inputValue: string
    list: string[]
  }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleClick: () => void
  handleItemClick: (id: number) => void
}

const UI: FC<UIProps> = ({ value, handleChange, handleClick, handleItemClick }) => {
  return (
    <div style={{margin:' 40px 80px'}}>
      <Input 
        style={{ width: 200, marginRight: 20 }} 
        value={value.inputValue}
        onChange={handleChange}
      />
      <Button type="primary" onClick={handleClick}>提交</Button>
      <List
      style={{ marginTop: 10 }}
      bordered
      dataSource={value.list}
      renderItem={(item, index) => (
        <List.Item onClick={() => handleItemClick(index)}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    </div>
  )
}

export default UI