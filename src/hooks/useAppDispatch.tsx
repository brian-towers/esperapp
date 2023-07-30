import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/configureStore";

const useAppDispatch: () => AppDispatch = useDispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export default useAppDispatch;
