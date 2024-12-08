// components/DeliveryServiceInfo.tsx
import React from "react";

interface DeliveryServiceInfoProps {
  serviceImage: string;
  headlineText: string;
  descriptionText: string;
  className?: string;
}

const DeliveryServiceInfo: React.FC<DeliveryServiceInfoProps> = ({
  serviceImage,
  headlineText,
  descriptionText,
  className,
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <img src={serviceImage} alt={headlineText} className="w-16 h-16" />
      <h3 className="text-lg font-bold text-gray-800">{headlineText}</h3>
      <p className="text-sm text-gray-600 text-center">{descriptionText}</p>
    </div>
  );
};

export default DeliveryServiceInfo;
