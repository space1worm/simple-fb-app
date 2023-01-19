import { ComponentStory, ComponentMeta } from '@storybook/react';

import Contacts from '../components/contacts/Contacts.component';

export default {
    title: 'Components/Contacts',
    component: Contacts,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Contacts>;

export const Template: ComponentStory<typeof Contacts> = () => <Contacts />;

