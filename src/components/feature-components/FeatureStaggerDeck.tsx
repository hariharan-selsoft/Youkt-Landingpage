"use client";

import React, { useState, useEffect } from "react";
import { FeatureItem, YOUKT_FEATURE_LIST } from "./feature-data";
import { FeatureCard } from "./FeatureCard";

interface FeatureStaggerDeckProps {
  features?: FeatureItem[];
  progress: number; // 0 to 1
  onCardClick?: (index: number) => void;
}

export const FeatureStaggerDeck: React.FC<FeatureStaggerDeckProps> = ({
  features = YOUKT_FEATURE_LIST,
  progress = 0,
  onCardClick,
}) => {
  const [cardSize, setCardSize] = useState<number>(370);
  const [cardSpread, setCardSpread] = useState<number>(350);

  const numCards = features.length;
  // Total scroll steps: from card 0 through all cards and back to card 0 (numCards steps)
  const currentTarget = Math.max(0, Math.min(numCards, progress * numCards));

  useEffect(() => {
    const updateDimensions = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width < 640) {
        setCardSize(285);
        setCardSpread(245);
      } else if (width < 1024) {
        setCardSize(330);
        setCardSpread(295);
      } else if (width < 1440) {
        setCardSize(360);
        setCardSpread(345);
      } else {
        setCardSize(380);
        const dynamicSpread = Math.min(410, Math.max(360, width / 4.4));
        setCardSpread(dynamicSpread);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Build a continuous padded sequence of indices from -3 to numCards + 3
  // This guarantees silky smooth linear scroll without any modulo teleporting or jumping
  const paddedCards: { key: string; feature: FeatureItem; jIndex: number }[] = [];
  for (let j = -3; j <= numCards + 3; j++) {
    const itemIndex = ((j % numCards) + numCards) % numCards;
    paddedCards.push({
      key: `card-seq-${j}`,
      feature: features[itemIndex],
      jIndex: j,
    });
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ width: "100%", height: "540px", position: "relative" }}
    >
      {/* Side Edge Fade Gradients for seamless infinity deck appearance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-40"
      />

      {/* Floating Stagger Cards Deck - Driven by scroll position */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {paddedCards.map(({ key, feature, jIndex }) => {
          const position = jIndex - currentTarget;
          // Skip if beyond visual threshold
          if (Math.abs(position) > 3.6) return null;

          return (
            <div key={key} className="pointer-events-auto">
              <FeatureCard
                feature={feature}
                position={position}
                cardSize={cardSize}
                cardSpread={cardSpread}
                onClick={() => onCardClick?.(jIndex)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureStaggerDeck;
