import React from 'react';

const photos = [
  'https://source.unsplash.com/600x400/?nature,forest',
  'https://source.unsplash.com/600x400/?trees,park',
  'https://source.unsplash.com/600x400/?eco,trail',
  'https://source.unsplash.com/600x400/?river,nature',
  'https://source.unsplash.com/600x400/?wildlife',
  'https://source.unsplash.com/600x400/?flowers,path'
];

function PhotoGallery() {
  return (
    <div className="gallery">
      {photos.map((url, i) => (
        <img key={i} src={url} alt={`Galeria ${i + 1}`} className="gallery-img" />
      ))}
    </div>
  );
}

export default PhotoGallery;
