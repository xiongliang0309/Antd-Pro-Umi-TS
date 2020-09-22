import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Breadcrumb } from 'antd';

const breadcrumb: FC = () => {
  interface Bread {
    title: string;
    href?: string;
  }

  const list: Array<Bread> = [
    {
      title: '分析页',
      href: '/dashboard/analysis',
    },
    {
      title: '监控台',
      href: '/dashboard/monitor',
    },
  ];

  return (
    <PageHeaderWrapper>
      <Breadcrumb>
        {list.map((item) => {
          return (
            <Breadcrumb.Item>
              <a href={item.href}>{item.title}</a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </PageHeaderWrapper>
  );
};

export default breadcrumb;
