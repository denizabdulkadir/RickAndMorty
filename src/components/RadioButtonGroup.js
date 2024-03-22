import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Colors } from "../constants.js/colors";

export default function RadioButtonGroup({ onSelection }) {
  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Name",
        value: "name",
      },
      {
        id: "2",
        label: "Status",
        value: "status",
      },
      {
        id: "3",
        label: "Species",
        value: "species",
      },
      {
        id: "4",
        label: "Gender",
        value: "gender",
      },
    ],
    []
  );

  const [selected, setSelected] = useState(radioButtons[0]);

  function onPressHandler(selectionId) {
    setSelected(radioButtons[selectionId - 1]);
    onSelection(radioButtons[selectionId - 1]);
  }

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onPressHandler}
      selectedId={selected.id}
      layout="row"
      //   labelStyle={{ color: Colors.blue200 }}
    />
  );
}
