import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
    id: string;
    text: string;
    required: boolean;
    type: HTMLInputTypeAttribute;
    autoComplete?: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField(props: Props) {
    const { id, text, required, type, autoComplete, placeholder, value, onChange } = props;

    return <div className="relative">
        <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {text}
        </label>
        <input
            type={type}
            autoComplete={autoComplete}
            id={id}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
        />
    </div>
}
