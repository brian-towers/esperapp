import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@store/configureStore";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
