import React, { useState, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

const LogoUpload: React.FC = () => {
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the current logo from the server
    // For now, we'll use a placeholder
    setLogo('/path/to/current/logo.png');
  }, []);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
        // Here you would typically send the file to your server
        console.log('Uploading logo:', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    // Here you would typically send a request to remove the logo on the server
    console.log('Removing logo');
  };

  return (
    <div className="space-y-4">
      {logo ? (
        <div className="relative w-64 h-64">
          <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
          <button
            onClick={handleRemoveLogo}
            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <div className="w-64 h-64 border-2 border-dashed border-gray-300 flex items-center justify-center">
          <p className="text-gray-500">No logo uploaded</p>
        </div>
      )}
      <div>
        <label htmlFor="logo-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors inline-flex items-center">
          <Upload className="mr-2" size={20} />
          Upload New Logo
        </label>
        <input
          id="logo-upload"
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default LogoUpload;