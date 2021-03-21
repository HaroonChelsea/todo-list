import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../actions";

function Nav() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <h1 className="text-3xl py-3 font-bold dark:text-white">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
              TODO
            </span>
            App
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
