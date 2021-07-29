import clsx from "clsx";
import { HashLoader } from "react-spinners";

type AppProps = {
  loading: boolean;
  color?: string;
  size: number;
  css?: any;
};

function MainLoader({ loading, color, size, css }: AppProps) {
  return (
    <div style={css ? css : {}} className={clsx([css])}>
      <HashLoader
        loading={loading}
        color={color ? color : "#FEA82F"}
        size={size}
      />
    </div>
  );
}

export default MainLoader;
