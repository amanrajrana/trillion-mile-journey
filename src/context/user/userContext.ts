import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "@/types/type";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loadingUserSession: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loadingUserSession: true,
});

export default UserContext;
