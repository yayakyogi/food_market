import { Box, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

import style from './upload-photo.module.scss';

interface Props {
  onChange: (e: any) => void;
}

const UploadPhoto: React.FC<Props> = ({ onChange }) => {
  const [photo, setPhoto] = useState<string>();

  const handleChangePhoto = (value: any) => {
    if (value) {
      const blob = URL.createObjectURL(value);

      setPhoto(blob);

      if (typeof onChange === 'function') {
        onChange(value);
      }
    }
  };

  return (
    <Box className={style.wrap}>
      <Box className={style.addPhoto}>
        {photo ? (
          <Image className={style.preview} src={photo} alt="Camera" />
        ) : (
          <Text>
            Add <br /> Photo
          </Text>
        )}
      </Box>
      <input
        className={style.inputFile}
        type="file"
        multiple={false}
        onChange={(e) => {
          if (e.target.files) {
            handleChangePhoto(e.target.files[0]);
          }
        }}
      />
    </Box>
  );
};

export default UploadPhoto;
