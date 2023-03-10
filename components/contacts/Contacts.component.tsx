import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import Contact from "./Contact.component";

import { IContacts } from "../../types/app/app.interfaces";

const contacts: IContacts[] = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezos" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

export default function Contacts(): JSX.Element {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacs</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => {
        return (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        );
      })}
    </div>
  );
}
