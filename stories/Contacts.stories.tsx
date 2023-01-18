import { ComponentStory, ComponentMeta } from '@storybook/react';

import Contacts from '../components/contacts/Contacts.component';

export default {
    title: 'Components/Contacts123',
    component: Contacts,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Contacts>;

const Template: ComponentStory<typeof Contacts> = () => <Contacts />;

export const Primary = Template.bind({});
