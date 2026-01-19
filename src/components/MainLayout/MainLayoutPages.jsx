import { useState } from "react";
import Card from "../card/card";
import { Foods } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tabsMenyu = [
  { title: "Hot Dishes", value: "hot-dishes" },
  { title: "Cold Dishes", value: "cold-dishes" },
  { title: "Soup", value: "soup" },
  { title: "Grill", value: "grill" },
  { title: "Appetizer", value: "appetizer" },
  { title: "Dessert", value: "dissert" },
];

export default function MainLayoutPages() {
  const [tabs, setTabs] = useState("all");

  const filterData =
    tabs === "all" ? Foods : Foods.filter((item) => item.category === tabs);

  return (
    <div>
      <nav className="mb-10 ">
        <ul
          className={`w-full flex justify-between  h-[15%] border-b pb-1.5 border-[#393C49]`}
        >
          {tabsMenyu.map((item) => (
            <button
              key={item.value}
              className={`relative top-0 left-0 cursor-pointer text-[18px] text-[#FFFFFF] font-semibold ${
                tabs === item.value ? "active" : ""
              }`}
              onClick={() => setTabs(item.value)}
            >
              {item.title}
            </button>
          ))}
        </ul>
        .
      </nav>
      <div className="flex justify-between">
        <h2 className="text-2xl text-white font-semibold">Choose Dishes</h2>
        <Select>
          <SelectTrigger className="w-[180px] text-white">
            <SelectValue>Price</SelectValue>
          </SelectTrigger>
          <SelectContent className="w-45 top-12">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-5 2xl:mx-10 mx-5 max-lg:grid-cols-1 pb-7">
        {filterData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
