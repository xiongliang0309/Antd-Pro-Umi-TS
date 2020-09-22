import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button } from 'antd';

const button: FC = () => {
  interface Person {
    name: String;
    age: Number;
    sex?: String;
  }

  const data: Person = {
    name: 'xl',
    age: 12,
    sex: 'male',
  };

  const handleClick = (person: Person) => {
    alert(JSON.stringify(person));
  };

  return (
    <PageHeaderWrapper>
      <Button onClick={() => handleClick(data)} type="primary">
        按钮
      </Button>
    </PageHeaderWrapper>
  );
};

export default button;
