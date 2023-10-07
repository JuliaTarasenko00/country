type TImg = {
  imgPng: string;
  imgSvg: string;
};

export const loadingImg = ({ imgPng, imgSvg }: TImg) => {
  const image =
    imgPng ??
    imgSvg ??
    `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png`;

  return image;
};
