import "./previewimage.css";

type TProps = {
    src: string,
    title?: string,
    onCloseClick?: () => void,
}

const PreviewImage: React.FC<TProps> = ({src, title, onCloseClick}) => {
    return (
      <div className="previewimage-wrapper">
        <img
          src={src}
          alt={title || "Empty image"}
          title={title || ""}
          className="previewimage-img"
        />
        <button className="previewimage-btn-close" onClick={onCloseClick}><img src="/images/cross.svg" /></button>
      </div>
    );
}

export default PreviewImage;