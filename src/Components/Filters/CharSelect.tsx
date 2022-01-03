import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";

const status = ["Alive", "Dead", "Unknown"];

const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Animal",
  "Robot",
  "Disease",
  "Poopybutthole",
  "Mythological",
  "Cronenberg",
  "Planet",
  "Unknown",
];

const genders = ["Male", "Female", "Genderless", "Unknown"];

interface CharSelectProps {
  type: string;
  handleFilters: (value: string, type: string) => void;
}

export function CharSelect({ type, handleFilters }: CharSelectProps) {
  function renderOptions() {
    if (type === "Status") {
      return status.map((option) => (
        <option key={`status-${option}`} value={option.toLocaleLowerCase()}>
          {option}
        </option>
      ));
    }

    if (type === "Species") {
      return species.map((option) => (
        <option key={`species-${option}`} value={option.toLocaleLowerCase()}>
          {option}
        </option>
      ));
    }

    if (type === "Gender") {
      return genders.map((option) => (
        <option key={`gender-${option}`} value={option.toLocaleLowerCase()}>
          {option}
        </option>
      ));
    }
  }

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    handleFilters(e.target.value, type);
  }

  return (
    <Select
      placeholder={type}
      size="md"
      variant="outline"
      // icon={<MdArrowDropDown />}
      iconColor="cyan.600"
      borderColor="cyan.600"
      colorScheme="cyan"
      _hover={{
        cursor: "pointer",
        outline: "none",
      }}
      onChange={(e) => handleChange(e)}
    >
      {renderOptions()}
    </Select>
  );
}
