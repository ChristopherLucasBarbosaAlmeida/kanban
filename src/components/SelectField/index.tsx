import Select from "react-select";
import styles from "./styles.module.scss";
import { Column } from "../../types/Column";

type Props = {
  label: string;
  columns: Column[];
  onChange: (ev: { value: string; label: string } | null) => void;
};

export function SelectField(props: Props) {
  const { label, onChange, columns } = props;

  const options: { value: string; label: string }[] = [];

  columns.forEach((column) =>
    options.push({ value: column.id, label: column.name })
  );

  return (
    <label className={styles.select}>
      {label}
      <Select
        options={options}
        isSearchable={false}
        defaultValue={options[0]}
        styles={{
          control: () => ({
            display: "flex",
            borderRadius: "6px",
            backgroundColor: "transparent",
            border: "1px solid rgb(55, 55, 67)",
            cursor: "pointer",
          }),
          indicatorSeparator: () => ({ display: "none" }),
          menu: () => ({
            marginTop: "8px",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "rgb(100, 95, 198)",
          }),
          menuList: () => ({
            margin: "0",
            backgroundColor: "transparent",
            color: "white",
          }),
          option: () => ({
            padding: "8px",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "rgb(55, 55, 67)",
            },
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "white",
            fontSize: "1rem",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "white",
            fontSize: "1rem",
          }),
        }}
        onChange={onChange}
      />
    </label>
  );
}
