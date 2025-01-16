import { fileToDataUrl } from "@/utils/fileHelper";
import { useState } from "react";
import FilePicker from "@/components/FilePicker/FilePicker";
import PreviewArea from "@/components/PreviewArea/PreviewArea";

const PhotoManager: React.FC = () => {
  const [fileState, setFileState] = useState<string[]>([]);

  const handleSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
        const urls = await Promise.all([...files].map((o) => fileToDataUrl(o)));
        if (urls) {
        setFileState((prevState) => [...prevState, ...urls] as string[]);
        }
    }
  };

  const handleCloseImage = (key: number) => {
    const files = [...fileState];
    files.splice(key, 1);
    setFileState(files);
  };

  return (
    <>
      <FilePicker onSelect={handleSelect} />
      <PreviewArea previews={fileState} onClose={handleCloseImage} />
    </>
  );
};

export default PhotoManager;
