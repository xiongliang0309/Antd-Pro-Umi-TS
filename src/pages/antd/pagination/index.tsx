import React, { FC } from 'react';
import { Pagination } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const pagination: FC = () => {
  return (
    <PageHeaderWrapper>
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} disabled showSizeChanger showQuickJumper />
    </PageHeaderWrapper>
  );
};

export default pagination;
