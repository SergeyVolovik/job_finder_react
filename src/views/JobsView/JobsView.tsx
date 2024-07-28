import { memo } from 'react';

import { Content, SideBar } from '@/components';

import { JobHeader, JobCards, JobDetailsFilter, JobFilter } from './sections';

export const JobsView = memo(() => {
  return (
    <>
      <JobFilter />
      <Content className="pb-10 flex">
        <SideBar className="flex shrink w-96">
          <JobDetailsFilter />
        </SideBar>
        <Content>
          <JobHeader />
          <JobCards />
        </Content>
      </Content>
    </>
  );
});
