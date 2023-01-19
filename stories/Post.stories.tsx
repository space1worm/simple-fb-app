import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';

import Post from '../components/feed/Post.component';

const argTypes = {
    id: {
        name: "id",
        type: { name: "string", required: true },
        description: "db ID of post",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    name: {
        name: "name",
        type: { name: "string", required: true },
        description: "Displays the name of the user who posted the post",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "" },
        },
        control: {
            type: "text",
        },
    },
    message: {
        name: "message",
        type: { name: "string", required: false },
        description: "Displays the meesage of the post",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    email: {
        name: "email",
        type: { name: "string", required: true },
        description: "Used to detect who is the owner of the post",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    timeStamp: {
        name: "timeStamp",
        type: { name: "Timestamp", required: true },
        description: "Post creating time.",
        table: {
            type: { summary: "Timestamp" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    image: {
        name: "image",
        type: { name: "string", required: true },
        description: "User image",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    },
    postImage: {
        name: "postImage",
        type: { name: "string", required: true },
        description: "Post image",
        table: {
            type: { summary: "string" },
            defaultValue: { summary: "Forbbiden" },
        },
        control: {
            type: "text",
        },
    }
}

export default {
    title: 'Components/Post',
    component: Post,
    argTypes,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'testid',
    name: 'testName',
    message: 'testMessage',
    timeStamp: new Timestamp(123123, 1231312),
    image: 'https://links.papareact.com/f0p',
    postImage: 'https://links.papareact.com/f0p',
    email: "testMail.com"
};