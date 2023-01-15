import Image from "next/image";

interface Props {
    name: string;
    src: string;
}

export default function Contact({ name, src }: Props) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={50}
                height={50}
                layout="fixed"
                alt="person"
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full " />
        </div>
    )
}