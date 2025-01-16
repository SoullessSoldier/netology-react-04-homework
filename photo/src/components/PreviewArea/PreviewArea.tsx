import PreviewImage from "@/components/PreviewImage/PreviewImage";
import "./previewarea.css";

type TProps = {
    previews: string[],
    onClose: (key: number) => void,
}

const isEmpty = (data: string[]): boolean => data.length === 0;

const PreviewArea: React.FC<TProps> = ({previews, onClose}) => {
    return (
      <div className="preview-wrapper">
        <ul className="preview-image-list">
          {previews.map((preview, key) => {
            return (
              <PreviewImage
                key={key}
                src={preview}
                onCloseClick={() => onClose(key)}
              />
            );
          })}
        </ul>
        {isEmpty(previews) && <PreviewImage src="/images/crossbox.svg" title="Empty image" />}
      </div>
    );
}

export default PreviewArea;