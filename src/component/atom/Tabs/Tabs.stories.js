import React from 'react';
import TabsList from './Tabs';

export default {
    title: "Atom/Tabs",
    component: TabsList,
}

const Template = args=>(<TabsList {...args} />)




export const RecentReadList = Template.bind({})
RecentReadList.args = {
    children: ["Currently Reading", "Finished"],
}