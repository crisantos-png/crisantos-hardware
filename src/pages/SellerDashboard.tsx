
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "@/components/ui/chart";
import { Plus, ShoppingBag, DollarSign, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";

const SellerDashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    // Redirect if not logged in or not a seller
    if (!user || user.role !== "seller") {
      navigate("/login");
      return;
    }

    // In a real app, you would fetch the seller's products from an API
    // For now, we'll just use the first few products as example
    setSellerProducts(products.slice(0, 6));
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-hw-gray-900">Seller Dashboard</h1>
            <Button 
              className="bg-hw-blue hover:bg-hw-blue-600"
              onClick={() => navigate("/seller-add-product")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New Product
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,548</div>
                <p className="text-xs text-green-500">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-green-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Products</CardTitle>
                <Package className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{sellerProducts.length}</div>
                <p className="text-xs">Active listings</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Customers</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-green-500">+5 new this week</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="analytics" className="mb-8">
            <TabsList>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart 
                      data={[
                        { name: "Jan", value: 2400 },
                        { name: "Feb", value: 1398 },
                        { name: "Mar", value: 9800 },
                        { name: "Apr", value: 3908 },
                        { name: "May", value: 4800 },
                        { name: "Jun", value: 3800 },
                      ]}
                      xAxisKey="name"
                      yAxisKey="value"
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Top Product Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart 
                      data={[
                        { name: "Power Tools", value: 4000 },
                        { name: "Hand Tools", value: 3000 },
                        { name: "Electrical", value: 2000 },
                        { name: "Plumbing", value: 2780 },
                        { name: "Garden", value: 1890 },
                      ]}
                      xAxisKey="name"
                      yAxisKey="value"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-2">Product</th>
                          <th className="text-left p-2">Price</th>
                          <th className="text-left p-2">Stock</th>
                          <th className="text-left p-2">Status</th>
                          <th className="text-right p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sellerProducts.map((product: any) => (
                          <tr key={product.id} className="border-t">
                            <td className="p-2">
                              <div className="flex items-center">
                                <img 
                                  src={product.image || "https://placehold.co/60x60"} 
                                  alt={product.name} 
                                  className="w-10 h-10 rounded mr-3" 
                                />
                                {product.name}
                              </div>
                            </td>
                            <td className="p-2">
                              ${product.price.toFixed(2)}
                            </td>
                            <td className="p-2">
                              {product.stock || "In Stock"}
                            </td>
                            <td className="p-2">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="p-2 text-right">
                              <Button variant="outline" size="sm" className="mr-2">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-2">Order ID</th>
                          <th className="text-left p-2">Customer</th>
                          <th className="text-left p-2">Date</th>
                          <th className="text-left p-2">Amount</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({length: 5}).map((_, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2">#ORD-{1000 + i}</td>
                            <td className="p-2">Customer Name</td>
                            <td className="p-2">Apr {10 + i}, 2025</td>
                            <td className="p-2">${(Math.random() * 500 + 50).toFixed(2)}</td>
                            <td className="p-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                i % 3 === 0 ? "bg-green-100 text-green-800" : 
                                i % 3 === 1 ? "bg-yellow-100 text-yellow-800" : 
                                "bg-blue-100 text-blue-800"
                              }`}>
                                {i % 3 === 0 ? "Delivered" : 
                                 i % 3 === 1 ? "Pending" : "Shipped"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellerDashboardPage;
