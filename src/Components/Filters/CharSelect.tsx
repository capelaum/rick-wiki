import { ChangeEvent } from "react";

import {
  Select,
  FormControl,
  FormLabel,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";

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
  const cyanColor = useColorModeValue("cyan.600", "cyan");

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
    <FormControl>
      <VisuallyHidden>
        <FormLabel htmlFor={type}>{type}</FormLabel>
      </VisuallyHidden>
      <Select
        id={type}
        aria-label={`Select ${type}`}
        name={type}
        title={type}
        placeholder={type}
        size="md"
        variant="outline"
        // icon={<MdArrowDropDown />}
        color={cyanColor}
        iconColor={cyanColor}
        borderColor={cyanColor}
        colorScheme="cyan"
        _hover={{
          cursor: "pointer",
          outline: "none",
        }}
        _focus={{
          outline: "none",
        }}
        onChange={(e) => handleChange(e)}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  );
}
