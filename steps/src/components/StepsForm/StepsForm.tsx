import { TStepsItem } from "@/types";
import "./stepsform.css";

type TProps = {
  currentData: TStepsItem,
  onAddData: (param: TStepsItem) => void,
  onInputChange: React.FormEventHandler<HTMLInputElement>
}

const StepsForm: React.FC<TProps> = ({
  currentData,
  onAddData,
  onInputChange,
}): React.ReactNode => {
  const resetForm = (): void => {
    currentData.date = "";
    currentData.quantity = 0;
    currentData.edit = false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      date: currentData.date,
      quantity: Number(formData.get("quantity") as string | null) || 0,
      edit: currentData.edit,
    } as TStepsItem;
    onAddData(data);
    resetForm();
  };

  return (
    <div className="stepsform">
      <form className="stepsform-form" onSubmit={handleSubmit}>
        <div className="stepsform-input-wrapper">
          <label className="stepsform-label" htmlFor="form-date">
            Дата (ДД.ММ.ГГГГ)
          </label>
          <input
            className="stepsform-input bordered"
            type="date"
            name="date"
            id="form-date"
            value={currentData.date}
            onChange={onInputChange}
            required
            disabled={currentData.edit}
          />
        </div>
        <div className="stepsform-input-wrapper">
          <label className="stepsform-label" htmlFor="form-quantity">
            Пройдено, км
          </label>
          <input
            className="stepsform-input bordered"
            type="number"
            name="quantity"
            id="form-quantity"
            placeholder="1.0"
            step="0.1"
            min={0.1}
            value={currentData.quantity}
            onChange={onInputChange}
            required
          />
        </div>
        <input type="checkbox" name="edit" hidden />
        <button className="stepsform-btn bordered" type="submit">
          OK
        </button>
      </form>
    </div>
  );
};

export default StepsForm;
