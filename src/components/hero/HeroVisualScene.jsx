"use client";

import React from "react";
import AnimatedVehiclesScene from "./scenes/AnimatedVehiclesScene";
import AnimatedLivingScene from "./scenes/AnimatedLivingScene";
import AnimatedElectronicsScene from "./scenes/AnimatedElectronicsScene";
import AnimatedEquipmentScene from "./scenes/AnimatedEquipmentScene";

/**
 * HeroVisualScene
 * Renders category-specific animated SVG scenes inspired by quick-commerce
 * (Flipkart Minutes / Blinkit), replacing static hero photographs with real moving objects:
 *
 * - Slide 1: Cars and Bikes (Driving sports car, motorcycle, moving highway dash lines, exhaust puffs)
 * - Slide 2: Furniture and Properties (Sofa slide & breathe, floor lamp light cone, swaying plant, steaming mug)
 * - Slide 3: Electronics and Mobiles (Smartphone tilt with live Bachat notification, opening laptop with glowing scan, TWS audio waves)
 * - Slide 4: Gym, Agriculture and Equipment (Farm tractor chug with rotating lug wheels, dumbbell lifting curl, kettlebell, industrial gear)
 */
export default function HeroVisualScene({ slideId, className = "" }) {
  switch (slideId) {
    case 1:
      return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <AnimatedVehiclesScene />
        </div>
      );
    case 2:
      return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <AnimatedLivingScene />
        </div>
      );
    case 3:
      return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <AnimatedElectronicsScene />
        </div>
      );
    case 4:
      return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <AnimatedEquipmentScene />
        </div>
      );
    default:
      return (
        <div className={`w-full h-full flex items-center justify-center ${className}`}>
          <AnimatedVehiclesScene />
        </div>
      );
  }
}
