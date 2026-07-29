"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SellCategoryGrid from "./SellCategoryGrid";
import ListingForm from "./ListingForm";
import PublishSuccess from "./PublishSuccess";
import SellTypeSelection from "./SellTypeSelection";

const schema = z.object({
  sellType: z.string().min(1, "Please select type"),
  category: z.string().min(1, "Please select a category"),
  subCategory: z.string().optional(),
  title: z.string().min(10, "Title must be at least 10 characters").max(70, "Title too long"),
  description: z.string().min(20, "Description must be at least 20 characters").max(4000, "Description too long"),
  brand: z.string().optional(),
  model: z.string().optional(),
  condition: z.string().min(1, "Please select a condition"),
  specifications: z.record(z.any()).optional(),
  price: z.string().min(1, "Price is required"),
  negotiable: z.boolean().default(false),
  images: z.array(z.any()).min(1, "Please upload at least 1 image").max(10, "Maximum 10 images allowed"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(2, "City is required"),
  area: z.string().min(2, "Area is required"),
  pincode: z.string().length(6, "Invalid Pincode"),
  sellerName: z.string().min(2, "Name is required"),
  phoneNumber: z.string().length(10, "Invalid Phone Number"),
  allowChat: z.boolean().default(true),
  showPhone: z.boolean().default(true),
});

export default function SellContainer() {
  const [stage, setStage] = useState(0); // 0: Old/New, 1: Category, 2: Form, 3: Success
  const [selectedCategory, setSelectedCategory] = useState(null);

  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      sellType: "",
      category: "",
      negotiable: false,
      images: [],
      allowChat: true,
      showPhone: true,
      condition: "",
    },
    mode: "onChange"
  });

  const handleSelectType = (type) => {
    methods.setValue("sellType", type, { shouldValidate: true });
    setStage(1);
    window.scrollTo(0, 0);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    methods.setValue("category", category.id, { shouldValidate: true });
    // Reset subcategory if category changes
    methods.setValue("subCategory", "");
    setStage(2);
    window.scrollTo(0, 0);
  };

  const handlePublish = (data) => {
    console.log("Published Listing Data:", data);
    setStage(3);
    window.scrollTo(0, 0);
  };

  const resetFlow = () => {
    methods.reset();
    setSelectedCategory(null);
    setStage(0);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4 sm:px-6">
      <FormProvider {...methods}>
        {stage === 0 && (
          <SellTypeSelection onSelectType={handleSelectType} />
        )}

        {stage === 1 && (
          <SellCategoryGrid onSelectCategory={handleSelectCategory} />
        )}
        
        {stage === 2 && selectedCategory && (
          <ListingForm 
            category={selectedCategory} 
            onPublish={handlePublish} 
          />
        )}

        {stage === 3 && (
          <PublishSuccess onReset={resetFlow} />
        )}
      </FormProvider>
    </div>
  );
}
