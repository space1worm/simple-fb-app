import { ComponentStory, ComponentMeta } from '@storybook/react';

import Posts from '../components/feed/Posts.component';

export default {
    title: 'Components/Posts',
    component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = () => <Posts />;

export const Primary = Template.bind({});
