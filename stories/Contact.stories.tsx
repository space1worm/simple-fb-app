import { ComponentStory, ComponentMeta } from '@storybook/react';

import Contact from '../components/contacts/Contact.component';

const argTypes = {
    src: {
        name: "src",
        type: { name: "string", required: true },
        description: "Img Path",
        table: {
            type: { summary: "NextImage" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    name: {
        name: "name",
        type: { name: "string", required: true },
        description: "Displays the name of the active user",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },

}

export default {
    title: 'Components/Contact',
    component: Contact,
    argTypes,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://links.papareact.com/f0p',
    name: 'Jeff Bezos'
};