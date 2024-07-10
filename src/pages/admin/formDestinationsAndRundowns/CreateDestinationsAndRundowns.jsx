import React from "react";
import { Button } from "../../../components/ui/Button";
import SelectOption from "../../../components/ui/SelectOption";
import { Accordion } from "../../../components/ui/Accordion";
import { useState } from "react";
const CreateDestinationsAndRundowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickAccordion = () => {
    setIsOpen(!isOpen);
  };

  const destinations = [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
    "Destination 5",
    "Destination 6",
    "Destination 7",
  ];
  const filterOptions = destinations.map((destination) => ({
    value: destination,
    label: destination,
  }));
  let jumlah = 4;

  const option = [];
  for (let i = 0; i < jumlah; i++) {
    option.push(
      <div key={i} className="flex items-center space-x-2 py-4">
        <SelectOption
          options={filterOptions}
          value={""}
          onChange={""}
          label="Destinations"
          default_option="Choose Destinations"
        />
        <div className="w-[5rem]">
          <Button
            title={"Delete"}
            type="button"
            style={"bg-pink text-white text-sm"}
          />
        </div>
      </div>
    );
  }
  let total = 4;
  const onClickDelete = () => {
    if (total > 1) {
      total -= 1;
    }
  };
  const accordions = [];
  for (let i = 0; i < jumlah; i++) {
    accordions.push(
      <Accordion
        isOpen={isOpen}
        onClickAccordion={onClickAccordion}
        onClickDelete={onClickDelete}
      />
    );
  }
  return (
    <>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4"> Input Destinations Form </h1>
        <p className="text-center text-gray-400 mb-8">
          Please fill up the blank fields below
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-sm">{option}</div>
      </div>

      <div className="p-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Input Rundowns Form
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Please fill up the blank fields below
          </p>
          <div className="items-center gap-8 grid">{accordions}</div>
        </div>
      </div>
    </>
  );
};

export default CreateDestinationsAndRundowns;
