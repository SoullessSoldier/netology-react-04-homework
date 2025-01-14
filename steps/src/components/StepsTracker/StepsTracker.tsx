import StepsForm from "@/components/StepsForm/StepsForm";
import StepsTable from "@/components/StepsTable/StepsTable";
import "./stepstracker.css";
import { useState } from "react";
import { TStepsItem } from "@/types";

const StepsTracker: React.FC = () => {
  const [currentData, setCurrentData] = useState<TStepsItem>({
    date: "",
    quantity: 0.1,
    edit: false,
  });
  const [stepsData, setStepsData] = useState<TStepsItem[]>([]);

  const handleAddData = (data: TStepsItem) => {
    const date = data.date as string;
    const isEdit = data.edit || false;
    const quantity = Math.round(Number(data.quantity) * 10) / 10;

    const existingStepItemIndex = stepsData.findIndex(
      (stepsItem) => stepsItem.date === date
    );
    
    if (existingStepItemIndex > -1) {
      const tempStepsData: TStepsItem[] = [...stepsData];
      if (isEdit) {
        tempStepsData[existingStepItemIndex].quantity = quantity;
      } else {
        tempStepsData[existingStepItemIndex].quantity += quantity;
      }
      setStepsData([...tempStepsData]);
    } else {
      setStepsData((prevState) => [...prevState, { date, quantity }]);
    }
  };

  const handleInputData = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget || {};
    setCurrentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditData = (data: TStepsItem) => {
    setCurrentData({ ...data });
  };

  const handleDeleteData = (data: TStepsItem) => {
    const confirm = window.confirm("Вы хотите удалить запись?");
    if (confirm) {
      setStepsData((prevState) =>
        prevState.filter((stepsItem) => stepsItem.date !== data.date)
      );
    }
  };

  return (
    <div className="stepstracker bordered">
      <h2 className="stepstracker-header">Контроль шагов</h2>
      <StepsForm
        currentData={currentData}
        onAddData={handleAddData}
        onInputChange={handleInputData}
      />
      <StepsTable
        data={stepsData}
        onEditData={handleEditData}
        onDeleteData={handleDeleteData}
      />
    </div>
  );
};

export default StepsTracker;
