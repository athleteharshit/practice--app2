import { TextField } from "@material-ui/core";

type AppProps = {
  label?: string;
  placeholder?: string;
  id: string;
  name: string;
  type: string;
  error: any;
  helperText?: any;
  variant?: any;
  value: string;
  onChange: any;
  onBlur?: any;
  className?: any;
};

function MainTextField({
  label,
  placeholder,
  id,
  name,
  type,
  error,
  helperText,
  variant,
  value,
  onChange,
  onBlur,
  className,
}: AppProps) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      id={id}
      name={name}
      type={type}
      error={error}
      helperText={helperText}
      variant={variant}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
    />
  );
}

export default MainTextField;
