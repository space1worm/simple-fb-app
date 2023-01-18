import { UseFormRegisterReturn } from "react-hook-form";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  autoComplete?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errorMsg: string | undefined;
  isDirty: boolean | undefined;
}

export default function InputField({
  id,
  title,
  autoComplete,
  placeholder,
  register,
  errorMsg,
  isDirty,
  type,
}: Props): JSX.Element {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <div className="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <input
          id={id}
          {...register}
          type={type}
          autoComplete={autoComplete}
          className="flex-1 bg-transparent outline-none"
          placeholder={placeholder}
        />
        {!isDirty ? null : errorMsg ? (
          <XCircleIcon className="h-4 text-red-500" />
        ) : (
          <CheckIcon className="h-4 text-green-500" />
        )}
      </div>
      {isDirty && errorMsg ? (
        <p className="text-ms text-red-500">{errorMsg}</p>
      ) : (
        <p className="text-ms text-transparent">no msg</p>
      )}
    </div>
  );
}
