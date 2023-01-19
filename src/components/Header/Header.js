import Link from "next/link"
import { HiOutlineSparkles } from "react-icons/hi2";
// import TabList from "../TabList/TabList";
// import TabsDemo from "../TabsDemo/TabsDemo";
// import { Text } from "../Text";

const Header = ({ title }) => {
  return (
    <div className="sticky bg-white/75 z-10 backdrop-blur-md top-0">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          {/* <Text variant='large/bold'>Home</Text> */}
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
      </div>
    </div>  
)
}

export default Header