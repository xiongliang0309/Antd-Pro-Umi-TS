import React, { FC } from 'react';
import { Pagination } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const pagination: FC = () => {
  function handleChange(page: number, pageSize: number | undefined): void {
    alert(`page:${page}-pageSize:${pageSize}`);
  }

  const handleChange2 = (page: number, pageSize: number | undefined): string => {
    alert(`page:${page}-pageSize:${pageSize}`);
    return `page:${page}-pageSize:${pageSize}`;
  };

  return (
    <PageHeaderWrapper>
      <Pagination size="small" total={50} onChange={handleChange} />
      <Pagination
        size="small"
        total={50}
        showSizeChanger
        showQuickJumper
        onChange={handleChange2}
      />
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} disabled showSizeChanger showQuickJumper />
    </PageHeaderWrapper>
  );
};

export default pagination;
