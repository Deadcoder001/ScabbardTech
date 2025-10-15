/* 
  How to use this file:
  1. Add your image files to the `/src/assets/gallery/` folder.
  2. Import each image here. For example:
     import myLogo from './assets/gallery/my-logo-design.jpg';
  3. Add an object for each image to the `galleryImages` array below,
     providing the imported image source and a category.
*/

// --- Step 2: Import your images here (examples are commented out) ---
import img1 from './assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import img2 from './assets/gallery/Scabbardtech-Portfolio-5-e1736231564431.png';
import img3 from './assets/gallery/Scabbardtech-Portfolio-7-e1736231889548.png';
import img4 from './assets/gallery/Scabbardtech-Portfolio-8-e1736232374904.png';
import img5 from './assets/gallery/Scabbardtech-Portfolio-9-e1736232806709.png';
import img6 from './assets/gallery/Scabbardtech-Portfolio-10-e1736232954573.png';
import img7 from './assets/gallery/Scabbardtech-Portfolio-11-e1736233048510.png';
// --- Step 3: Add your image data to this array ---
export const galleryImages = [
  // Using placeholder URLs until local images are added
  { src: img1, category: 'Logo Design' },
  { src: img2, category: 'Logo Design' },
  { src: img3, category: 'Mascot Design' },
  { src: img4, category: 'Mascot Design' },
  { src: img5, category: 'Social Media' },
  { src: img6, category: 'Social Media' },
  { src: img7, category: 'Packaging Design' },
];