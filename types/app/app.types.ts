import { AnySchema } from "yup";

export type YupInterface<T> = Record<keyof T, AnySchema>;
export type TChildren = React.ReactNode | React.ReactNode[];
