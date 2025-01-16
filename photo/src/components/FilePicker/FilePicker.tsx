import "./filepicker.css";

type TProps = {
  onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilePicker: React.FC<TProps> = ({onSelect}) => {
    const handlePickFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      onSelect(event);
      const target = event.currentTarget as HTMLInputElement;
      target.value = "";
    };
    return (
      <div className="filepicker">
        <form className="filepicker-form">
          <label className="filepicker-label" htmlFor="file-input">
            Нажмите здесь для выбора файла(ов) изображений
          </label>
          <input
            className="filepicker-input"
            type="file"
            name="file-input"
            id="file-input"
            multiple
            accept="image/*"
            onChange={handlePickFiles}
          ></input>
        </form>
      </div>
    ); 
}

export default FilePicker;