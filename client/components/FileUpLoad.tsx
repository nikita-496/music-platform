import * as React from 'react';
import styles from '../styles/create/Create.module.scss';

interface FileUpLoadProps {

  setFile: Function;
  accept: string;
}

const FileUpLoad: React.FC<FileUpLoadProps> = ({setFile, accept, children}) => {

  const ref = React.useRef<HTMLInputElement>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }
  return (
    <div onClick={() => ref.current.click()}>
      <input 
        className={styles.file}
        type="file"
        accept={accept}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
}
 
export default FileUpLoad;