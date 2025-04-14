
import { Tool } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl",
  };
  
  return (
    <Link to="/" className={`font-bold flex items-center ${sizeClasses[size]}`}>
      <Tool className="mr-2 text-ch-gold" size={size === "large" ? 28 : size === "small" ? 20 : 24} />
      <span className="text-ch-gold">Crisantos</span>
      <span className="text-ch-white ml-2">Hardware</span>
    </Link>
  );
};

export default Logo;
