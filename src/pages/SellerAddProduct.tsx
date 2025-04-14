
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "../data/categories";
import { ImagePlus, Save, ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SellerAddProductPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isOnSale: false,
    salePrice: "",
    isFeatured: false,
    stock: "",
    image: null,
  });

  useEffect(() => {
    // Redirect if not logged in or not a seller
    if (!user || user.role !== "seller") {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (name, value) => {
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!productData.name || !productData.price || !productData.category) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would submit the form data to an API
    toast({
      title: "Product Added",
      description: `${productData.name} has been added to your inventory.`,
    });
    
    // Reset form
    setProductData({
      name: "",
      description: "",
      price: "",
      category: "",
      isOnSale: false,
      salePrice: "",
      isFeatured: false,
      stock: "",
      image: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              className="mr-2"
              onClick={() => navigate("/seller-dashboard")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-hw-gray-900">Add New Product</h1>
          </div>
          
          <Card className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1 space-y-6">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Product Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={productData.name}
                      onChange={handleInputChange}
                      placeholder="Enter product name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="mb-2 block">Description</Label>
                    <Textarea 
                      id="description"
                      name="description"
                      value={productData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your product"
                      rows={5}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category" className="mb-2 block">Category *</Label>
                    <Select 
                      name="category" 
                      onValueChange={(value) => handleSelectChange("category", value)}
                      value={productData.category}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.slug} value={category.slug}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="md:col-span-1 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price" className="mb-2 block">Price ($) *</Label>
                      <Input 
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={productData.price}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="stock" className="mb-2 block">Stock Quantity</Label>
                      <Input 
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        value={productData.stock}
                        onChange={handleInputChange}
                        placeholder="Units in stock"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isOnSale" 
                      name="isOnSale"
                      checked={productData.isOnSale}
                      onCheckedChange={(checked) => 
                        setProductData({...productData, isOnSale: checked === true})
                      }
                    />
                    <Label htmlFor="isOnSale">Product is on sale</Label>
                  </div>
                  
                  {productData.isOnSale && (
                    <div>
                      <Label htmlFor="salePrice" className="mb-2 block">Sale Price ($)</Label>
                      <Input 
                        id="salePrice"
                        name="salePrice"
                        type="number"
                        step="0.01"
                        min="0"
                        value={productData.salePrice}
                        onChange={handleInputChange}
                        placeholder="0.00"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isFeatured" 
                      name="isFeatured"
                      checked={productData.isFeatured}
                      onCheckedChange={(checked) => 
                        setProductData({...productData, isFeatured: checked === true})
                      }
                    />
                    <Label htmlFor="isFeatured">Feature this product on homepage</Label>
                  </div>
                  
                  <div className="mt-4">
                    <Label className="mb-2 block">Product Image</Label>
                    <div className="border-2 border-dashed rounded-md p-8 text-center">
                      <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Drag and drop an image here, or click to browse
                      </p>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        id="product-image"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => document.getElementById("product-image").click()}
                      >
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex justify-end mt-6">
                  <Button type="button" variant="outline" className="mr-4" onClick={() => navigate("/seller-dashboard")}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-hw-blue hover:bg-hw-blue-600">
                    <Save className="mr-2 h-4 w-4" /> Save Product
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerAddProductPage;
