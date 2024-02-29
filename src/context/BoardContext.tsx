import { ReactNode, createContext, useReducer } from "react";
import { Board } from "../types/Board";
import { Subtask } from "../types/Subtask";

type Props = {
  children: ReactNode;
};

type Actions =
  | { type: "CREATE_BOARD"; payload: { id: string; name: string } }
  | { type: "CREATE_COLUMN"; payload: { boardId: string; name: string } }
  | {
      type: "CREATE_TASK";
      payload: {
        boardId: string;
        selectedColumnId: string;
        title: string;
        description: string;
        subtasks: Subtask[];
      };
    };

type BoardContextProps = {
  boards: Board[];
  dispatch: (type: Actions) => void;
};

export const BoardContext = createContext<BoardContextProps>(
  {} as BoardContextProps
);

function reducer(boards: Board[], action: Actions) {
  switch (action.type) {
    case "CREATE_BOARD": {
      return [
        ...boards,
        { id: action.payload.id, name: action.payload.name, columns: [] },
      ];
    }

    case "CREATE_COLUMN": {
      return boards.map((board) => {
        if (board.id === action.payload.boardId) {
          return {
            ...board,
            columns: [
              ...board.columns,
              {
                id: window.crypto.randomUUID(),
                name: action.payload.name,
                tasks: [],
              },
            ],
          };
        }
        return board;
      });
    }

    case "CREATE_TASK": {
      return boards.map((board) => {
        if (board.id === action.payload.boardId) {
          const newColumns = board.columns.map((column) => {
            if (column.id === action.payload.selectedColumnId) {
              return {
                ...column,
                tasks: [
                  ...column.tasks,
                  {
                    id: window.crypto.randomUUID(),
                    title: action.payload.title,
                    description: action.payload.description,
                    subtasks: action.payload.subtasks,
                  },
                ],
              };
            }
            return column;
          });
          return { ...board, columns: newColumns };
        }
        return board;
      });
    }

    default:
      throw new Error("error");
  }
}

export function BoardContextProvider(props: Props) {
  const { children } = props;
  const [boards, dispatch] = useReducer(reducer, []);

  return (
    <BoardContext.Provider value={{ boards, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}
