import { createContext, useState, ReactNode } from "react";

interface TodoContextProps {
  message: string | null;
  setMessage: React.Dispatch<any>;
}

export const TodoContext = createContext<TodoContextProps>({
  message: null,
  setMessage: () => {},
});

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <TodoContext.Provider value={{ message, setMessage }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
