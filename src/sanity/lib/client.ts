// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })



// .....................





// import { createClient } from '@sanity/client'

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: '2023-05-03', 
//   useCdn: false 
// })





// import { createClient } from '@sanity/client'



// // Alias sanityClient to creatrClient
// export const client = createClient({
//   projectId: '2r16530v',  // Aapka Sanity Project ID
//   dataset: 'production',   // Ya jo bhi aapka dataset hai
//   token: 'skThiIYzWnS8R89QreZs6DA3wfY7UyyBQcVmqIHOXA9cgmez7Cryng2NDixzxMJsvwSn1nH3TU2k4t3qmP9cfjijsmNU43i2fcjKTs0IO8A905i78UVEHmybC0u47kxqJ9F1QTeNek8lZoaZWoyd1fgaGeyPX8SezBHEhxzOAxutEozEF9IB',
//   useCdn: false,  // Write operations ke liye CDN off rakhein
// });


 import { createClient } from '@sanity/client'



// Alias sanityClient to createClient
export const client = createClient({
  projectId: '2r16530v',  // Your Sanity Project ID
  dataset: 'production',   // Your dataset name
  token: 'skThiIYzWnS8R89QreZs6DA3wfY7UyyBQcVmqIHOXA9cgmez7Cryng2NDixzxMJsvwSn1nH3TU2k4t3qmP9cfjijsmNU43i2fcjKTs0IO8A905i78UVEHmybC0u47kxqJ9F1QTeNek8lZoaZWoyd1fgaGeyPX8SezBHEhxzOAxutEozEF9IB',
  useCdn: false,  // Turn off CDN for write operations
  apiVersion: '2023-01-27',  // Specify API version (you can change the date to the version you want)
});
