
"use client"
export default function Hydration() {

    // THIS COMPONENT SHOWS HOW TO PREVENT HYDRATIION USING THE DYNAMIC STYLE 
    const a  = Math.random()
console.log(a);

  return (
    <div>{a}</div>
  );
}
