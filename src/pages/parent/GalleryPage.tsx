import React, { useState } from 'react';
import { galleryData } from '../../data/mockData';
import { Calendar, X } from 'lucide-react';

interface ModalProps {
  image: {
    id: string;
    url: string;
    caption: string;
  };
  onClose: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-10"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="w-full">
            <img 
              src={image.url} 
              alt={image.caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-900 font-medium">{image.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  return (
    <div className="space-y-6 fade-in">
      <h1 className="text-2xl font-bold text-gray-900">Photo Gallery</h1>
      
      <div className="space-y-8">
        {galleryData.map((album) => (
          <div key={album.id} className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-900">{album.title}</h2>
              <div className="ml-3 flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(album.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {album.images.map((image) => (
                <div 
                  key={image.id} 
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] shadow-md"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default GalleryPage;